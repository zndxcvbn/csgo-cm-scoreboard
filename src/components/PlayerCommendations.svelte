<script lang="ts">

    $: images = './images'
</script>

<div id="JsPlayerCommendations" class="player-card-commendations-container player-card-border hidden">
    <div class="player-card-commendations">
        <div    id="JsPlayerPrime"
                class="player-card-commendations-icon"  > 
            <img id="JsPlayerPrimeImg" style="tooltip-position: bottom;" src="{images}/prime.svg"/>
            <span id="JsCommendspan">0</span>
        </div>
        <div    id="JsPlayerfriendly"
                class="player-card-commendations-icon" >
            <img id="JsPlayerfriendlyImg" style="tooltip-position: bottom;" src="{images}/smile.svg"/>
            <span id="JsCommendspan">0</span>
        </div>
        <div    id="JsPlayerteaching"
                class="player-card-commendations-icon" >
            <img id="JsPlayerteachingImg" style="tooltip-position: bottom;" src="{images}/teacher.svg"/>
            <span id="JsCommendspan">0</span>
        </div>
        <div    id="JsPlayerleader"
                class="player-card-commendations-icon" > 
            <img id="JsPlayerleaderImg" style="tooltip-position: bottom;" src="{images}/leader.svg"/>
            <span id="JsCommendspan">0</span>
        </div>             
    </div>
</div>

<style>
    .player-card-commendations-container
    {
        display: flex;
        align-self: flex-end;
        opacity: 1;
        visibility: visible;
        width: 100%;
        flow-content: right;
        horizontal-align: left;
    }
    
    .player-card-commendations
    {
        display: flex;
        flex-direction: row;

        visibility: visible;
        height: fit-content;
        max-height: 8.25em; /* 132px */
        width: fit-content;
        vertical-align: middle;
        horizontal-align: left;
        flow-content: right;
        margin-left: 1.5em; /* 24px */
    }

    .player-card-commendations-icon
    {
        opacity: 1;
        visibility: visible;
        flow-content: right;
        width: fit-content;
        margin: 1em; /* 16px */
    }

    .player-card-commendations img
    {
        width: 1.125em; /* 18px */
        height: 1.125em; /* 18px */
    }

    .player-card-commendations span
    {
        font-size: 0.875em; /* 14px */
        vertical-align: top;
        margin-left: 0.285em; /* 4px */
        color: white;
    }
</style>