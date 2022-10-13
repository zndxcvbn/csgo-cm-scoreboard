export default function CSPlayerFilterFunc(players, team) {
	return players.filter((player) => player.Team === team)
}
