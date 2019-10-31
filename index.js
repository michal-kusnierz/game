
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
    setInterval(() => RenderSkyItems.RenderSky(),300);
    setInterval(() => RenderSkyImg.RenderSkyI(),310);
    document.addEventListener("keydown", event => Move.KeySupport(PlaneJS, event));
};


class Obstacles {
  constructor(name, x, y) {
    this._name = name;
    this._x = x;
    this._y = y;
  }
  get namet() {
    return this._name;
  }  
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set name(newName){
    this._name = newName;
  }
  set x(newX){
    this._x = newX;
  }
  set name(newY){
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
const ObstJS = new Obstacles(-80, 300);
const ObstJSCity1 = new Obstacles(370, 390);
const ObstJSCity2 = new Obstacles(640, 390);
const ObstJSCity3 = new Obstacles(760, 390);

class RenderObstacles {
  static RenderObst() {
    const ObstMount = document.querySelector('.mount');
    const ObstCity1 = document.querySelector('.city1');
    const ObstCity2 = document.querySelector('.city2');
    const ObstCity3 = document.querySelector('.city3');
    ObstMount.style.left = ObstJS.x + "px";
    ObstCity1.style.left = ObstJSCity1.x + "px";
    ObstCity2.style.left = ObstJSCity2.x + "px";
    ObstCity3.style.left = ObstJSCity3.x + "px";
    ObstJS.left();
    ObstJSCity1.left();
    ObstJSCity2.left();
    ObstJSCity3.left();
    }
  }

////////////moving sky-items///////
  class SkyItems {
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
      this._x -= 15;
    }
  }
  const SkyJSBird1 = new SkyItems(340, 60);
  const SkyJSBird2 = new SkyItems(840, 30);
  const SkyJSCloud1 = new SkyItems(80, 20);
  const SkyJSCloud2 = new SkyItems(150, 80);
  const SkyJSCloud3 = new SkyItems(540, 30);
  
  class RenderSkyItems {
    static RenderSky() {
      const SkyBird1 = document.querySelector('.bird1');
      const SkyBird2 = document.querySelector('.bird2');
      const SkyCloud1 = document.querySelector('.cloud1');
      const SkyCloud2 = document.querySelector('.cloud2');
      const SkyCloud3 = document.querySelector('.cloud3');
      SkyBird1.style.left = SkyJSBird1.x + "px";
      SkyBird2.style.left = SkyJSBird2.x + "px";
      SkyCloud1.style.left = SkyJSCloud1.x + "px";
      SkyCloud2.style.left = SkyJSCloud2.x + "px";
      SkyCloud3.style.left = SkyJSCloud3.x + "px";
      SkyJSImg.left();
      SkyJSBird1.left();
      SkyJSBird2.left();
      SkyJSCloud1.left();
      SkyJSCloud2.left();
      SkyJSCloud3.left();
      }
    }

    class SkyImg {
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
    }
    const SkyJSImg = new SkyImg(580, 130);
    
    class RenderSkyImg {
      static RenderSkyI() {
        const SkyImg = document.querySelector('img');
        SkyImg.style.left = SkyJSImg.x + "px";
        SkyJSImg.left();
      }
    }
  

startBtn.addEventListener('click', startGame);
