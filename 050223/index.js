// // https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

// function divisors(integer) {
//     let arr=[];
//     for(let i=2;i<integer;i++){
//       if(integer % i===0){
//         arr.push(i);
//       }
//     }
//     if(arr.length === 0){
//       return `${integer} is prime`
//     }
//     else{
//       return arr
//     }
//   };

//   console.log(divisors(12));






function toCamelCase(str){
  let strArray;
  if(str.strArray==""){
    return ""
  }
  if(str.indexOf("-")!==-1){
    strArray=str.split("-")
  } else {
    strArray=str.split("_")
  }
  let res=strArray[0];
  for(let i=1;i<strArray.length;i++){
    res+=capitalize(strArray[i]);
  }
  return res;
}
let capitalize=(str)=>{
    return str[0].toUpperCase()+str.slice(1)
}
console.log(toCamelCase("name-muhammad_name"));