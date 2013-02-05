var tt;
var toto;
var Ennemy = function(speed, hardness, jParent)
{
	 //toto=jParent;
	if( typeof(jParent) ==  "undefined")
	{
		return;
	}
	
	this.jRoot = $("<div/>").addClass("ennemy");
	
	this.speed = speed;
	this.hardness = hardness;

	//the move sprite is too big it has only 88px of height so i resized it
	// but the transparency seems to bug, so i'll let it that way
	this.moveSprite = new Sprite(this.jRoot,"/shooter-static/img/move.png",2048,128,16,1,true);
	//tt = this.moveSprite;
	this.deadSprite = new Sprite(this.jRoot,"/shooter-static/img/death.png",640,128,5,1,false);
	
	this.moveSprite.hide();
	this.deadSprite.hide();
	
	jParent.append(this.jRoot);
	
	this.moveSprite.show();
	this.moveSprite.play();

	this.x = Math.random()*(400-128);
	this.y = 800;
	
	this.jRoot.css("left", this.y+'px');
	this.jRoot.css("top", this.x+'px');
		
	this.width = this.jRoot.css("width");
	this.height = this.jRoot.css("height");
	
	this.timeUpdateMove = 60/1000;
	
	this.dead = false;
	this.timerMove = false;
	this.timeMove();
	var _this = this;
	this.jRoot.on("mousedown",function()
			{_this.dieClick();});
};


Ennemy.prototype.die = function()
{
	//shoot.game.destroyEnnemy(this);
	clearTimeout(this.timerMove);
	this.timerMove = false;
	
	this.jRoot.remove();
	
	delete this.moveSprite;
	delete this.deadSprite;
	
	delete this;
}
Ennemy.prototype.dieClick = function()
{
	//console.log("die click");
	var _this = this;
	
	clearTimeout(this.timerMove);
	
	this.timerMove = false;
	
	this.moveSprite.hide();
	
	this.deadSprite.show();
	
	this.deadSprite.play(function(){
		
		shoot.game.changeScore(Math.floor(_this.speed * _this.hardness));
		_this.die();
	});
	
	
}


Ennemy.prototype.move = function(x,y)
{
	this.y -= y * this.speed * this.timeUpdateMove;
	this.setPosition();
	if (this.y < -64 && !this.dead)
	{
		//Lost Life
		this.dead = true;
		
		shoot.game.downLife();
		
		this.jRoot.hide('fade',this.die());
		
	}
}

Ennemy.prototype.setPosition = function()
{
	this.jRoot.css("top", Math.floor(this.x) + 'px');
	this.jRoot.css("left", Math.floor(this.y) + 'px');
}

Ennemy.prototype.timeMove = function()
{
	var _this = this;
	this.move(0,1);
	this.timerMove = setTimeout(function(){
		_this.timeMove();
	}, this.timeUpdateMove);
}






