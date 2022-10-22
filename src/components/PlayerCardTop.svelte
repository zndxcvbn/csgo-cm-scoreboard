<script lang="ts">
    export let player

</script>

<div id="JsPlayerCardTop" class="player-card-row">
    <div id="JsPlayerCardName" class="player-card-row__name" >
        <span id="JsPlayerName" class="player-card__text">
            {player.Name}
        </span>

        <div id="FlairCarouselAndControls" class="playercard-flair-carousel-container">
            <div id="FlairCarousel" class="playercard-flair-carousel">
                                    
            </div>
        </div>
    </div>
</div>	


<style>
    .player-card-row
    {
        flow-content: right;
        padding: 0px 0px 0px 0px;
        height: fit-content;
        width:100%;

        transition-property: filter;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }
    .player-card-row__name 
    {
        display: flex;
        flex-direction: column;
        margin-top: 0.5em; /* 8px */
        vertical-align: middle;
        width: 100%;
        margin-left: 1em; /* 16px */
        height: fit-content;
    }
    .player-card__text,
    .player-card-row__name .player-card__text
    {
        max-height: 1.2em; /* 24px */
        padding-right: 1px;
        font-size: 1.25em; /* 20px */
        text-overflow: ellipsis;
        font-weight: Bold;
        text-shadow: 2px 2px 2px #000000;
        color: white;
        font-family: 'Stratum2', Arial, Helvetica, sans-serif;
        overflow: clip;
    }
    
</style>