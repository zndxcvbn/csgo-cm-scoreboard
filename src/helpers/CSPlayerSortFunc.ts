export default function CSPlayerSortFunc(players) {
	return players.sort((it1, it2) => {

		if (!it1.Connected) {
			return 1;
		}
		if (!it2.Connected) {
			return -1;
		}

		if (it1.Score > it2.Score) {
			return -1
		} else if (it1.Score < it2.Score) {
			return 1
		}
		
		if (it1.Deaths > it2.Deaths) {
			return 1
		} else if (it1.Deaths < it2.Deaths) {
			return -1
		}

		if (it1.Index > it2.Index) {
			return -1
		} else {
			return 1
		}
		
	})
}
