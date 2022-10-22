<script lang="ts">
	export let text: string = '';	
</script>

<span id="id-gametime__time">{text}</span>

<style>
    #id-gametime__time {
		font-size: 1.125em; /* 18px */

		font-weight: bold;
		font-family: 'Stratum2 Bold Monodigit', Arial, Helvetica, sans-serif;
		color: grey;

		/* horizontal-align: center; */
		vertical-align: bottom;

		white-space: nowrap;

		text-align: center;
		letter-spacing: 0.2px;

		/* max-width: 100px; */
					
		margin-left: 0.555em; /* 10px */
		text-overflow: shrink;
	}
	
</style>