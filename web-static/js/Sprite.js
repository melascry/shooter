/**
 * Constructeur
 * 
 * @param parent Elément jQuery parent
 * @param url Chemin du spritesheet
 * @param width Largeur du spritesheet
 * @param height Hauteur du spritesheet
 * @param colCount Nombre de colonnes
 * @param rowCount Nombre de lignes
 * @param loop Indique si l'animation boucle ou non
 */
var Sprite = function(parent, url, width, height, colCount, rowCount, loop){
	this.parent = parent;
	this.url = url;
	this.width = width;
	this.height = height;
	this.colCount = colCount;
	this.rowCount = rowCount;
	this.loop = loop;
	
	// TODO

	this.frameWidth = Math.floor(width / colCount); // width and height needed 
	this.frameHeight = Math.floor(height / rowCount);// to prevent recalculation
	
	this.root = document.createElement("div");
	this.root.className = "sprite";
	this.root.style.width = this.frameWidth+'px';
	this.root.style.height = this.frameHeight+'px';
	this.root.style.position = "absolute";
	
	this.parent.append(this.root);	
	
	this.img = document.createElement("img");
	this.img.style.width = width+'px';
	this.img.style.height = height+'px';
	this.img.style.overflow = "hidden";
	this.img.src = this.url;
	
	this.root.appendChild(this.img);
	
	this.currentFrame = 0;
	
	this.frameDuration = 1000/20;
	this.frameCount = colCount * rowCount;
	
	this.timerSprite = false;
};
/**
 * Affiche le sprite
 * 
 * @param type
 * @param options
 */
Sprite.prototype.show = function(){
	// TODO
	this.root.display = "block";
	
	this.parent.css("width", this.frameWidth+'px');
	this.parent.css("height", this.frameHeight+'px');
};

/**
 * Masque le sprite
 */
Sprite.prototype.hide = function(){
	// TODO
	this.stop();
	this.root.style.display = "none";
};

/**
 * Lance l'animation
 * @param onComplete Callback une fois l'animation terminée (si elle ne boucle pas)
 */
Sprite.prototype.play = function(onComplete)
{
	// TODO
	var _this = this;
	
	if(this.timerSprite)
		clearTimeout(this.timerSprite);
	
	this.timerSprite = setTimeout(
	function()
	{
		_this.nextFrame();
		if(_this.loop || _this.currentFrame < _this.frameCount -1)
		{
			_this.play(onComplete);
		}
		else
		{
			if( (typeof onComplete) == "function")
			{
				onComplete(_this);
			}
		}
			
	}
	,this.frameDuration);
};

/**
 * Arrête l'animation en cours
 */
Sprite.prototype.stop = function(){
	// TODO
	if(this.timerSprite)
	{
		clearTimeout(this.timerSprite);
		this.timerSprite = false;
	}
};


/**
 * Calcule la frame suivante à afficher
 */
Sprite.prototype.nextFrame = function(){
	// TODO
	
	this.currentFrame++;
	if(this.currentFrame >= this.frameCount)
	{
		if(this.loop)
		{
			this.currentFrame = 0;
		}
		else
		{
			this.currentFrame = this.frameCount-1;
		}
	}
	this.refreshDisplay();
};

/**
 * Affiche la frame courante
 */
Sprite.prototype.refreshDisplay = function(){
	// TODO
	var colIndex = this.currentFrame % this.colCount;
	var rowIndex = Math.floor(this.currentFrame / this.colCount);
	
	this.root.style.left = -this.frameWidth * colIndex + 'px';
	this.root.style.top = -this.frameHeight * rowIndex + 'px';
};