let array=[1,2,3,4,5]
// for(let i=0; i<array.length; i++) {
//     if (array[i]%2===1){
//          console.log(array[i]);
//     }
// }
let sum = 0;
for (let i=0; i<array.length; i++) {
    sum += array[i];
}
console.log(sum);