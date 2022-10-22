<script lang="ts">
	export let server_name: string
	export let s_gametime_time: string
	export let map_name: string
	export let spec_mute: boolean
	export let show_hint: boolean
	export let viewers: number
	export let cycle_stat: boolean = false


	import { Tooltip } from '@svelte-plugins/tooltips';
	import CSGOGameTimeLabel from './CSGOGameTimeLabel.svelte'
	
	let all_mute: boolean = false

	$: images = '/images'

</script>


<div class="sb-meta">
	<div class="top-bottom-flow full-width">

		<div class="full-width bottom-divider meta-row">
			<img id="id-sb-meta__mode__image" src="{images}/casual.svg" alt="#mode_img">
			<div id="id-sb-meta__labels__mode-map">{cm.translation.Language() === 'russian' ? 'Обычный' : 'Casual'} | {map_name}</div>

			<div class="time_container">
				<CSGOGameTimeLabel text={s_gametime_time} />
			</div>
		</div>
		
		<div class="full-width meta-row">
			<div id="id-sb-meta__musickit">
				<img id="id-sb-meta__musickit-image" src="{images}/music_kit.svg" alt="#musickit_img">
				<div id="id-sb-meta__musickit-name">CS:S</div>
		
			</div>

			{#if show_hint}
			
			<div id="id-sb-meta__button-panel" class="hidden">

				<div class="sb-meta__button-panel__group">
					<Tooltip content="{cm.translation.Language() === 'russian' ? 'Скрыть имена и аватары незнакомцев' : 'Block names and avatars of strangers'}" position="top" animation="slide" arrow={false}>
						<span id="id-sb-meta__blockugc" class="sb-meta__button-panel__btn">
							<img id="id-sb-meta__blockugc__image" src="{images}/{all_mute ? 'votekick' : 'player'}.svg" alt="#scoreboard_blockugc_button" />
						</span>
					</Tooltip>
				</div>
				
				<div class="sb-meta__button-panel__group">
					<Tooltip content="{cm.translation.Language() === 'russian' ? 'Выключить голосовой чат' : 'Disable all voice comms'}" position="top" animation="slide" arrow={false}>
						<span id="id-sb-meta__mutevoice" class="sb-meta__button-panel__btn" on:click={() => cm.scoreboard.ToggleSpectatorsMute()}>
							<img id="id-sb-meta__mutevoice__image" src="{images}/{spec_mute ? 'muted' : 'unmuted'}.svg" alt="#scoreboard_mutevoice_button" />
						</span>
					</Tooltip>
				</div>
				
				<div class="sb-meta__button-panel__group">
					<Tooltip content="{cm.translation.Language() === 'russian' ? 'Листать статистику' : 'Cycle stats'}" position="top" animation="slide" arrow={false}>
						<span id="id-sb-meta__cycle" class="sb-meta__button-panel__btn" on:click={() => cycle_stat = !cycle_stat}>
							<img src="{images}/stats.svg" alt="#scoreboard_cyclestats_button" />
						</span>
					</Tooltip>
				</div>
				
			</div>

			{:else}

			<div id="id-sb-meta__labels__server-viewers">
				{cm.translation.Language() === 'russian' ? 'Сервер' : 'Server'}: {server_name}
				{#if viewers !== null && viewers !== undefined}
					{cm.translation.Language() === 'russian' ? 'Зрителей' : 'Viewers'}: {viewers}
				{/if}
			</div>

			{/if}

		</div>
	</div>	
</div>



<style>

	.meta-row {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		
		padding-top: 0.25em; /* 4px */
		padding-bottom: 0.25em; /* 4px */
	}

	#id-sb-meta__musickit {
		display: flex;
		align-items: center;
		align-self: start;
		/* flow-children: right;
		horizontal-align: left; */
	}

	#id-sb-meta__musickit div {
		font-size: 0.875em; /* 14px */
		
		color: grey;

		mix-blend-mode: additive;
	}
	#id-sb-meta__musickit-image {
		width: 1.75em;
		height: 1.75em;

		margin-right: 0.3125em; /* 5px */
	}

	.sb-meta {
		width: 100%;
		height: 4.6875em;
		vertical-align: top;
	}

	#id-sb-meta__mode__image {
		width: 1.5em;
		height: 1.5em;

		vertical-align: top;
		margin: 0px 1.125em 0px 0.375em; /* 0px 1.125em 0px 6px */
		color-interpolation-filters: sRGB;
		opacity: 1;			
	}
	#id-sb-meta__labels__mode-map {
		display: flex;
		/* align-self: center; */
		font-size: 1.125em; /* 18px */
		text-align: left;		
		color: grey;

		position: 2.222em 0px 0px; /* 40px 0px 0px*/

		font-weight: bold;

		text-overflow: shrink;
		max-width: 30.555em; /* 550px */
	}	

	.time_container { margin-left: auto }

	#id-sb-meta__labels__server-viewers {

		font-size: 0.875em; /* 14px */
		display: flex;
		align-self: center;
		mix-blend-mode: additive;
		color: grey;

		margin-left: auto;
							
		font-weight: normal;
	}

	#id-sb-meta__button-panel {

		/* flow-children: left;

		horizontal-align:right; */
		margin-left: auto;

		margin-top: 0.625em; /* 10px */
	}
	                  
	.sb-meta__button-panel__group {

		/* flow-children: right; */

		display: inline-flex;

		margin-left: 0.625em; /* 10px */


		/* horizontal-align:right; */
	}

	.sb-meta__button-panel__btn {
		display: flex;
		padding: 0.1875em; /* 3px */

		background-color: #80808080;

		color: #cccccc;
	}
	/* .sb-meta__button-panel__btn Label {
		text-align: center;
		font-size: 14px;
		vertical-align: center;
		horizontal-align: center;
		text-overflow: ellipsis;

	} */
	.sb-meta__button-panel__btn img {
		align-self: center;
		width: 1.25em; /* 20px */
		height: 1.25em; /* 20px */
	}

	.sb-meta__button-panel__btn:hover, span:hover { filter: brightness(2.0) }

	:global(.tooltip.tooltip-theme) { --tooltip-font-family: 'Stratum2', Arial, Helvetica, sans-serif }

</style>
