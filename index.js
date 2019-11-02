
class Player {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  left() {
    this._x -= 10;
  }
  right() {
    this._x += 10;
  }
  up() {
    this._y -= 10;
  }
  down() {
    this._y += 10;
  }
}
const PlaneJS = new Player(100, 200);

class Move {
  static RenderPlane(PlaneJS) {
    const PlaneDom = document.getElementById('player');
    PlaneDom.style.left = PlaneJS.x + "px";
    PlaneDom.style.right = PlaneJS.x + "px";
    PlaneDom.style.top = PlaneJS.y + "px";
    // console.log(PlaneJS);
  }

  static KeySupport(PlaneJS, event) {
    switch (event.code) {
      case "ArrowLeft":
        PlaneJS.left();
        Move.RenderPlane(PlaneJS);
        break;
      case "ArrowRight":
        PlaneJS.right();
        Move.RenderPlane(PlaneJS);
        break;
      case "ArrowUp":
        PlaneJS.up();
        Move.RenderPlane(PlaneJS);
        break;
      case "ArrowDown":
        PlaneJS.down();
        Move.RenderPlane(PlaneJS);
        break;
      default:
        Move.RenderPlane(PlaneJS);
    }
  }

  static Collision(PlaneJS) {
    if (
      PlaneJS.x === 0 ||
      PlaneJS.x === 880 ||
      PlaneJS.y === 0 ||
      PlaneJS.y === 580
    ) {
      document.querySelector(".board").style.background = "crimson";
      document.querySelector(".board").style.border = "5px solid black";
      setTimeout(eyeBlink, 150);
      function eyeBlink() {
        alert("GAME OVER! Sorry, this is the end of your trip.");
        location.reload();
      }
    }
  }
}

Move.RenderPlane(PlaneJS);
document.addEventListener("keydown", event => Move.Collision(PlaneJS, event));


/////////moving obstacles//////////
const 
  startBtn = document.getElementById('start__btn'),
  startGame = () => {
    startBtn.style.display = 'none';
    event.preventDefault();
    setInterval(() => RenderObstacles.RenderObst(),300);
    // setInterval(() => RenderSkyItems.RenderSky(),300);
    // setInterval(() => RenderSkyImg.RenderSkyI(),310);
    document.addEventListener("keydown", event => Move.KeySupport(PlaneJS, event));
};

class Obstacle {
  constructor(name, x, y) {
    this._name = name;
    this._x = x;
    this._y = y;
  }
  get name() {
    return this._name;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set name(newName) {
    this._name = newName;
  }
  set x(newX) {
    this._x = newX;
  }
  set y(newY) {
    this._y = newY;
  }

  leftObst() {
    this._x -= 5;
  }
  leftSky() {
    this._x -= 10;
  }
  leftBird() {
    this._x -= 15;
  }
}
const ObstacleArray = [
  new Obstacle('Mount', -80, 300),
  new Obstacle('City1', 370, 390),
  new Obstacle('City2', 640, 390),
  new Obstacle('City3', 760, 390),
  new Obstacle('Bird1', 340, 60),
  new Obstacle('Bird2', 840, 30),
  new Obstacle('Cloud1', 80, 20),
  new Obstacle('Cloud2', 150, 80),
  new Obstacle('Cloud3', 540, 30)
]
class RenderObstacles {
  static RenderObst() {
    const Obst = document.querySelectorAll('.moveObst')[0];
    Obst.style.left = ObstacleArray[0].x + "px";
    ObstacleArray.forEach = (item,i) => {item.leftObst()};

   ObstacleArray[0].leftObst();
    }
  }

  

startBtn.addEventListener('click', startGame);