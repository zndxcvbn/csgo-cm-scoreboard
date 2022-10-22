<script lang="ts">

    $: images = './images'
</script>


<div id="JsPlayerXp" class="player-card-xp player-card-border flex-row center" >
    <div class="player-card-xp__icon-container">
        <img id="JsPlayerXpIcon"
                style="tooltip-position: bottom;"
                class="player-card-xp__icon" src="{images}/level40.png"/>
        <img class="player-card-nonprime__lock" height='12' width='-1' src="{images}/locked.svg">
    </div>
    <div class="player-card-xp__name-bar">
        <span id="JsPlayerRankName" class="player-card__text-subtitle">Ранг: Маршал, 40</span>
        <div class="player-card-xpbar">
            <div class="player-card-xpbar__bar"/>
            <div id="JsPlayerXpBarInner" class="player-card-xpbar__bar--inner"/>
        </div>
    </div>
</div>

<style>
    .player-card-xp__icon-container
    {
        overflow: noclip;
        display: flex;
    }
    .player-card-xp__icon
    {
        display: flex;
        align-self: center;
        opacity: 1;
        visibility: visible;
        width: 64px;
        height: 64px;

        filter: drop-shadow(2px 2px 2px #000000);
    }
    .player-card-xp__name-bar
    {
        flow-content: down;
        height: fit-content;
        width: fit-content;
        margin-left: 26px;
        vertical-align: middle;
    }
    .player-card-xpbar
    {
        position: relative;
        margin-top: 8px;
        width: 256px;
        height: fit-content;
        box-shadow: var(--shadowOffset);
    }
    .player-card-xpbar__bar
    {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000d3;
        height: 8px;
        width: 256px;
        
    }
    .player-card-xpbar__bar--inner
    {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient( 90deg, #0A5A84 0%, #5DC6FF 100% );
        width: 50%;
        height: 8px;
    }
    .player-card__text-subtitle
    {
        max-height: 20px;
        width: 256px;
        font-size: 16px;
        font-weight: normal;
        color: white;
        text-shadow: 1px 1px 2px #000000;
        text-overflow: ellipsis;
    }

</style>