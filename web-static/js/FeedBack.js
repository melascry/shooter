var Feedback = function(x,y,type,value, parent)
{
	this.jRoot = $("<div/>").css("position", "absolute").css("top",x+10+'px').css("left", y+50+'px');
	this.jRoot.css("height",30+'px').css("width",100+'px');
	if(type == 1) 
	{
		console.log("type heart");
		this.jRoot.addClass("lifedeath");
		//this.jRoot.css("background-image", "url(shooter-static/img/heart.png)");
	}
	else
	{
		console.log("type point");
		this.jRoot.css("background-color", "rgba(255,255,255,0)").css("font-size",'15px');
		this.jRoot.html('+ ' + value);
	}
	
	parent.append(this.jRoot);
	this.timerDie();
}

Feedback.prototype.timerDie = function()
{
	var _this = this;
	setTimeout(function(){
		_this.jRoot.remove();
		delete _this;
	},1000);
}