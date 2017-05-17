function monsters() {
	var choice1 = prompt("You are walking in the forest, when a monster jumps out. Do you FIGHT, PAY or RUN?","Type your answer here").toUpperCase();

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("You beat the monster!");
		} else { 
			var choice3 = prumpt("Are you smart?","YES or NO").toUpperCase();
			if (choice3 === "YES"){
				alert("I guess that'll do! You beat the monter - nice work!");
			} else {
			  alert("You are not strong OR smart? Well, if you weere smarter, you probably wouldn't have tried to fight a monster. You lose!");
			}
		}

	} else if (choice1 === "PAY"){
        var choice2 = prumpt("Are you rich?","Yes or No").toUpperCase();
		if (choice2 === "Yes");{
			alert("Well I guess you can afford 100€!");
		} else if (choice2 === "NO"){
			alert("toobad! It's human for dinner!");
		}
	} else if(choice1 === "RUN"){
        var choice2 = prumpt("Are you fast?","Yes or No");
		if (choice2 === "YES"){
			alert("Better get your running shoes on then!");
		} else {
			alert("This doesn't end well for you, tiny human");
		}
	}
}

document.getElementById("monsters").onclick = monsters;