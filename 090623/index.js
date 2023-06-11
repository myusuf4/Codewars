var moveZeros = function (arr) {
  let zero = arr.filter(el => el === 0);
  let arrWithoutZero = arr.filter(el=> el !== 0)
  return arrWithoutZero.concat(zero);
}
console.log(moveZeros([1,2,0,1,1,0,3,0,1]));