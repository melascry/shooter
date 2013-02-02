var Game = function()
{
	this.life = 5;
	this.score = 0;
	this.root = document.getElementById("game");
	
	this.jRoot = $(this.root);
}

Game.prototype.changeDifficulty = function(difficulty)
{
	switch(difficulty)
	{
	case 1:
		console.log("Difficulty easy");
		break;
	case 2:
		console.log("Difficulty hard");
		break;
			
	}
}