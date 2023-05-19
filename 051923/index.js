// function alphabetPosition(text) {
//     return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
//   }

//   console.log(alphabetPosition("The sun"));


//   https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// function validatePIN (pin) {
//     for (let i of pin) {
//         if (!isFinite(parseInt(i))) return false;
//     }
//     return pin.length === 4 || pin.length === 6;
// }
//   console.log(validatePIN("1111"));



// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }

// console.log(removeSmallest([4,6,7,1]));



// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// function solution(str){
//     let i=0;
//    let result=[];
//    if(str.length%2!==0){
//      str+="_"
//    }
//    while(i<str.length){
//      result.push(str[i]+str[i+1])
//      i+=2
//    }
//    return result
//  }

// console.log(solution("abc"));

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable (seconds) {
    const HH=('0'+parseInt(seconds/(60*60))).slice(-2);
    const MM=('0'+parseInt(seconds/60%60)).slice(-2);
    const SS=('0'+parseInt(seconds%60)).slice(-2);
   return HH+":" +MM+":"+SS
  }
  console.log(humanReadable(59));