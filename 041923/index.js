// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
function fixTheMeerkat(arr) {
 return arr.reverse()
}
console.log(fixTheMeerkat(["arr","kiww"]));



// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
const flip=(d, a)=>{
    let res=[];
    if(d=="R"){
     res= a.sort((b,c)=>b-c)
    }
    else {
    res = a.sort((b,c)=>c-b)
    }
    return res
  }