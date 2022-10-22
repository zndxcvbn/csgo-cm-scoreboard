<script lang="ts">
    $: images = './images'
</script>

<div id="GetPrestigeButton" class="player-card-xp-getprestigebutton hidden">
    <img class="player-card-xp-getprestigebutton__icon" height='24' width='-1' src="{images}/bomb_arrow_segment.svg" alt="#xp_up" />
    <button id="GetPrestigeButtonClickable">
        <span>Получить медаль</span>
    </button>
</div>

<style>

    #GetPrestigeButtonClickable
    {
        margin: 0px;
        vertical-align: center;
    }
    #GetPrestigeButtonClickable span
    {
        margin-left: 6em; /* 96px */
    }
    .player-card-xp-getprestigebutton__icon
    {
        vertical-align: center;
        transform: rotateZ( 180deg );
        margin-left: 2.375em; /* 38px */
    }
    .player-card-xp-getprestigebutton
    {
        display: flex;
        justify-content: left;
        align-items: center;
        vertical-align: top;
        margin-top: 0px;
        margin-bottom: 0.5em; /* 8px */
        width: 100%;
        height: 2em; /* 32px */
        background-color: linear-gradient( 90deg, 0% #3a863d, 100% #2d682f );
        box-shadow: var(--shadowOffset);

        transition-property: background-color;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }
    .player-card-xp-getprestigebutton:hover
    {
        background-color: var(--positiveColor);

        transition-property: background-color;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }
</style>