var Shooter = function()
{
	var _this = this;
	
	this.highScore = 0;
	this.lastScore = 0;
	
	this.jHighSore = $("#highscore");
	this.jScore = $("#score");
	
	this.root = document.getElementById("scene");
	
	this.menu = new Menu(this.lastScore, this.highScore);
	
	this.game = new Game();
	this.game.jRoot[0].style.display = "none";
};

var shoot;
function start()
{
	shoot = new Shooter();
};

Shooter.prototype.changeToGame = function(difficulty)
{
	shoot.menu.jRoot.hide("none");
	shoot.game.changeDifficulty(difficulty);
	shoot.game.jRoot.show("fade");
}
Shooter.prototype.changeToMenu = function()
{
	this.game.stop();
	
	this.lastScore = this.game.wantedScore;
	if(this.lastScore >= this.highScore)
		{
			this.highScore = this.lastScore;
			this.jHighSore.html(this.highScore);
		}
	this.jScore.html(this.lastScore);
	
	shoot.game.jRoot.hide("fade", function()
			{
				shoot.menu.jRoot.show("fade");
			});
	
}