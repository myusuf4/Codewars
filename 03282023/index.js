// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// function spinWords(string){
// let words=string.split(" ");
// for(let i=0;i<words.length;i++){
//     if(words[i].length>=5){
//         words[i]=words[i].split("").reverse().join("");
//     }
// }
// return words.join(" ")

// }
// console.log(spinWords("Hey fellow warriors"));




// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript


// function isValidWalk(walk) {
//     return walk.length ==10 && !walk.reduce((prev,curr)=>prev+{"n":1,"e":2,"s":-1,"w":-2}[curr],0)
//    }

//    console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));


// function digPow(n, p){
//     let raqam=n.toString().split("");
//     let result=0;
//     for(let i=0;i<raqam.length;i++){
//       result+=Math.pow(raqam[i],p)
//       p++;
//     }
//     let newdata=result/n;
//     if(result % n===0) return newdata;
//     else return -1;
//   }
// console.log(digPow(digPow(92, 1), 1));


function sortByLength (array) {
 return array.sort((a,b)=>a.length-b.length)
     
};
console.log(sortByLength(["Beg", "Life", "I", "To"]));