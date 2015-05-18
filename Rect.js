/*
function Rect(n,color,rectColor){
    createjs.Shape.call(this);
    this.setRectType = function(type){
        this._RectType = type;
        switch(type){
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor(rectColor);
                break;
        }

    }
    this.setColor = function(colorString){
            this.graphics.beginFill(colorString);
            this.graphics.drawRect(0,0,400/n-5,400/n-5);
            this.graphics.endFill();
    }
    this.getRectType = function(){
        return this._RectType;
    }
    this.setRectType(1);
}
*/
function Rect(n){
    createjs.clone(this.BitMap1).call(this);
    this._BitmapType = n;
    this.setBounds(0,0,400/n-5,400/n-5);
    if(n ==2){
        this.clone(this.BitMap2);
    }
    this.getRectType = function(){
        return this._BitmapType;
    }
}
