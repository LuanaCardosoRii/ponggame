var tela = 0;
var xmenum = 30, xmenuM = 180, ymenum = 50, ymenuM = 100;
var larguraBotao = 130, alturaBotao = -30;
var xim=230, xiM= 380, yim=50, yiM=100;
var mrectX = 425, MrectX = 570, mrectY = 65,MrectY = 100;
var rectX = 10, rectY = 350, Srectx = 50, Srecty = 25;
var imgLU;
var imgRU;
var player1 = 0;
var player2 = 0;
var raio = xBall/2;
var tennis;
var telaAnterior = 1;
var pandSound;
var estadiotenis;
var tenisanimada;
var voceganhou;
var winSound;
var perdeu;

// coordenadas e largura e altura do jogador 1
var xp1, yp1, l1, a1;

// coordenadas e largura e altura do jogador 2
var xp2, yp2, l2, a2;

//coordedas da bola
var xBall, yBall, diameter;
var xBallChange = 4;
var yBallChange = 4;

function preload() {
  imgLU = loadImage("lu.jpg");
  imgRU = loadImage("Ru.jpg");
  tennis = loadImage("tennis.jpg");
  pandSound = loadSound("pandSound.wav");
  estadiotenis = loadImage("estadiotenis.jpg");
  tenisanimada = loadImage("tenis-animada.gif");
  voceganhou = loadImage("voceganhou.jpg");
  winSound = loadSound("win-sound.wav");
  perdeu = loadImage("perdeu.jpg");
}

function setup() {
  createCanvas(600, 400);
  xp1 = 20;
  yp1 = 200;
  l1= l2 = 10;
  a1 = a2 = 50;
  
  xp2 = width -20;
  yp2 = 200;
  
  xBall = width/2;
  yBall = height/2;
  diameter = 15;
}

function draw() {
  background(estadiotenis);
  moveBall();
  collide();
  
  //informações de menu ******************************************
  
  if (tela == 0){
    textSize(22);
    image(tenisanimada, width/2, height/2, 150, 150);
    stroke(15);
    fill("white");
    text("Iniciar", xmenum+40,ymenuM-9);
    text("Informações", xmenum+210,ymenuM-9);
    text("Créditos", xmenum+425,ymenuM-9);
    
  if(mouseX > xmenum && mouseX < xmenuM && mouseY > ymenum && mouseY < ymenuM){ 
      fill(150,50);
      if (mouseIsPressed){
          tela = 1;
      }
    }else{
      noFill();
    }
    rect(xmenum, ymenuM, larguraBotao, alturaBotao, 15);
    stroke(0);
    fill(190,80);
  
  if(mouseX > xim && mouseX < xiM && mouseY > yim && mouseY < yiM){ 
      fill(150,50);
      if (mouseIsPressed){
          tela = 2;
      }
    }else{
      noFill();
    }
    rect(xim, yiM, larguraBotao, alturaBotao, 15);
    stroke(0);
    fill(190,80);

  if(mouseX > mrectX && mouseX < MrectX && mouseY > mrectY && mouseY < MrectY){ 
      fill(150,50);
      if (mouseIsPressed){
          tela = 3;
      }
    }else{
      noFill();
    }
    rect(mrectX, MrectY, larguraBotao, alturaBotao, 15);
    stroke(0);
    fill(190,80);    
  }
  
  // tela 01 **************************************************************
  if(tela==1){
    //fundo da tela (cor ou imagem)
  background(tennis); 
    
  strokeWeight(4);
  //line(width/2,0,width/2,height);
  
  //o desenho jogador 1
  strokeWeight(1);
  fill(200,0,0);
  rect(xp1,mouseY,l1,a1);
  
  //o desenho do jogador 2
  strokeWeight(1);
  fill(0,0,255);
  rect(xp2,yp2,l2,a2);
  
  fill(255);
  circle(xBall, yBall, diameter);
  
  if( xBall < 20){
    player2= player2+ 1; 
  }
  if( xBall > 580){
    player1= player1+ 1;
  }
  fill("red");
  stroke("black");
  text("Pontos Jogador 1: "+player1, 10, 30);
  fill("blue");
  stroke("black");
  text("Pontos Jogador 2: "+player2, width-200, 30);
  
  if( player1 >= 70){
    player1 = 0;
    player2 = 0;
    tela=4;
  }
  if( player2 >= 35){
    player2 = 0;
    player1 = 0;
    tela=5;
  }
  movePlayer();
  
  //mover a bola de forma autonoma
  xBall += xBallChange;
  yBall += yBallChange;
    
  yp2 += yBallChange;
      
    
    
  if(mouseX > 10 && mouseX < 60 && mouseY > 350 && mouseY < 375){
  
    //bordas
     stroke(0);
    //cor
     fill(180,90);
    //retangulo onde ficara o botao voltar
     rect(rectX,rectY, Srectx,Srecty, 15);
    //if com a funcao de quando precionar o mouse 
      if (mouseIsPressed){
    //destino para onde ir apos o click
      tela = 0;
      textSize(22);
      noFill();
    
     }
    }
      fill(240,0,0);
      textSize(18);
      text("Voltar",rectX+2,rectY+19);
      noFill();
  }
  
//*************************************************************************************
  
  
  if(tela==2){
    //fundo da tela (cor ou imagem)
  background("While");
    //tamanho do texto;
  textSize(19);
    //cor
  fill("black");
    //texto a ser exibido
  text("Informações do Jogo", 200,50);
    text("Público alvo: 9° ano Fundamental.",30,100);
       text("Matéria: Educação Física BNCC.",30,130);
    text("Sua paleta é vermelha.",30,160);
  text("Arraste o mouse para controlar a paleta.", 30, 190);
  text("Acerte a bola e a jogue para o lado do adversário.", 30,220);
    text("Você marcará pontos caso a bola ultrapasse a paleta adversária.", 30,250);
       text("Ganha quem fizer mais ponto.",30,280);
  textSize(18);
    // cor do nome voltar
     fill("red");
  text("Voltar",rectX+2,rectY+19);
    //retirar a cor
  noFill();
    //coordenadas para identificação do mouse
      if(mouseX > 10 && mouseX < 60 && mouseY > 350 && mouseY < 375){
    //bordas
     stroke(0);
    //cor
     fill(180,90);
    //retangulo onde ficara o botao voltar
     rect(rectX,rectY, Srectx,Srecty, 15);
    //if com a funcao de quando precionar o mouse 
      if (mouseIsPressed){
    //destino para onde ir apos o click
      tela = 0;
     }
    }
  }
  
 //***********************************************************************************
  
  if(tela==3){
    //fundo da tela (cor ou imagem)
  background("while");
  
  image(imgLU,30,70, 100,100);
    image(imgRU,30,200,100,100);
    //tamanho do texto;
  textSize(20);
      //cor
  fill("black");
    //texto a ser exibido
  text("Créditos", 250,50);
    // informações do programador
   text ("Luana Cardoso Ribeiro",130,90);
     textSize(18);
    text ("Função: Promogadora", 130,110);
    text("Estude do Bacharel em Ciências e Tecnologia na UFRN.",130,130);
    // informações do educador
    textSize(20);
    text(" Rummenigge Rubson Dantas.",130,220);
     textSize(18);
    text("Função: Educador",130,240);
    // cor do nome voltar
     fill("red");
  text("Voltar",rectX+2,rectY+19);
    //retirar a cor
  noFill();
    //coordenadas para identificação do mouse
      if(mouseX > 10 && mouseX < 60 && mouseY > 350 && mouseY < 375){
    //bordas
     stroke(0);
    //cor
     fill(180,90);
    //retangulo onde ficara o botao voltar
     rect(rectX,rectY, Srectx,Srecty, 15);
    //if com a funcao de quando precionar o mouse 
      if (mouseIsPressed){
    //destino para onde ir apos o click
      tela = 0;
     }
    }
  }
  if(tela==4){
    //fundo da tela (cor ou imagem)
  background("while");
  image(voceganhou, width/4, height/3, 300, 150);
  if (playsound()){
  winSound.play();
  }
    // cor do nome voltar
  fill("red");
  text("Voltar",rectX+2,rectY+19);
  //retirar a cor
  noFill();
    //coordenadas para identificação do mouse
      if(mouseX > 10 && mouseX < 60 && mouseY > 350 && mouseY < 375){
    //bordas
     stroke(0);
    //cor
     fill(180,90);
    //retangulo onde ficara o botao voltar
     rect(rectX,rectY, Srectx,Srecty, 15);
    //if com a funcao de quando precionar o mouse 
      if (mouseIsPressed){
    //destino para onde ir apos o click
      tela = 0;
     }
    }
  }
   if(tela==5){
    //fundo da tela (cor ou imagem)
  background(perdeu);
  if (playsound()){
  winSound.play();
  }
    // cor do nome voltar
  fill("red");
  text("Voltar",rectX+2,rectY+19);
  //retirar a cor
  noFill();
    //coordenadas para identificação do mouse
      if(mouseX > 10 && mouseX < 60 && mouseY > 350 && mouseY < 375){
    //bordas
     stroke(0);
    //cor
     fill(180,90);
    //retangulo onde ficara o botao voltar
     rect(rectX,rectY, Srectx,Srecty, 15);
    //if com a funcao de quando precionar o mouse 
      if (mouseIsPressed){
    //destino para onde ir apos o click
      tela = 0;
     }
    }
  }
  
}

//***************************************************************************************

function movePlayer(){
  
  if(keyIsDown(UP_ARROW)){
    yp1= yp1 - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yp1= yp1 + 5;
  }
  
}

function moveBall(){
  
  if (xBall < diameter/2 || 
      xBall > width - 0.5*diameter) {
  xBallChange *= -1;
}
if (yBall < diameter/2 || 
     yBall > height - diameter) {
  yBallChange *= -1;
}
  
}

function collide(){
  if ((xBall> xp1 && xBall < xp1 + l1) && (yBall + (diameter/2) <= yp1) ) {
  xBallChange *= -1;
  yBallChange *= -1;
    pandSound.play();
    //pandSound.setVolume(0.1);

}
  
}
function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}