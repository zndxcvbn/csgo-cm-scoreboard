<script lang="ts">
    export let player
    export let spec_mute: boolean = false
    export let cycle_stat: boolean = false
    export let show_contextmenu: boolean = false

    import ContextMenuPlayerCard from "./ContextMenuPlayerCard.svelte"

    const teamsName: string[] = [
        'SPEC', 
        'SPEC', 
        'TERRORIST', 
        'CT',
    ]

    let pos = { x: 0, y: 0 };

    $: playerAvatar = player.Avatar ? player.Avatar : player.Online == 1 ? `${images+'/unknown.png'}` : `${images+'/avatar-'+team+(team == 'SPEC' ? '.svg' : '.png')}`    
    $: muteState = !player.Local ? (player.VoiceBlocked ? 'muted' : 'unmuted') : '' || spec_mute ? 'muted' : ''
    $: team = player.ClientMod !== 1 ? teamsName[player.Team] : 'CM'
    $: images = '/images'

</script>

{#if show_contextmenu}
    <ContextMenuPlayerCard {player} {...pos} on:close="{() => show_contextmenu = false}">


    </ContextMenuPlayerCard>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="sb-row {player.Local ? 'localplayer no-hover' : ''} {muteState} {(player.Team == 2 || player.Team == 3) && !player.Alive ? 'sb-player-status-dead' : ''}" 
    on:click={() => show_contextmenu = true}
    on:click={e => pos = { x: e.clientX, y: e.clientY }} >

    <slot name="stat--STATUS">
        <div data-stat="status" class="sb-row__cell status">
            <slot name="label--STATUS">
                {#if player.Team == 2 && !player.Alive}
                    <img src='{images}/terrorist_dead.svg' class="status_img" alt="#dead" />
                {:else if player.Team == 3 && !player.Alive}
                    <img src='{images}/ct_dead.svg' class="status_img" alt="#dead" />
                {:else if player.Defuser}
                    <img src='{images}/defuser.svg' class="status_img" alt="#defuser" />
                {:else if player.C4}
                    <img src='{images}/bomb_c4.svg' class="status_img" alt="#bomb" />
                {/if}
            </slot>
        </div>
    </slot>
    <slot name="stat--PING" >
        <div data-stat="ping" class="sb-row__cell ping {player.FakePlayer ? '__label--bot' : ''}"> 
            <slot name="label--PING">
                {player.FakePlayer ? 'BOT' : player.Ping}
            </slot>
        </div>
    </slot>
    <slot name="stat--RANK">
        <div data-stat="rank" class="sb-row__cell rank">
            <slot name="label--RANK">

            </slot>
        </div>
    </slot>
    <slot name="stat--AVATAR">
        <div data-stat="avatar" class="sb-row__cell avatar">
            <slot name="label--AVATAR">
                <img class="avatar {player.Online == 0 ? 'unknown' : ''}"  style:border="{player.Local ? '0.10em solid #fff' : 'none'}" src={playerAvatar} alt="#">
                {#if muteState == 'muted' || spec_mute}
                    <img class="avatar__muted" src="{images}/muted.svg" alt="#mute">
                {/if}
            </slot>
        </div>
    </slot>
    <slot name="stat--NAME">
        <div data-stat="name" class="sb-row__cell name">
            <slot name="label--NAME">
                {#if player.ClanTag}
                <span class="sb-clantag">{player.ClanTag + ' '}</span><span class="sb-player-name">{player.Name}</span>
                {:else}
                <span class="sb-player-name">{player.Name}</span>
                {/if}
            </slot>
        </div>
    </slot>

    <slot name="stat--FLAIR">
        <div data-stat="flair" class="sb-row__cell flair">
            <slot name="label--FLAIR">

            </slot>
        </div>
    </slot>
    
    {#if !cycle_stat}
    <slot name="stat--MONEY" data-set="0">
        <div data-stat="money" class="sb-row__cell money">
            <slot name="label--MONEY">
                {#if player.Money !== -1}
                    ${player.Money}
                {/if}
            </slot>
        </div>
    </slot>
    <slot name="stat--KILLS" data-set="0">
        <div data-stat="kills" class="sb-row__cell kills">
            <slot name="label--KILLS">
                {player.Score}
            </slot>
        </div>
    </slot>
    <slot name="stat--ASSISTS" data-set="0">
        <div data-stat="assists" class="sb-row__cell assists">
            <slot name="label--ASSISTS">
                <!-- {player.Assists} -->
            </slot>
        </div>
    </slot>
    <slot name="stat--DEATHS" data-set="0">
        <div data-stat="deaths" class="sb-row__cell deaths">
            <slot name="label--DEATHS">
                {player.Deaths}
            </slot>
        </div>
    </slot>
    <slot name="stat--MVPS" data-set="0">
        <div data-stat="mvps" class="sb-row__cell mvps">
            <slot name="label--MVPS">
                <!-- {#if player.Mvps > 0}
                <img id="star-image" 
                        class="mvps__star sb-team-tint hidden"
                        src="{images}/{player.Team == 2 ? 'terrorist' : 'ct'}_star.svg"
                        alt="#mvp_star">
                <div id="star-count" class="mvps__count sb-team-tint hidden">
                    {player.Mvps}
                </div>
                {/if} -->
            </slot>
        </div>
    </slot>

    {:else}
    <slot name="stat--HSP" data-set="1">
        <div	data-stat="hsp" class="sb-row__cell hsr">
            <slot name="label--HSR">
                <!-- {player.HSR} -->
            </slot>
        </div>
    </slot>
    <slot name="stat--KDR" data-set="1">
        <div	data-stat="kdr" class="sb-row__cell kdr">
            <slot name="label--KDR">
                {player.Deaths == '0' ? player.Score : (player.Score / player.Deaths).toFixed(2)}
            </slot>
        </div>
    </slot>
    <slot name="stat--ADR" data-set="1">
        <div	data-stat="adr" class="sb-row__cell adr">
            <slot name="label--ADR">
                <div id="label">
                    <!-- {player.ADR} -->
                </div>
            </slot>
        </div>
    </slot>
    <slot name="stat--UTILITYDAMAGE" data-set="1">
        <div	data-stat="utilitydamage" class="sb-row__cell utilitydamage">
            <slot name="label--UTILITYDAMAGE">
                <!-- {player.UTILITYDAMAGE} -->
            </slot>
        </div>
    </slot>
    <slot name="stat--ENEMIESFLASHED" data-set="1">
        <div	data-stat="enemiesflashed" class="sb-row__cell enemiesflashed">
            <slot name="label--ENEMIESFLASHED">
                <!-- {player.ENEMIESFLASHED} -->
            </slot>
        </div>
    </slot>
    {/if}

    <slot name="stat--SCORE">
        <div data-stat="score" class="sb-row__cell score">
            <slot name="label--SCORE">
                <!-- {player.Scores} -->
            </slot>
        </div>
    </slot>
    
</div>

<style>
    .status_img {
        height: 1.375em;
    }
    .sb-row {
		display: flex;
        /* flex-direction: row; */
        align-items: center;

        position: relative;
        
        width: var(--sb-row-width);

        margin-top: 1px;
	    margin-bottom: 1px;

        background-color: var(--cell-background-lighter);

        transition-property: position, opacity;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

		/* scroll-snap-align: start; */
	}
    
    
    .sb-row.muted.sb-player-status-dead { background-color: #00000000 }
    
    .sb-row.muted { background-color: #ff00001b }
    
    .sb-row.muted .sb-row__cell{ color: #ff0000a0 }
    
    .sb-row:not(.no-hover):hover { background-color: rgba(200,200,200,0.05) }
    
    .sb-row.sb-player-status-dead,
    .sb-row.sb-player-status-dead .sb-row__cell:nth-child(n) {
        background-color: #00000000;
        opacity: 0.5;
    }
	.sb-row.localplayer {
        /* position: var(--localplayer-position);
		top: 0;
        bottom: 0;
        z-index: 2; */
        background-color: var(--localplayer-background);
		/* backdrop-filter: brightness(0); */
	}

    .sb-row__cell:nth-child(2n+7) { background-color: var(--cell-background-lighter) }
    
    .sb-row__cell {
        height: var(--row-image-size);

        transition-property: filter, color;
        transition-duration: 0.25s;
        transition-timing-function: ease-out;

        background-color: var(--cell-background-light);
        
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin: 0;

        font-family: 'Stratum2 Regular Monodigit', 'Stratum2', Arial, Helvetica, sans-serif;

        font-size: 1em; /* 16px */

        width: 2.8125em; /* 45px */
    }
    .sb-row__cell.ping {

        justify-content: center;
        font-size: 0.875em; /* 14px */

        width: 2.64285em; /* 37px */

        color: #888;
    }
    .sb-row__cell.ping.__label--bot { font-size: 0.75em; width: 3.08333em } /* 12px */

    .sb-row__cell.status {
        width: calc(var(--row-image-size) + 0.25em);
        padding: 0.125em;

        justify-content: left;
        background-size: contain;
    }
    .sb-row__cell.rank {
        width: calc(var(--row-image-size) + 0.25em);
        padding: 0.125em;
    }
    .avatar {
        width: calc(var(--row-image-size) - 0.25em);
        height: calc(var(--row-image-size) - 0.25em);
    
        position: relative;
    }
    .sb-row__cell.name {
        font-family: 'Stratum2', Arial, Helvetica, sans-serif;
        white-space: pre;
        justify-content: left;
        text-overflow: ellipsis;
        max-height: 1.5em; /* 24px */
        font-size: 0.875em; /* 14px */
        padding-right: 0.5em; /* 8px */
        padding-left: 0.5em; /* 8px */

        width: max-content;
        flex: 1;
    }
    .sb-row__cell.name > span {
        display: flex;
        
        margin-top: 0.25em;
    }
    .sb-row__cell.money {
        width: 4em; /* 64px */
        margin-left: auto;
    }
    .sb-row__cell.kills,
    .sb-row__cell.deaths,
    .sb-row__cell.assists { width: 2.1875em } /* 35px */

    .sb-row__cell.mvps {
        position: relative;
        width: 2.875em; /* 46px */
    }
    .mvps__star {
        width: 1em; /* 16px */
        height: 1em; /* 16px */
        /* vertical-align: middle; */
        /* horizontal-align: center; */
    }
    div.mvps__count {
        /* text-align: center; */ 
        font-size: 10px; 
        position: absolute;
        align-self: flex-start;

        margin-left: 0px;
        margin-right: 0px;

        transform: translateX( 8px );
    }
    
    .sb-row__cell.status,
    .sb-row__cell.ping,
    .sb-row__cell.rank,
    .sb-row__cell.avatar,
    .sb-row__cell.name,
    .sb-row__cell.flair  { background-color: var(--cell-background-dark) }
    .sb-row__cell.score { background-color: #FFFFFF20 }

    .sb-row__cell.hsp { }	

    .sb-row__cell.kdr { width: 3.125em } /* 50px */
    .sb-row__cell.adr {  }	
    .sb-row__cell.utilitydamage { }	

    .avatarProfile {
        width: 5em;
        height: 5em;
    }

    .avatar .avatar__muted {
        width: 80%;
        height: 80%;
        position: absolute;
        visibility: visible;
        background-color: #808080f0;
        opacity: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sb-clantag { font-weight: bold; }

    :global(.tooltip) {
        --tooltip-font-family: 'Stratum2', Arial, Helvetica, sans-serif;
        --tooltip-font-size: 0.75em; /* 12px */
        --tooltip-background-color: rgba(15, 15, 15, 0.99);
        --tooltip-border-radius: 0.3125em;
        /* --tooltip-padding: 16px; */
    }

    .nameProfile {
        color: whitesmoke;
        display: inline-flex;
        font-size: 1.1em;
        padding: 0 0.7em;
    }

</style>