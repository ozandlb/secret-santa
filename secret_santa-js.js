function playerObj () {
	this.playerId = null
	this.partnerId = null;
}

playerObj.prototype.setPartner(partnerId) {
	this.partnerId = partnerId;
}

playerObj.prototype.getPartner() {
	return this.partnerId;
}

playerObj.prototype.setPlayerId(playerId) {
	this.playerId = playerId;
}

playerObj.prototype.getPlayerId() {
	return this.playerId;
}




function secretSanta (numplayers) {

	if (numplayers < 3) {
		document.write("Error: Number of players must be greater than 3");
		return false;
	}
	
	var this.numplayers = numplayers;
	var this.remainplayers = this.numplayers;
	var this.remaining = [];
	var this.pairings = [];
	var this.notavail = [];
	var this.pairedwith = "";
	var this.randomcounter = 0;

	// initialize array of remaining players
	for (var i=0;i<this.numplayers;i++) {
		remaining[i] = new playerObj();
		remaining[i].setPlayerId(i);
		// remaining[i] = i+1;
	}

	document.write(remaining.toString());

} // end function secretSanta


secretSanta.prototype.pairPlayers() {

// 
	for (var i=1;i<=this.numplayers;i++) {

		// prevent last number from getting stuck with itself.
		//   if second-to-last number sees that last number is unpaired, then
		//     second-to-last number pairs with last number
		if ((i==(this.numplayers-1)) && (notavail[this.numplayers] == null)) {
			this.pairedwith = this.numplayers;
			
		}

		else {

			while (this.pairedwith = Math.ceil(Math.random()*this.remainplayers)) {
				this.randomcounter++;
				document.write("random: <b>" + j + "</b> random counter: "+ this.randomcounter + "<br>")
				if ((j!=i) && (this.notavail[j] !== 1)) {
					this.randomcounter=0;
					break;
				}
			}
		}

		pairings[i-1] = pairedwith;
		notavail[pairedwith] = 1;
		
		document.write(i + "=>" + pairings[i-1] + "<br>");

	}
	
} // end pairPlayers method

secretSanta(1000);