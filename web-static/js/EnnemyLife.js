var EnnemyLife = function(speed, hardness, jParent)
{
	Ennemy.call(this,speed, hardness, jParent);
	
	//this.jRoot.css("background-color", "red");
	
	this.flash = false;
	this.flashing();
};

EnnemyLife.prototype = new Ennemy();

EnnemyLife.prototype.dieClick = function()
{
	var _this = this;
	
	clearTimeout(this.timerMove);
	this.timerMove = false;
	
	this.moveSprite.hide();
	
	this.deadSprite.show();
	
	this.deadSprite.play(function(){
		
		shoot.game.upLife();
		_this.die();
	});
}

EnnemyLife.prototype.flashing = function()
{
	var _this = this;
	var t = 150;
	this.jRoot.hide("fade", t, function()
			{
				_this.jRoot.show("fade", t, function()
						{
							_this.flashing();
						});
			});
}