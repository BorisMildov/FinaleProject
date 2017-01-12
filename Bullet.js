function Bullet(width,height,color,speed,image,posX,posY){
    this._width = width;
    this._height = height;
    this._color = color;
    this._speed = speed;
    this._image = image;
    this._position = {
        x: posX,
        y: posY
    };
    this._htmlElem = null;
    this.isActive = true;
}

Bullet.prototype.create = function(){
    this._htmlElem =  $(document.createElement("div"));  // create div
    //C:\\Users\\Borko\\AppData\\Local\\atom\\app-1.11.1\\myFiles\\Game

    var cssProps = { // css to add html element
        //"background-color": this._color,
        "height"  : this._height,
        "width"   : this._width,
        "display" : "inline-block",
        "position": "absolute",
        "left"    : this._position.x,
        "bottom"  : this._position.y    ,

    };

    this._htmlElem.css(cssProps); // html and css
    var img = $('<img src="./resorces/raketa_01.png">').css({'width': '100%'});
    $(this._htmlElem).append(img);
    //console.log(divTank);
    $('body').append(this._htmlElem);


};

Bullet.prototype.startMove = function(){
    var self = this;

    this.interval = setInterval(function(){   // tazi f-q se  izpulnqva na opredeleno vreme  !!!!

        self._position.y = self._htmlElem.css('top');           // '100px'
        self._position.y = self._position.y.replace("px","");   // '100'
        self._position.y = Number(self._position.y);            // 100
        self._position.y -= self._speed;                        // 120
        var cssProps = {"top"  : self._position.y + 'px'};      // top : '120px'
        self._htmlElem.css(cssProps);  // add css


        var top = self._htmlElem.css('top');
        top = top.replace("px","");   // '100'
        top = Number(top);            // 100

        if(top <= -60){
            self.removeBullet();
        }

    }, 5);  // vremeto sled koeto se izpulnva vseki put f-qta
};

Bullet.prototype.removeBullet = function(){
    clearInterval(this.interval);
    this.isActive = false;
    $(this._htmlElem).remove();
};
