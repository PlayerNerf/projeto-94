var canvas = new fabric.Canvas('myCanvas');
ball_y=0
ball_x=0;
hole_y=400;
hole_x=800;
function load_img(){
    fabric.Image.fromIRL("golf-b.png", function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidht(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
      });
      new_image();
}
function new_image()
{
    fabric.Image.fromURL("bola.png", funcition(Img){
        ball_obj = Img;
        ball_obj.scaleToWidht(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
        top:ball_y,
        left:ball_x
        });
        canvas.add(ball_obj);
    })
}
if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_obj);
}
document.getElementById("hd3").innerHTML="Você acertou o buraco!!";
document.getElementById("myCanvas").style.borderColor="red";

function down()
{
    if(ball_y <=450)
    {
        ball_y = ball_y + block_image_height;
        console.log("altura do bloco da imagem = " + block_image_height);
        console.log("Quando a seta para baixo é pressionada, X = " + ball_x + " , Y = "+ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}

function up()
{
    if(ball_y <=0)
    {
        ball_y = ball_y - block_image_height;
        console.log("altura do bloco da imagem = " + block_image_height);
        console.log("Quando a seta para cima é pressionada, X = " + ball_x + " , Y = "+ball_y);
        canvas.remove(ball_obj);
        new_image();
    }
}

function left()
{
    if(ball_x >0)
    {
        ball_x = ball_x - block_image_width;
        cosole.log("largura do bloco da imagem = " + block_image_width);
        cosole.log("Quando a seta esquerda é pressionada, X = " + ball_x + " , Y = "+ball_x);
        canvas.remove(ball_object);
        new_image();
    }
}

function right()
{
    if(ball_x >850)
    {
        ball_x = ball_x - block_image_width;
        cosole.log("largura do bloco da imagem = " + block_image_width);
        cosole.log("Quando a seta direita é pressionada, X = " + ball_x + " , Y = "+ball_x);
        canvas.remove(ball_object);
        new_image();
    }
}