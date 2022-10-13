<script lang="ts">
	export let show_hint: boolean

	import { Tooltip } from '@svelte-plugins/tooltips';

	$: images = './images'
</script>



<div class="sb-footer-panel">
	<Tooltip content="none" animation="slide" arrow={false} position="top">
		<button id="id-sb-footer-server-website">
			{#if show_hint}
				<div class="label">{cm.translation.Language() === 'russian' ? 'Сайт сервера' : 'Server website'}</div>
				<img src="{images}/link.svg" alt="#link"/>
			{/if}
		</button>
	</Tooltip>
	<div id="id-sb-mouse-instructions">
		[MOUSE2] {cm.translation.Language() === 'russian' ? 'Включить курсор' : 'Enable cursor'}
	</div>
</div>



<style>
	.sb-footer-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 48px;
	}

	#id-sb-mouse-instructions {

		font-size: 12px;

		margin: 10px;

		/* horizontal-align: right; */

		color: #ffffff20;

	}
	#id-sb-footer-server-website {
		margin: 10px;
		display: flex;
		align-items: center;
		/* flow-children: right; */
		padding-top: 4px;
		padding-bottom: 4px;
	}

	#id-sb-footer-server-website .label {
		font-size: 16px;
		color: #ffffff;
		margin: 2px 10px 2px 10px;
		text-overflow: clip;

		text-transform: uppercase;
	}

	#id-sb-footer-server-website img {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}
</style>
