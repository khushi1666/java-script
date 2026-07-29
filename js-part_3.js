//return first 3 element of the array
let arr=[7,9,0,-2];
console.log(arr.slice(0,3));
//print element from last
console.log(arr.slice(-3));
//check string is blank or not
let str="";
if(str.length===0){
    console.log("true");
}
else{
    console.log("false");
}
//character at given index is lower case
let str2="KHUSHI";
let idx=prompt("give index number:");
if(str2[idx] == str2[idx].toLowerCase()){
    console.log("character in lower case");
}
else{
    console.log("character upper case");
}
//strip leading and trailing strip from the string
// let s = prompt("enter the string with space");
// console.log(`The original string is ${s}`);
// console.log(`The trim string is ${s.trim()}`);
//to check element is present in array or not
let q = [1,2,3,4,5,6];
let i=Number(prompt("write a element you want to know present in array or not"));
if(q.indexOf(i)!=-1){
    console.log("element is present in array");

}else{
    console.log("element is not present in array");
}