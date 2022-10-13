export default function CSPlayerGetSTV(players) {
    return (players.filter(player => player.STV === true)).length
}