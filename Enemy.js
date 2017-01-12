function Enemy(lifes,speed,image,width,height,color,posX,posY){   // posX = rnd

    this._lifes    = lifes;
    this._speed    = speed;
    this._image    = image;
    this._width    = width;
    this._height   = height;
    this._color    = color;
    this._position ={
        x: posX,  // rnd
        y: posY
    };
    this.htmlElem = null;
    this.interval = null;
    this.isActive = true;
}

Enemy.prototype.startMove = function(){
    var self = this;

    this.interval = setInterval(function(){   // tazi f-q se  izpulnqva na opredeleno vreme  !!!!

        self._position.y = self.htmlElem.css('top'); // '100px'
        self._position.y = self._position.y.replace("px","");    // '100'
        self._position.y = Number(self._position.y);            // 100
        self._position.y += self._speed;                // 120  - zashto go sabiram s speed-a
        var cssProps = {"top"  : self._position.y + 'px'};   // top : '120px'
        self.htmlElem.css(cssProps);  // add css


        // var top = self.htmlElem.css('top');
        // top = top.replace("px","");    // '100'
        // top = Number(top);            // 100
        //
        // if(top >= 640){
        //     self.removeEnemy();
        // }

    }, 20);  // vremeto sled koeto se izpulnva vseki put f-qta
};

Enemy.prototype.createEnemey = function(){

    this.htmlElem = $(document.createElement("div"));

    var x = this._position.x;  //rnd
    var y = this._position.y;

    var cssProps = { // css to add html element
            "background-color": this._color,
            "height"  : this._height,
            "width"   : this._width,
            "display" : "inline-block",
            "position": "absolute",
            "left"    : x,  // rnd
            "top"     : y

        };
        this.htmlElem.css(cssProps); // html and css
        var img = $('<img src="./resorces/opponent.png">').css({'width': '100%'});
        $(this.htmlElem).append(img);

        //console.log(divTank);
        $('body').append(this.htmlElem);
};

Enemy.prototype.removeEnemy = function(){
    clearInterval(this.interval);
    this.isActive = false;
    $(this.htmlElem).remove();

};
