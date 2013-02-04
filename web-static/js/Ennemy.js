var tt;
var Ennemy = function(speed, hardness, root)
{
	this.jRoot = $("<div/>").addClass("ennemy");
	
	this.speed = speed;
	this.hardeness = hardness;

	//the move sprite is too big it has only 88px of height so i resized it
	// but the transparency seems to bug, so i'll let it that way
	this.moveSprite = new Sprite(this.jRoot,"/shooter-static/img/move.png",2048,88,16,1,true);
	tt = this.moveSprite;
	this.deadSprite = new Sprite(this.jRoot,"/shooter-static/img/death.png",640,128,5,1,false);
	
	this.deadSprite.hide();
	
	root.appendChild(this.jRoot.get(0));
	
	this.moveSprite.show();
	this.moveSprite.play();
	
	this.x = this.jRoot.css("top");
	this.y = this.jRoot.css("left");
	
	this.desiredX = this.jRoot.css("top");
	this.desiredY = this.jRoot.css("left");
	
	this.width = this.jRoot.css("width");
	this.height = this.jRoot.css("height");
	
	this.timeUpdateMove = 1000/40;
	
	//this.jRoot.click(this.die()); //considère tout l'écran -_-
};


Ennemy.prototype.die = function()
{
	console.log("click");
	/*var _this = this;
	this.moveSprite.hide();
	this.deadSprite.show();
	this.deadSprite.play(function(){
		shoot.game.score+= _this.speed * _this.hardness;
		_this.jRoot.remove();
	});*/
}


Ennemy.prototype.move = function(x,y)
{
	/*var _this = this;
	if(!moving)
		{
		this.moving = setTimeout(function(){
				if()
		},
		this.timeUpdateMove);
	}
	else
	{
		setTimeout(function()
				{
					_this.move(x,y);
				},
				this.timeUpdateMove
				);
	}*/
	
}