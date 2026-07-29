//print the array which has been deleted occurence of given num
// let arr=[2,3,4,5,6,2,5,6,7];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log("array elemets:");
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }



//print the digit of the number
// let digit= 456789459788;
// let count=0;
// let n=digit;
// while(n!=0){
//     n=Math.floor(n/10);
//     count++;
// }
// console.log(`the count is:${count} and digit is:${digit}`);




//sum of the digit
// let num=287152;
// let sum = 0;
// let i=0;
// let ld;
// while(num!=0){
//      ld=num%10;
//      sum=sum+ld;
//      num=Math.floor(num/10);
// }
// console.log(sum);


//factorial of n number
// let fact=1;
// let factnum=4;
// for(let i=4;i>0;i--){
//     fact*=i;
// }
// console.log("factorial of given number is ",fact);


//find the largest number in the array
let a=[1,2,3,4,5,6,7,8,9,10,12,78,99,98];
let compare=a[0];
for(let i=1;i<a.length;i++){
    if(compare<a[i]){
        compare=a[i];
    }
}
console.log("largest number in the array is:",compare);