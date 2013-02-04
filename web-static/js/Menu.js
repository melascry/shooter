var Menu = function(score, highScore)
{
	var _this = this;
	this.root = document.getElementById("menu-style");

	this.jRoot = $(this.root);
	
	this.score = document.getElementById("score");;
	this.highScore= highScore;
	
	
	
	this.buttonEasy = document.getElementById("easy");
	this.buttonEasy.addEventListener("click", function()
			{
				_this.buttonEasy.style.className ="selected";
				_this.buttonHard.style.className ="selectable";
				change(1);
			});
	this.buttonHard = document.getElementById("hard");
	this.buttonHard.addEventListener("click", function()
			{
				_this.buttonEasy.style.className ="selectable";
				_this.buttonHard.style.className ="selected";
				change(2);
			});
	
}