<script lang="ts">

    import { Tooltip } from '@svelte-plugins/tooltips';

    export let cycle_stat: boolean = false

</script>

<div id="id-sb-label-container">
	<div id="id-sb-players-table__labels-row--spacer" />
	<div id="id-sb-players-table__labels-row" class="sb-row--labels sb-row no-hover">
        <span class="label STATUS">
            
        </span>
        <span class="label PING">
            <Tooltip content="Ping" position="top" animation="slide" arrow={false}>
                <img src="./images/ping.svg" alt="#ping">
            </Tooltip>
        </span>
        <span class="label RANK">
            
        </span>
        <span class="label AVATAR">
            
        </span>
        <span class="label NAME">
            
        </span>
        {#if !cycle_stat}
        <span class="label MONEY" data-set="0">
            {cm.translation.Language() === 'russian' ? 'Деньги' : 'Money'}
        </span>
        <span class="label KILLS" data-set="0">
            {cm.translation.Language() === 'russian' ? 'У' : 'K'}
        </span>
        <span class="label ASSISTS" data-set="0">
            {cm.translation.Language() === 'russian' ? 'П' : 'A'}
        </span>
        <span class="label DEATHS" data-set="0">
            {cm.translation.Language() === 'russian' ? 'С' : 'D'}
        </span>
        <span class="label MVPS" data-set="0">
            {cm.translation.Language() === 'russian' ? 'СЦИ' : 'MVP'}
        </span>
        {:else}
        <span class="label HSR" data-set="1">
            <Tooltip content={cm.translation.Language() === 'russian' ? 'Процент попаданий в голову' : 'Headshot Percentage'} position="top" animation="slide" arrow={false}>
                {cm.translation.Language() === 'russian' ? '%ГЛ' : 'HS%'}
            </Tooltip>
        </span>
        <span class="label KDR" data-set="1">
            <Tooltip content={cm.translation.Language() === 'russian' ? 'Убийств/смертей' : 'Kill-Death Ratio'} position="top" animation="slide" arrow={false}>
                {cm.translation.Language() === 'russian' ? 'У/C' : 'K/D'}
            </Tooltip>
        </span>
        <span class="label ADR" data-set="1">
            <Tooltip content={cm.translation.Language() === 'russian' ? 'Средний урон за раунд' : 'Average Damage per Round'} position="top" animation="slide" arrow={false}>
                {cm.translation.Language() === 'russian' ? 'СУ/Р' : 'ADR'}
            </Tooltip>
        </span>
        <span class="label UTILITYDAMAGE" data-set="1">
            <Tooltip content={cm.translation.Language() === 'russian' ? 'Урон гранатами' : 'Utility Damage'} position="top" animation="slide" arrow={false}>
                {cm.translation.Language() === 'russian' ? 'УГ' : 'UD'}
            </Tooltip>
        </span>
        <span class="label ENEMIESFLASHED" data-set="1">
            <Tooltip content={cm.translation.Language() === 'russian' ? 'Ослеплённых врагов' : 'Enemies Flashed'} position="top" animation="slide" arrow={false}>
                {cm.translation.Language() === 'russian' ? 'Осл.' : 'EF'}
            </Tooltip>
        </span>
        {/if}
        <span class="label SCORE">
            {cm.translation.Language() === 'russian' ? 'Счёт' : 'Score'}
        </span>
	</div>
</div>


<style>
	#id-sb-label-container { display: flex }

	#id-sb-players-table__labels-row--spacer {
		width: var(--left-panel-width);
		margin-right: 10px;
	}
	.sb-row--labels {
        display: flex;

		width: var(--sb-row-width);
		padding-left: 0px;
	}
	.sb-row--labels .label {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		/* text-align: center; */
		font-size: 14px;
		margin-top: 5px;
		color: #CCC;
		width: 45px;
		/* text-overflow: shrink; */
	}
    .label.STATUS {
        width: var(--row-image-size);
        padding: 0 2px;
    }
    .label.PING { width: 37px }
    
    .label.RANK {
        width: var(--row-image-size);
        padding: 0 2px;
    }
	.label.AVATAR {
		width: var(--row-image-size);
        height: var(--row-image-size);
	}
    .label.NAME { flex: 1 }

    .label.MONEY {
        width: 64px;
        margin-left: 0;
    }
	.label.KILLS, .label.DEATHS, .label.ASSISTS { width: 35px }
    .label.MVPS { width: 46px }
    .label.KDR { width: 50px }
    img { align-items: flex-end }
</style>
