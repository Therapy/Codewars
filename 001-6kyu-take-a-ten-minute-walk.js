//jshint esversion: 6

function isValidWalk(walk) {
  //insert brilliant code here
  let result = 0;
  for (let dir of walk) {
    switch (dir) {
      case 'n':
        result += 1;
        break;
      case 's':
        result -= 1;
        break;
      case 'w':
        result += 2;
        break;
      case 'e':
        result -= 2;
        break;
    }
  }
  return walk.length == 10 && result === 0;
}
