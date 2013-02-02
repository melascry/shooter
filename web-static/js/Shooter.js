var Shooter = function()
{
	var _this = this;
	
	this.highScore = 0;
	this.lastScore = 0;
	this.root = document.getElementById("scene");
	
	this.menu = new Menu(this.lastScore, this.highScore);
	
	this.game = new Game();
	this.game.root.style.display = "none";
};

var shoot;
function start()
{
	shoot = new Shooter();
};

var en
var change = function ChangeToGame(difficulty)
{
	shoot.menu.jRoot.hide("none");
	shoot.game.changeDifficulty(difficulty);
	shoot.game.jRoot.show("fade");
	shoot.root.addEventListener("click", function()
			{
				en = new Ennemy(10,110, shoot.root);
			});
};