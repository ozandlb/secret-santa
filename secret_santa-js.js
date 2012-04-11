var secretsanta = function(players) {

	if (players < 3) {
		document.write("Error: Number of players must be greater than 3");
		return;
	}

//	var remainplayers = players;
//	var remaining = [];
	var pairings = [];
	var notavail = [];
	var j = 0;
	var randomcounter = 0;

	// set up remaining players array
//	for (var i=0;i<players;i++) {
//		remaining[i] = i+1;
//	}


	for (var i=1;i<=players;i++) {

		if ((i==(players-1)) && (notavail[players] == null)) {
			j = players;
		}

		else {

			while (j = Math.ceil(Math.random()*players)) {
				randomcounter++;
				document.write("random: <b>" + j + "</b> random counter: "+ randomcounter + "<br>")
				if ((j!=i) && (notavail[j] !== 1)) {
					randomcounter=0;
					break;
				}
			}
		}

		pairings[i-1] = j;
		notavail[j] = 1;
		
		document.write(i + "=>" + pairings[i-1] + "<br>");

	}
	
}

secretsanta(1000);