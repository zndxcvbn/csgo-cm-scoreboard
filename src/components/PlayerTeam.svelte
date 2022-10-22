<script lang="ts">
    export let player

    $: images = './images'
    
    const teamsName: string[] = [
        'SPEC', 
        'SPEC', 
        'TERRORIST', 
        'CT',
    ]

    $: team = player.ClientMod !== 1 ? teamsName[player.Team] : 'CM'

</script>

<div id="JsPlayerTeam" class="player-card-team hidden">
    <img class="player-card-team__icon" id="JsTeamIcon" src={player.Avatar ? player.Avatar : player.Online == 1 ? `${images+'/unknown.png'}` : `${images+'/avatar-'+team+(team == 'SPEC' ? '.svg' : '.png')}`} alt="#avatar">
    <div class="player-card-team__text">
        <span id="JsTeamspan" class="player-card__text-subtitle"></span>
        <span id="JsTournamentspan" class="player-card__text-subtitle player-card__text-subtitle--light"></span>
    </div>
</div>


<style>

    .player-card-team
    {
        border-top: 1px solid rgba(0, 0, 0, 0.26);
        width: fit-content;
        height: fit-content;
        flow-content: right;
        padding: 0.5em 0px 0.5em 1em; /* 8px 0 8px 16px */

        opacity: 1;
        visibility: visible;
    }
    .player-card-team__text
    {
        flow-content: down;
        vertical-align: middle;
        width: fit-content;
        max-width: 20em; /* 320px */
        height: 3.25em; /* 52px */
        margin-left: 1em; /* 16px */
    }
    .player-card-team__icon
    {
        width: 4em; /* 64px */
        height: 4em; /* 64px */
        flow-content: right;
    }
    .player-card__text-subtitle
    {
        max-height: 1.25em; /* 20px */
        width: 16em; /* 256px */
        font-size: 1em; /* 16px */
        font-weight: normal;
        color: white;
        text-shadow: 1px 1px 2px #000000;
        text-overflow: ellipsis;
    }
    .player-card__text-subtitle--light
    {
        font-weight: normal;
    }





    .playercard-flair-carousel-container
    {
        height: fit-content;
        width: 100%;
        margin-top: 0.5em; /* 8px */
    }
    .playercard-flair-carousel
    {
        height: fit-content;
        width: 100%;
        horizontal-align: left;
    }
</style>