const arr1 = [
  {id: 0, xA:100, yA:100},
];

const arr2 = [
  {id:1, xB:1, yB: 20},
  {id:2, xB:20, yB: 20},
  {id:3, xB:100, yB: 100},
  {id:4, xB:50, yB: 50},
];

const checkArr = arr2.filter(
  item => item.xB === arr1[0].xA && item.yB === arr1[0].yA);
// console.log(`check id is: ` + checkArr[0].id)

check = () => {
  checkArr ? gameOver() : console.log('nothing')
}

gameOver = () => {console.log('this is the end')}

check()

// version with nested position.x and position.y