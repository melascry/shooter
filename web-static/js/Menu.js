var Menu = function(score, highScore)
{
	this.root = document.getElementById("menu-style");

	this.jRoot = $(this.root);
	
	this.score = document.getElementById("score");;
	this.highScore= highScore;
	
	
	
	this.buttonEasy = document.getElementById("easy");
	this.buttonEasy.addEventListener("click", function()
			{
				change(1);
			});
	this.buttonHard = document.getElementById("hard");
	this.buttonHard.addEventListener("click", function()
			{
				change(2);
			});
	
}