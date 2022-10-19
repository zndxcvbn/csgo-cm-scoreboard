<script lang="ts">
	export let players
	export let teams
	export let spec_mute: boolean
	export let cycle_stat: boolean = false
	
	import { CSPlayerFilterFunc } from '../helpers'
	import Player from './Player.svelte'
	
	$: spectators = (CSPlayerFilterFunc(players, 1).concat(CSPlayerFilterFunc(players, 0))).sort((it1, it2) => { return Number(it2.STV) - Number(it1.STV) })
	
	$: terrorists = CSPlayerFilterFunc(players, 2)
	$: counterTerrorists = CSPlayerFilterFunc(players, 3)

	// $: sb_team_ping__TERRORIST = CSPlayerGetLatencyFunc(terrorists)
	// $: sb_team_ping__CT = CSPlayerGetLatencyFunc(counterTerrorists)

	// $: teamname_SPEC = teams[1] ? teams[1].Name : 0
	$: teamname_TERRORIST = teams[2] ? teams[2].Name : 0
	$: teamname_CT = teams[3] ? teams[3].Name : 0

	$: TERRORIST_team_score = teams[2] ? teams[2].Score : 0
	$: CT_team_score= teams[3] ? teams[3].Score : 0
	
	// $: SPEC_total = (teams[1] ? teams[1].PlayersCount - CSPlayerGetSTV(spectators) : 0) + (teams[0] ? teams[0].PlayersCount : 0)
	$: TERRORIST_total = teams[2] ? teams[2].PlayersCount : 0
	$: CT_total = teams[3] ? teams[3].PlayersCount : 0

	$: TERRORIST_alive = teams[2] ? teams[2].PlayersAlive : 0
	$: CT_alive = teams[3] ? teams[3].PlayersAlive : 0

</script>


<div id="id-sb-team--CT" class="sb-team sb-team--CT">

	<div class="sb-team__info sb-team-logo-background--CT sb-color--CT">
		<div id="id-sb-team__info--ct" class="sb-team__info__score" >
			<div class="label">{CT_team_score}</div>
		</div>
		<div class="sb-team__info__name">{teamname_CT}</div>
		<div class="sb-team__info__number">{cm.translation.Language() === 'russian' ? 'В живых' : 'Alive'}: {CT_alive}/{CT_total}</div>
	</div>

	<div class="sb-team__data sb-team__data--CT">
		<div id="players-table-CT" class="sb-players-table">
			{#each counterTerrorists as counterTerrorist}

				<Player bind:cycle_stat player={counterTerrorist} --localplayer-background="rgba(0, 166, 255, 0.07)" />

			{/each}
		</div>
	</div>
</div>



<div id="id-sb-team--TERRORIST" class="sb-team sb-team--TERRORIST">
	
	<div class="sb-team__info sb-team-logo-background--TERRORIST sb-color--TERRORIST">
		<div id="id-sb-team__info--t" class="sb-team__info__score" >
			<div class="label">{TERRORIST_team_score}</div>
		</div>
		<div class="sb-team__info__name">{teamname_TERRORIST}</div>
		<div class="sb-team__info__number">{cm.translation.Language() === 'russian' ? 'В живых' : 'Alive'}: {TERRORIST_alive}/{TERRORIST_total}</div>
	</div>

	<div class="sb-team__data sb-team__data--TERRORIST">
		<div id="players-table-TERRORIST" class="sb-players-table">
			{#each terrorists as terrorist}

				<Player bind:cycle_stat player={terrorist} --localplayer-background="rgba(255, 238, 0, 0.07)" />

			{/each}
		</div>
	</div>

</div>



<div id="id-sb-team--SPEC" class="sb-team sb-team--SPEC">
	<div class="sb-team__info" />

	<div class="sb-team__data sb-team__data--SPEC">
		<div id="players-table-SPEC" class="sb-players-table">
			{#each spectators as spectator}

				<Player player={spectator} {spec_mute} --cell-background-light="#00000000" --cell-background-lighter="#00000000" --cell-background-dark="#00000000" --localplayer-position="static">

					<div slot="label--STATUS" />
					<div slot="label--PING" style:font-size={spectator.FakePlayer ? "0.83333em" : "0.71428em"} style:text-transform="uppercase">{spectator.STV ? 'STV' : cm.translation.Language() === 'russian' ? 'ЗРИТ' : 'SPEC'}</div>
					<div slot="label--RANK" />
					<div slot="stat--FLAIR" />
					<div slot="stat--MONEY" />
					<div slot="stat--KILLS" />
					<div slot="stat--ASSISTS" />
					<div slot="stat--DEATHS" />
					<div slot="stat--MVPS" />
					<div slot="stat--SCORE" />
					
				</Player>

			{/each}
		</div>
	</div>

</div>


<style>
	.sb-team { display: flex }

	.sb-team--CT, .sb-color--CT { color: var(--color-CT) }

	.sb-team--CT { margin-bottom: 1.25em } /* 20px */

	.sb-team--TERRORIST,
	.sb-color--TERRORIST { color: var(--color-T) } 
	.sb-team--SPEC {
		color: #ffffff;

		opacity: 0.8;
		margin-left: 0px;
	} 

	#id-sb-team--SPEC { padding-top: 1.25em } /* 20px */

	.sb-players-table {
		display: flex;
		flex-direction: column;
		
		width: fit-content;
		height: fit-content;
		overflow: clip overlay;

		
		/* scroll-snap-type: y mandatory; */
	}
	#players-table-CT,
	#players-table-TERRORIST {
		min-height: 7.5em; /* 120px */
		max-height: 15.375em; /* orig 270px , real 246px */
	}
	#players-table-SPEC {
		margin-bottom: 1.25em; /* 20px */
		max-height: 6.75em; /* 108px */
	}


	.sb-team__info {
		width: var(--left-panel-width);
		position: relative;

		margin-right: 0.625em; /* 10px */

		background-size: contain;
		background-repeat: no-repeat;
		background-position: 0% 0%;
	
	}
	.sb-team__info__name { text-transform: uppercase }
	.sb-team__info__number { opacity: 0.2 }
	
	.sb-team__info__name,
	.sb-team__info__number {

		font-size: 0.75em; /* 12px */

		margin-top: 0.16666em;
		
		text-align: center;
		text-shadow: 1px 1px 1px 1.0 #000000;

		max-width:  7.5em; /* 90px */
		/* overflow: squish noclip; */

	}
	.sb-team__info__score {
		width: var(--left-panel-width); 
		height: var(--left-panel-width);

		/* text-align: center; */
		display: flex;
		align-items: center;
		justify-content: center;

        /* font-family: 'Stratum2 Bold Monodigit', 'Stratum2', Arial, Helvetica, sans-serif; */

	}
	.sb-team__info__score .label {
		font-size: 4em; /* 64px */
		font-weight: bolder;
		margin-top: 0.078em; /* 5px */
		text-align: center;

		text-shadow: 2px 2px 3px #00000080;
	}

	.sb-team-logo-background--CT { background-image: url(/images/CT_logo.svg) }
	.sb-team-logo-background--TERRORIST { background-image: url(/images/TERRORIST_logo.svg) }

</style>
