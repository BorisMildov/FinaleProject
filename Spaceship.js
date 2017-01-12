function Spaceship(name,bullets,lifes,damege,speed,image,firespeed,width,height,color,bulletType){

    this._name = name;
    this._bullets  = [];
    this._lifes    = lifes;
    this._damage   = damege;
    this._speed    = speed;
    this._image    = image;

    this._width    = width;
    this._height   = height;
    this._color    = color;
    this.bullet    = bulletType;
    this.htmlElem = null;


    this._creatTank = function(){


    this.htmlElem = $(document.createElement("div"));  // create div
    this.htmlElem.attr("id", this._name); // add ID to div

    var startX = (screen.width / 2) - (this._width / 2);
    var startY = 160; // 10 ?

    var cssProps = { // css to add html element
            "background-color": this._color,
            "height"  : this._height,
            "width"   : this._width,
            "display" : "inline-block",
            "position": "absolute",
            "left"    : startX,
            "bottom"  : startY
        };

        this.htmlElem.css(cssProps); // html and css
        var imgg = $('<img src="./resorces/pT5A7L8T9.png">').css({'width': '100%'})
        $(this.htmlElem).append(imgg);
        //console.log(divTank);
        $('body').append(this.htmlElem);


        this._controller(this.htmlElem);

    };

    this._controller = function(divTank){

        var self = this; // ??/

        $('body').keypress(function(event){
            //console.log(event.keyCode);

            if(event.keyCode == 119){  // W

                var currentY = divTank.css('bottom'); // '650px'
                currentY = currentY.replace("px","");
                currentY = Number(currentY);
                currentY += self._speed;
                var cssProps = {"bottom"  : currentY + 'px'};
                divTank.css(cssProps);

            }
            if(event.keyCode == 100 ){

                var currentX = divTank.css('left'); // '650px'
                currentX = currentX.replace("px","");
                currentX = Number(currentX);
                currentX += self._speed;
                var cssProps = {"left"  : currentX + 'px'};
                divTank.css(cssProps);

            }
            if(event.keyCode == 115 ){

                var topPos = divTank.css('top'); // '650px'
                topPos = topPos.replace("px","");
                topPos = Number(topPos);
                if(topPos >= 560){
                    return;
                }



                var currentY = divTank.css('bottom'); // '650px'
                currentY = currentY.replace("px","");
                currentY = Number(currentY);
                currentY -= self._speed;
                var cssProps = {"bottom"  : currentY + 'px'};
                divTank.css(cssProps);

            }
            if(event.keyCode == 97 ){

                var currentX = divTank.css('left'); // '650px'
                currentX = currentX.replace("px","");
                currentX = Number(currentX);
                currentX -= self._speed;
                var cssProps = {"left"  : currentX + 'px'};
                divTank.css(cssProps);
            }

            if(event.keyCode == 32){
                var bulWidth  = 25;
                var bulHeight = 60;
                var bulColor  = 'green';
                var bulSpeed  = 2;
                var ing       = null;

                var stX = self.htmlElem.css('left');
                stX = stX.replace("px","");
                stX = Number(stX);
                stX += (self._width / 2) - (bulWidth / 2);
                stX = stX + 'px';


                var stY = self.htmlElem.css('bottom'); // '100px'
                stY = stY.replace("px",""); // '100'
                stY = Number(stY); // 100
                stY += 40;
                stY = stY + 'px';


                var myBullet = new self.bullet(bulWidth, bulHeight, bulColor, bulSpeed, ing, stX, stY);  //width,height,color,speed,image,posX,posY

                myBullet.create();
                myBullet.startMove();

                self._bullets.push(myBullet);
            }

        });
    }

}
