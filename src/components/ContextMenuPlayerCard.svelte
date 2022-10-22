<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import PlayerCard from './PlayerCard.svelte';

    import { afterUpdate } from 'svelte';

    export let player
    export let x: number
    export let y: number

    $: images = './images'

    const dispatch = createEventDispatcher();
    const close = () => {
        dispatch('close')
    };
    
    document.onvisibilitychange = () => {
    if (document.visibilityState === 'hidden') 
        close();
    };

    afterUpdate(() => {
        if(x + document.getElementById("Contents").clientWidth >= document.getElementById("scoreboard").clientWidth)
            x = x - document.getElementById("Contents").clientWidth
        
        if(y + document.getElementById("Contents").clientHeight >= document.getElementById("scoreboard").clientHeight)
            y = y - document.getElementById("Contents").clientHeight
    })


</script>

<div class="modal-background" on:click={close} />

<div id="Contents" class="ContextMenuPlayerCard" style:left='{x}px' style:top='{y}px'>
    <div class="context-menu-playercard-info">
        <PlayerCard {player} />
    </div>
    <div class="context-menu-playercard-seperator" />
    <div class="context-menu-playercard-btns">
        <div class="IconButton">
            {#if !player.Local}
            <button on:click={cm.scoreboard.SetPlayerMute(player.Index)}>
                <img src="{images}/{player.VoiceBlocked ? 'muted' : 'unmuted'}.svg" alt="#voice">
            </button>
            {/if}
        </div>
        <div class="IconButton">
            <input type="color">
        </div>
        <div class="IconButton">
            
        </div>
    </div>
</div>


<style>
    input[type="color"] {
        content: url(/images/colorwheel.svg);
        background-color: #00000000;
        border: none;

        width: 2.46em;
        height: 2.46em;
    }
    img {
        width: 2.46em;
        height: 2.46em;
    }
    

    .modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
        z-index: 10;
	}
   #Contents.ContextMenuPlayerCard
    {
        position: absolute;
        z-index: 11;
        display: flex;
        flex-direction: row;

        background-color: var(--contextMenuBackground);
        border-radius: 2px;
        opacity: 1;
        box-shadow: var(--shadowOffset);
        border: 0px solid black;
        border-radius: 3px;
        margin: 0px;
        padding: 0px;
        width: max-content;
        height: max-content;
        margin: 0.5em; /* 8px */

        transition-property: height;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }

    .context-menu-playercard-info
    {

        width: 24em; /* 384px */
    }

    .context-menu-playercard-seperator
    {
        background-color: rgba(124, 124, 124, 0.15);
        width: 1px;
        height: auto;
    }

    .context-menu-playercard-btns
    {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: fit-content;
        height: fit-content;
        margin: 0.25em 0px; /* 4px 0 */

    }

    .context-menu-playercard-btns .IconButton
    {
        margin: 0.5em 1em; /* 8px 16px 8px 16px */
    }
    
</style>