var tt;
var Ennemy = function(speed, hardness, root)
{
	this.jRoot = $("<div/>").addClass("ennemy");
	
	this.speed = speed;
	this.hardeness = hardness;

	//the move sprite is too big it has only 88px of height so i resized it
	this.moveSprite = new Sprite(this.jRoot,"/shooter-static/img/move.png",2048,88,16,1,true);
	tt = this.moveSprite;
	this.deadSprite = new Sprite(this.jRoot,"/shooter-static/img/death.png",640,128,5,1,false);
	
	this.deadSprite.hide();
	
	root.appendChild(this.jRoot.get(0));
	
	this.moveSprite.show();
	this.moveSprite.play(function()
			{
				console.log("played one");
			});
	
	//this.jRoot.click(this.die()); On verra demain
}


Ennemy.prototype.die = function()
{
	var _this = this;
	this.moveSprite.hide();
	this.deadSprite.show();
	this.deadSprite.play(function(){
		shoot.game.score+= _this.speed * _this.hardness;
		_this.jRoot.remove();
	});
	
	
	
}
Ennemy.prototype.move = function(x,y)
{
	
}