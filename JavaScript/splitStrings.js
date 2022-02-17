// Split Strings (Codewars)
// function solution(str){
//   let result = [];
//   if(!str) return result;
//   for(let i = 0; i < str.length; i+=2){
//     result.push(str.slice(i,i+2));
//   }
  
//   if(result[result.length - 1].length === 1) {result[result.length - 1] = `${result[result.length - 1]}_` };
  
//   return result;
// }
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }
console.log( solution('abcdefg'))