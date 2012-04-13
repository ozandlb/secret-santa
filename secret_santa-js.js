function secretSanta (numplayers) {

	if (numplayers < 3) {
		document.write("Error: Number of players must be greater than 3");
		return false;
	}

	var remainplayers = numplayers;
	var remaining = [];
	var pairings = [];
	var partnerindex = null;
	var randomcounter = 0;

	// initialize array of remaining players
	for (var i=1;i<=numplayers;i++) {
		remaining[i-1] = i;
	}

	// main loop to select pairs
	for (var i=1;i<=numplayers;i++) {

		// prevent last number from getting stuck with itself.
		//   if second-to-last number sees that last number is unpaired, then
		//     second-to-last number pairs with last number
		if ((i==(numplayers-1)) && (pairings[numplayers-1] == null)) {

			// only two items left in array "remaining" -- last item will have index of 1
			partnerindex = 1;
		}

		else {
			while (1) {
				partnerindex = Math.floor(Math.random()*remainplayers);
				if ((remaining[partnerindex]!=i) && (pairings[i-1] == null))
					break;
			}
		}

		// add matching partner to pairings array
		pairings[i-1] = remaining[partnerindex];
		document.write(i + "=>" + pairings[i-1] + "<br>");

		// truncate remaining array
		remaining.splice(partnerindex, 1);

		// reduce number of players
		remainplayers--;
	}

}

secretSanta(10);