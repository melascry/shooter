var Game = function()
{
	this.jRoot = $('#game');
	
	this.life = 0;
	this.jLife = $('#life');
	
	this.score = 0;
	this.wantedScore = 0;
	
	this.jScore = $('#current-score');
	
	this.timerScore= false;

	this.deltaTimeScore = 0;
	
	this.minTimePop = 3;
	this.maxTimePop = 5;
	
	this.minSpeed = 3;
	this.maxSpeed = 7;

	this.timerPop = false;
	
	this.hardness = 1;
	
	this.ennemies = [];
};

Game.prototype.changeDifficulty = function(difficulty)
{
	if(this.life <= 0)
	{	
		this.score = 0;
		this.wantedScore = 0;
		($(this.jScore)).html(this.wantedScore);
		
		this.life = 5;
		this.jLife.css("width", this.life * 20 + '%');
		
		this.minTimePop = 3;
		this.maxTimePop = 5;
		
		this.minSpeed = 3;
		this.maxSpeed = 7;

		this.hardness = difficulty;
		
		this.ennemies = [];
		this.popEnnemy();
		
	}
}

Game.prototype.popEnnemy = function()
{
	var timePop = (this.minTimePop + Math.random()*(this.maxTimePop - this.minTimePop))/this.hardness;
	var speedPop = (this.minSpeed + Math.random()*(this.maxSpeed - this.minSpeed)) * this.hardness;
	
	var en = new Ennemy(speedPop , this.hardness, this.jRoot);
	this.ennemies.push(en);
	var _this = this;
	
	this.minTimePop -= 0.1* this.hardness;
	this.minTimePop = Math.min(0.1,this.minTimePop);
	
	this.maxTimePop -= 0.1* this.hardness;
	this.maxTimePop = Math.min(0.1,this.maxTimePop);
	
	this.minSpeed += 0.25 * this.hardness;
	this.maxSpeed += 0.5 * this.hardness;
	
	this.timerPop = setTimeout(function()
			{
				_this.popEnnemy();
			}, timePop*1000);
}
Game.prototype.destroyEnnemy = function(ennemy)
{
	var newEnnemies = [];
	for(var i = 0; i < this.ennemies.length; i++)
		{
			if(this.ennemies[i] != ennemy)
				newEnnemies.push(this.ennemies[i]);
		}
	this.ennemies = newEnnemies;
}

Game.prototype.changeScore = function(value)
{
	this.wantedScore+= value;
	
	this.deltaTimeScore = Math.max(1000/60, (this.wantedScore-this.score)/1000)
	if(!this.timerScore)
	{
		this.changingScore();
	}
	
	//this.jScore.html(this.wantedScore);
}
Game.prototype.changingScore = function()
{
	var _this = this;
	this.score++;
	this.jScore.html(this.score);
	
	this.timerScore = setTimeout(function()
			{
				if(_this.score != _this.wantedScore)
					_this.changingScore();
				else
					{
					clearTimeout(_this.timerScore);
					_this.timerScore = false;
					}					
					
			},this.deltaTimeScore);
}

Game.prototype.downLife = function()
{
	this.life--;
	this.jLife.css("width", this.life * 20 + '%');
	if(this.life <= 0)
	{
		shoot.changeToMenu();
	}
}
Game.prototype.upLife = function()
{
	this.life++;
	this.life = Math.min(5,this.life);
	this.jLife.css("width", this.life * 20 + '%');
}

Game.prototype.stop = function()
{
	clearTimeout(this.timerPop);
	this.timerPop = false;
	clearTimeout(this.timerScore);
	this.timerScore = false;
	
	for(var i = 0; i < this.ennemies.length; i++)
		{
		 this.ennemies[i].die();
		}
}