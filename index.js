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
    this._x -= 1;
  }
  right() {
    this._x += 2;
  }
  up() {
    this._y -= 5;
  }
  down() {
    this._y += 5;
  }
}
const PlaneJS = new Player(100, 200);

class Move {
  static RenderPlane(PlaneJS) {
    const PlaneDom = document.getElementById('player');
    PlaneDom.style.left = PlaneJS.x + "px";
    PlaneDom.style.right = PlaneJS.x + "px";
    PlaneDom.style.top = PlaneJS.y + "px";
    console.log(PlaneJS);
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
      PlaneJS.y === 450
    ) {
      document.querySelector(".board").style.background = "crimson";
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

const 
  startBtn = document.getElementById('start__btn'),
  startGame = () => {
    startBtn.style.display = 'none';
    event.preventDefault();
    setInterval(() => RenderObstacles.RenderObst(),100);
    document.addEventListener("keydown", event => Move.KeySupport(PlaneJS, event));
    console.log(PlaneJS);
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
  leftBird() {
    this._x -= 10;
  }
  downBird() {
    this._y -= -1;
  }
  leftSky() {
    this._x -= 1;
  }
  leftObst() {
    this._x -= 3;
  }
}
const ObstacleArray = [
  new Obstacle('img', 640, 120),
  new Obstacle('bird1', 340, 60),
  new Obstacle('bird2', 840, 70),
  new Obstacle('cloud1', 80, 20),
  new Obstacle('cloud2', 480, 80),
  new Obstacle('cloud3', 540, 30), 
  new Obstacle('mount', -80, 300),
  new Obstacle('tree1', 10, 460),
  new Obstacle('tree2', 55, 475),
  new Obstacle('tree3', 110, 420),
  new Obstacle('tree4', 190, 460),
  new Obstacle('city1', 370, 390),
  new Obstacle('city2', 640, 390),
  new Obstacle('city3', 760, 390)
]
class RenderObstacles {
  static RenderObst() {
    const Bird = document.querySelector('img');
    const Sky1 = document.querySelector('.cloud1');
    const City3 = document.querySelector('.city3');
    // ObstacleArray.forEach = (item,i) => {item.leftObst()};
    Bird.style.left = ObstacleArray[0].x + "px";
    Bird.style.top = ObstacleArray[0].y + "px";
    Sky1.style.left = ObstacleArray[3].x + "px";
    City3.style.left = ObstacleArray[13].x + "px";
    ObstacleArray[0].leftBird();
    ObstacleArray[0].downBird();
    ObstacleArray[3].leftSky();
    ObstacleArray[13].leftObst();
  }
}

startBtn.addEventListener('click', startGame);