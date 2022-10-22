<script lang="ts">
    import PlayerCommendations from './PlayerCommendations.svelte'
    import PlayerCardPrimeUpsell from './PlayerCardPrimeUpsell.svelte'
    import PlayerXp from './PlayerXp.svelte'
    import GetPrestigeButton from './GetPrestigeButton.svelte'
    import PlayerTeam from './PlayerTeam.svelte'
    import PlayerCardTop from './PlayerCardTop.svelte'

    export let player

</script>

<div class="player-card">
    <div id="JsPlayerCardSections" class="full-width">
		<div id="JsPlayerCardBg" class="player-card-row__bg-img" />
        <div id="JsPlayerCardSections" class="player-card__sections">

            <!-- <GetPrestigeButton /> -->

            
            
            <div class="full-width flex-row">
                <PlayerTeam {player} />
                <PlayerCardTop {player} />
			</div>

            <PlayerCardPrimeUpsell />

            <!-- <PlayerXp /> -->

            <PlayerCommendations />

        </div>
    </div>
</div>

<style>

    .player-card
    {
        width: 100%;
        height: fit-content;
        transform-origin: 50% 0%;
        
        transition-property: opacity, transform;
        transition-duration: .25s;
        transition-timing-function: ease-in-out;

    }
    .player-card__sections
    {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
    }
    #JsPlayerCardSections.full-width {
        position: relative;
    }
    .player-card-row__bg-img {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;

        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

        background-image: url(/images/katowice_2014_champion_large.png);
        background-repeat: no-repeat;
        background-size: 115% auto; /* 115% auto */
        background-position: 50% 50%;

        opacity: 0.4;

        -webkit-mask-image: url(/images/top-bottom-fade.png);
        -webkit-mask-mode: alpha;
        -webkit-mask-size: cover;


        width: auto;
        height: auto;
    }    


    .player-card-nonprime__lock
    {
        /* horizontal-align: center; */
        vertical-align: bottom;
        display: flex;
        align-items: top;
                                        
        visibility: collapse;
    }



</style>