const centerp = window.innerWidth / 2;

function rect(color, x, y, width, height) {
  this.color = color; // цвет прямоугольника
  this.x = x; // координата х
  this.y = y; // координата у
  this.width = width; // ширина
  this.height = height; // высота
  this.draw = function () // Метод рисующий прямоугольник
  {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}


class Playsvg {
  constructor(svgn, x, y) {
    this.svgn = svgn;
    this.x = x;
    this.y = y;

    var img = new Image();

    img.onload = function () {
      context.drawImage(
        img,
        x,
        y,
        window.innerHeight / 21,
        window.innerHeight / 21
      );
    };

    img.src = "./source/" + svgn + ".svg";
   
  }
}
// function playerMove(e) {
//   var x = e.pageX;
//   if (
//     game.width + game.width / 2 - window.innerHeight / 21 / 2 > x &&
//     x > game.width / 2 + window.innerHeight / 21 / 2
//   ) {
//     x = x - window.innerHeight / 21 / 2;
//   }
//   player = new Playsvg("s1", x, window.innerHeight - 80);
// }


var playerxpos = window.innerWidth / 2 - window.innerHeight / 42;
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight' && playerxpos < window.innerWidth - window.innerWidth / 4 - window.innerHeight / 21) {
    playerxpos = playerxpos + window.innerHeight / 21;
  }
  else if (event.code == 'ArrowLeft' && playerxpos > window.innerWidth / 4 ){
    playerxpos = playerxpos - window.innerHeight / 21;
  }
  else if (event.code == 'Space'){
    fire();
  }
});
// player = new rect(s1, game.width + 30, window.innerHeight - 35,);
// Alis = new Alien(ax + ai * (window.innerWidth / 21), alienslives[ai]);

// opt = {
//     pixelSize: 3
//   },

//   color = {
//     "+": "black",
//     "-": "rgba(0,0,0,0)"
//   },
//   Aliensi = [50, 65, 80, 95]
//   picture = [
//     "--+------+--",
//     "---+----+---",
//     "--++++++++--",
//     "-++-++++-++-",
//     "++++++++++++",
//     "+-++++++++-+",
//     "+-+------+-+",
//     "---+----+---"];

//     var mv=200;
//     let  mvc = "right";

// function Aliens(){
//     for (var ai = 0; ai < Aliensi.length; ai++){
//     for(var i = 0; i < picture.length; i++){
//         for(var f = 0; f < picture[i].length; f++){

//             newRect( f + mv + Aliensi[ai], i + 50, color[picture[i][f]]);
//             if (Aliensi[ai] != 65)
//             ALI = new rect (color[picture[i][f]], f*3 + Aliensi[ai] *4, i*3, 3,3);
//             ALI.draw();
//             // console.log(ALI.y)
//         }
//       }
//     }

//   if (mv < 300 && mvc == "right")
//   { mv += 1; }
//   else if (mv == 300 && mvc == "right")
//   { mvc = "left"; }
//   else if (mv > 200 && mvc == "left" )
//   { mv -= 1;}
//   else if (mv == 200 && mvc == "left")
//   { mvc = "right";
// console.log(mv);}

// }

// function newRect(col, row, color) {
//     context.fillStyle = color;
//     context.fillRect(col*opt.pixelSize, row*opt.pixelSize, opt.pixelSize, opt.pixelSize);

//   }
var pic = 1;
var ay = 200;
// var ax = window.innerWidth/4 * 3 -50;
var ax = window.innerWidth / 4;
var moveSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(moveSet);

class Alien {
  constructor(apos, life) {
    this.apos = apos;
    this.life = life;
    var img = new Image();

    img.onload = function () {
      context.drawImage(
        img,
        apos,
        ay,
        window.innerHeight / 21,
        window.innerHeight / 21
      );
    };

    img.src = "./source/" + life + ".svg";
  }
}
let alienslives = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let mvc = "right";

// let alienspos = [1,1,1,1,1,1];
function alispawn() {
  for (var ai = 0; ai < 10; ai++) {
    // console.log("dd=",dd +4," y=  ",shoot.y, "x= ",shoot.x," bb + 50=","pic= "," bb=",bb, ai*100);

    if (
      ay + 4 < shoot.y &&
      shoot.y < ay + 17 &&
      (ax + ai * (window.innerWidth / 21) == shoot.x ||
        (ax + ai * (window.innerWidth / 21) < shoot.x &&
          ax + ai * (window.innerWidth / 21) + window.innerHeight / 21 >
            shoot.x))
    ) {
      alienslives[ai] = 2;
      shoot.y = 0;
      moveSet.delete(ai);
      moveborders();
      // console.log(moveSet.has(0));
    }

    // console.log(ay + 7, shoot.y);
    Alis = new Alien(ax + ai * (window.innerWidth / 21), alienslives[ai]);

    player = new Playsvg("s1", playerxpos, window.innerHeight - 80);
    console.log('px', player.x);
    //    Alis = new Alien( ax + ai * (window.innerWidth / 21) ,alienslives[ai]);
    //    ai*window.innerWidth / 21
  }
  let amp = (window.innerWidth / 21) * 2; // тут остановочка!!!!!!!!!!!!!!
  let btrmp = 9 - maxs;
  let btr = (window.innerWidth / 21) * btrmp;
  let btl = (window.innerWidth / 21) * mins;
  // for (var aj = 10; aj > 0; aj--){
  // if(alienslives[аj] == 2){
  //     amp = amp - 1
  // }
  // }
  // let amr = centerp /4 ;
  let amr = centerp - window.innerWidth / 8 - amp + btr + window.innerHeight / 24;
  let aml = window.innerWidth / 4 - btl;
  if (ax < amr && mvc == "right") {
    ax += 1;
  } else if (ax + 1 > amr && mvc == "right") {
    mvc = "left";
  } else if (ax > aml && mvc == "left") {
    ax -= 1;
  } else if (ax - 1 < aml && mvc == "left") {
    mvc = "right";
  }
  // console.log(amr, amp);
}
let maxs = 9;
let mins = 0;
function moveborders() {
  while (moveSet.has(maxs) == false && maxs != 0) {
    maxs = maxs - 1;
  }
  while (moveSet.has(mins) == false && mins != 9) {
    mins = mins + 1;
  }
  console.log(maxs, mins);
}

function fire() {
  var xpos = playerxpos + window.innerHeight / 60;
  if (shoot.y <= 0) shoot = new rect("white", xpos, player.y, 10, 10);
}

function update() {
  // меняем координаты шарика
  if (shoot.y > 0) {
    shoot.y -= 10;
  }
}
function draw() {
  game.draw();
  // player.draw();

  shoot.draw();
  alispawn();
}

function play() {
  draw();
  //    Aliens(); // отрисовываем всё на холсте
  update();
}

function init() {
  game = new rect(
    "black",
    centerp - window.innerWidth / 2 / 2,
    0,
    window.innerWidth / 2,
    window.innerHeight
  );
  // player = new Playsvg("s1", game.width + 30, window.innerHeight - 80);
  // player = new rect("white", game.width + 30, window.innerHeight - 35, 60, 20);
  shoot = new rect("white", 0, 0, 0, 0);
  Alpic = new rect("black", 0, 0, 0, 0);
  // ALI = new rect ("black", 0, 0, 0, 0);
 
  //
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");
  //

  //
  
  // canvas.onmousemove = playerMove;
  setInterval(play, 1000 / 50);
  // canvas.onclick = fire;

  draw();
}
