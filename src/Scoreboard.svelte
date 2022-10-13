<script lang="ts">
	import { onMount } from 'svelte'
	import { CSPlayerSortFunc } from './helpers'

	import Header from './components/Header.svelte'
	import Content from './components/Content.svelte'
	import Footer from './components/Footer.svelte'

	let server_name: string = ''
	let players = []
	let teams = []
	let spec_mute: boolean = true
	let viewers: number
	let s_gametime_time: string
	let map_name: string
	let show_hint: boolean = false
	let cycle_stat: boolean = false

	onMount(() => { 
		cm.scoreboard.Init(OnUpdate);
		cm.scoreboard.SetUpdateInterval(0.1);
	});

	document.getElementById("scoreboard").onmouseenter = () => show_hint = true
	document.getElementById("scoreboard").onmouseleave = () => show_hint = false


	const OnUpdate = (): any => {
		server_name = cm.scoreboard.GetServerName()
		players = cm.scoreboard.GetPlayerList()
		teams = cm.scoreboard.GetTeamList()
		spec_mute = cm.scoreboard.GetSpectatorsMuted()
		viewers = cm.scoreboard.GetSTVSpectators()
		s_gametime_time = cm.scoreboard.GetWinCondition()
		map_name = cm.scoreboard.GetMapName()
	}


</script>

<div class="sb-main">
	<Header bind:cycle_stat {server_name} {s_gametime_time} {map_name} {viewers} {spec_mute} {show_hint} />
	<Content bind:cycle_stat players={CSPlayerSortFunc(players)} {teams} {spec_mute} />
	<Footer {show_hint} />
</div>

<style>
	
	.sb-main {
		width: min-content;
		height: min-content;

		position: relative;

		min-width: 600px;
		padding-top: 20px;

		padding-left: 20px;
		padding-right: 20px;

		/* horizontal-align: center; */
		/* vertical-align: center; */

		/* flow-children: down; */

		backdrop-filter: blur(8px);

		transition-property: width, height;
		transition-duration: 1s;
		transition-timing-function: ease-in-out;

		background-color: rgba(0, 0, 0, 0.88);
																																
	}
	
</style> 