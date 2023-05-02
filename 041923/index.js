// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
// function fixTheMeerkat(arr) {
//  return arr.reverse()
// }
// console.log(fixTheMeerkat(["arr","kiww"]));



// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
// const flip=(d, a)=>{
//     let res=[];
//     if(d=="R"){
//      res= a.sort((b,c)=>b-c)
//     }
//     else {
//     res = a.sort((b,c)=>c-b)
//     }
//     return res
//   }


// let num =100;

// for(let i = 1;i < num; i++){
//     tub=true;
//     for(let j = 2; j < i ; j++){
//         if(i%j==0){
//             tub=false;
//             break;
//         }
//     }
//     if(tub==true){
//         console.log(`${i} => tub son`);
//     }
// }


// let n=Number.parseInt(Math.random()*10000);

// console.log(n);
// if(n5000){
//     console.log("qimmat");
// }
// else{
//     console.log("arzon");
// }

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// function solution(str, ending){
//     if(str.endsWith(ending)){
//       return true;
//     }
//     else{
//       return false
//     }
//   }

//   console.log(solution("abs","bs"));
function reverseWords(str) {
    let res=str.split("").reverse("").join("");
    return res.split(" ").reverse().join(" ")
 }

   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));