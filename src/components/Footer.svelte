<script lang="ts">
	export let show_hint: boolean

	import { Tooltip } from '@svelte-plugins/tooltips';

	$: images = './images'
</script>



<div class="sb-footer-panel">
	<Tooltip content="none" animation="slide" arrow={false} position="top">
		<span id="id-sb-footer-server-website">
			{#if show_hint}
				<span class="label">{cm.translation.Language() === 'russian' ? 'Сайт сервера' : 'Server website'}</span>
				<img src="{images}/link.svg" alt="#link"/>
			{/if}
		</span>
	</Tooltip>
	<span id="id-sb-mouse-instructions">
		[MOUSE2] {cm.translation.Language() === 'russian' ? 'Включить курсор' : 'Enable cursor'}
	</span>
</div>



<style>
	.sb-footer-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 3em; /* 48px */
	}

	#id-sb-mouse-instructions {

		font-size: 0.75em; /* 12px */

		margin: 0.8333em; /* 10px */

		/* horizontal-align: right; */

		color: #ffffff20;

	}
	#id-sb-footer-server-website {
		margin: 0.625em; /* 10px */
		display: flex; 
		align-items: center;
		/* flow-children: right; */
		padding-top: 0.25em;
		padding-bottom: 0.25em;
	}

	#id-sb-footer-server-website .label {
		font-size: 1em;
		color: #ffffff;
		margin: 0.125em 0.625em; /* 2px 10px */
		text-overflow: clip;

		text-transform: uppercase;
	}

	#id-sb-footer-server-website img {
		width: 1.25em; /* 20px */
		height: 1.25em; /* 20px */
		margin-right: 0.5em; /* 8px */
	}

	:global(.tooltip) {
        --tooltip-font-family: 'Stratum2', Arial, Helvetica, sans-serif;
        --tooltip-font-size: 0.75em; /* 12px */
        --tooltip-background-color: rgba(15, 15, 15, 0.99);
        --tooltip-border-radius: 0.3125em; /* 5px */
        --tooltip-padding: 1em;
    }



</style>
