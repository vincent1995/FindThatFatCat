var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
var gameView = new createjs.Container();
stage.addChild(gameView);


var n =2;
var time = 0;
var stop = false;
setTimeout("Timer()",1000);
addRect();

function addRect(){
    var x= parseInt(Math.random()*n);
    var y= parseInt(Math.random()*n);
    var s =new  createjs.Shape();
    s.graphics.beginFill("#777777");
    s.graphics.drawRoundRect(0,0,365,365,5);
    s.graphics.endFill();
    gameView.addChild(s);

    for(var indexX = 0;indexX< n;indexX++){
        for(var indexY = 0;indexY<n;indexY++){
            var r;
            if(indexX == x && indexY == y){
                var rand= parseInt(Math.random()*4+1);
                switch(rand){
                    case 1:
                        r = new createjs.Bitmap("cat/cat1.jpg");
                        r.sourceRect = new createjs.Rectangle(50,0,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;

                    case 2:
                        r = new createjs.Bitmap("cat/cat2.jpg");
                        r.sourceRect = new createjs.Rectangle(0,0,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;
                    case 3:
                        r = new createjs.Bitmap("cat/cat3.jpg");
                        r.sourceRect = new createjs.Rectangle(0,50,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;
                    case 4:
                        r = new createjs.Bitmap("cat/cat4.jpg");
                        r.sourceRect = new createjs.Rectangle(0,50,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;

                }

                r.addEventListener("click",function(){
                    if(n<7){
                        ++n;
                    }
                    gameView.removeAllChildren();
                    if(n >=12){
                        stop =true;
                        alert("完成！ 使用时间:"+time);
                    }
                    else{
                        addRect();
                    }
                })
            }
            else{
                var rand= parseInt(Math.random()*4+1);
                switch(rand){
                    case 1:
                        r = new createjs.Bitmap("king/king1.jpg");
                        r.sourceRect = new createjs.Rectangle(50,0,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;

                    case 2:
                        r = new createjs.Bitmap("king/king2.jpg");
                        r.sourceRect = new createjs.Rectangle(0,0,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;
                    case 3:
                        r = new createjs.Bitmap("king/king3.jpg");
                        r.sourceRect = new createjs.Rectangle(0,50,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;
                    case 4:
                        r = new createjs.Bitmap("king/king4.jpg");
                        r.sourceRect = new createjs.Rectangle(0,50,500-20,500-20);
                        r.scaleX = (175.0/500)*(2.0/n);
                        r.scaleY = (175.0/500)*(2.0/n);
                        break;

                }
            }
            r.setBounds(250,250,350/n,350/n);
            gameView.addChild(r);
            r.x =10+indexX*(350/n);
            r.y =10+indexY*(350/n);

        }
    }
}
function Timer(){
    if(!stop){
        time++;
        setTimeout("Timer()",1000);
    }
}