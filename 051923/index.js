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