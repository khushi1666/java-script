//arrow function
let arr =[1,1,1,1,1,1,1,1];
let arrayAvg=(arr)=>{
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    let avg=sum/arr.length;
    return avg;
}

//write arrow function for even or odd
let a=6;
let Even=false;
let isEven=(a)=>{
    return a%2==0;
}
isEven(a);
//predict the output
const object={
    message:"hello,world",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);