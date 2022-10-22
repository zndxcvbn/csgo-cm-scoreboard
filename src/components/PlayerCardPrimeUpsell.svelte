<script lang="ts">

    $: images = './images'

</script>

<div id="JsPlayerCardPrimeUpsell" class="player-card-prime-upsell-container">
    <div class="player-card-prime-upsell-row">
        <div class="player-card-prime-upsell-image-container">
            <img class="player-card-prime-upsell-image" src="{images}/prime_disabled.png" height="32" width="-1" alt="#prime_disabled"/>
        </div>
        <button class="player-card-prime-btn stratum-font">
            КУПИТЬ ПРАЙМ-СТАТУС
        </button>
    </div>
    <div id="id-player-card-prime-upsell-xp" class="player-card-prime-upsell-row">
        <div class="player-card-prime-upsell-image-container">
            <img class="player-card-prime-upsell-image player-card-prime-upsell-image--xp" src="{images}/prime_xp.png" height="32" width="-1" alt="#prime_xp"/>
        </div>
        <span class="player-card-prime-text">Для получения ранга приобретите прайм-статус.</span>
    </div>
    <div id="id-player-card-prime-upsell-skillgroup" class="player-card-prime-upsell-row">
        <div class="player-card-prime-upsell-image-container">
            <img class="player-card-prime-upsell-image player-card-prime-upsell-image--rank" src="{images}/prime_rank.png" height="32" width="-1" alt="#prime_rank"/>
        </div>
        <span class="player-card-prime-text">Для получения звания приобретите прайм-статус.</span>
    </div>
</div>


<style>
    .player-card-prime-upsell-container
    {

        transition-property: height;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }

    .player-card-prime-upsell-row
    {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 1em; /* 16px */
    }

    .player-card-prime-upsell-image-container
    {
        display: flex;
        justify-content: center;
        height: fit-content;
        vertical-align: center;
        width: 6em; /* 96px */
    }

    .player-card-prime-upsell-image
    {
        height: 2.625em; /* 42px */
        width: fit-content;
        vertical-align: center;

        opacity: .5;
    }

    .player-card-prime-upsell-image--xp
    {
        height: 3em; /* 48px */
    }

    .player-card-prime-upsell-image--rank
    {
        height: 1.875em; /* 30px */
        width: 4.625em; /* 74px */
    }

    .player-card-prime-btn
    {
        vertical-align: center;
        box-shadow: fill 2px 2px 6px #000000d0;

        transition-property: brightness;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;


        font-weight: medium;
        font-size: 0.875em; /* 14px */
        background-color: #0A5A84;
        text-align: center;
        margin: 0px;
        padding: 0.571em; /* 8px */
        border-radius: 2px;
        color: white;
    }

    /* .player-card-prime-btn span
    {
        font-weight: medium;
        font-size: 0.875em;
        background-color: #0A5A84;
        text-align: center;
        margin: 0px;
        padding: 0.571em;
        border-radius: 2px;
        color: white;
    } */

    .player-card-prime-btn:hover
    {
        filter: brightness(1.5);

        transition-property: filter;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;
    }

    .player-card-prime-text
    {
        max-height: 4.923em; /* 64px */
        width: 18.46em; /* 240px */
        font-size: 0.8125em; /* 13px */
        font-weight: normal;
        text-overflow: shrink;
        text-shadow: 1px 1px 2px #000000;
        color: white;
    }

    .player-card-prime-text--popup
    {
        width: 300px;
    }
</style>