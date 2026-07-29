//create a programme that have num variable if num is divisible by 10 print "good"
//else print "bad"
// let x = 10;
// if(x%10==0)
// {
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }
//take name and age as input and print it
// let name = prompt("Enter Your Good Name");
// let age = prompt("Enter Your Age");
// console.log(`${name} is ${age} year  old`);
//print month quarter using switch statement
// let num=prompt("Enter a number of your favourite month quarter");
// switch(num){
//     case "1":
//     console.log("its january-february-march-april");
//     break;
//     case "2":
//     console.log("its may-june-july-august");
//     break;
//     case "3":
//     console.log("its sep-oct-nov-dec");
//     break;
//     default:
//         console.log("it's invalid quarter");
// }
//a string is golden if start with 'a' or 'A' and have length greater than 5
// let str=prompt("Enter a string to check it's golden or not");
// if((str[0]=='a'|| str[0]=='A')&& str.length>=5)
// {
//     console.log("String is Golden String");
// }
// else{
//     console.log("string is not Golden");
// }
//write a program to find 3rd largest number
// let num1 = prompt("enter 1st number");
// let num2 = prompt("enter 2nd number");
// let num3 = prompt("enter 3rd number");
// if((num1>num2)&&(num1>num3))
// {
//     console.log("First number is largest",num1);
// }
// else if((num2>num1)&&(num2>num3))
// {
//     console.log("second number is largest",num1);
// }
// else{
//     console.log("Third number is largest",num3);

// }
// write a program to check 2 number have same last  digit  
let a=prompt("enter 1st number");
let b=prompt("enter 2nd number");
let ldofa=a%10;
let ldofb=b%10;
if(ldofa==ldofb){
    console.log("last digit is same");
}
else{
    console.log("last digit is not same");
}