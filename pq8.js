//use of reduce and map function

let num=[1,1,1,1,1,1,1];
let square = num.map((el)=>
    el*el
);
let sum=num.reduce((acc,el)=> acc+el,0);
let avg=sum/num.length;

// use of map function that create new array by adding 5 each
let nums=[1,2,1,2,1,2];
let add5=nums.map((el)=>el+5);

//make upper case of each string presented in the array
let string=["banana","apple","mango","kiwi"];
// console.log(string[0].toUpperCase()); 
let upper=string.map((el)=>el.toUpperCase());


//use of spread operator
const doubleAndReturnArgs = (arr,...args)=>[
    arr,
    ...args.map((v)=>v*2),
];
let student1={
    name:"khushi",
    enr:245,
    interest:"devops",
};
let student2={
    name:"anjana",
    enr:246,
    interest:"iidkjsk",
}
const merge=(obj1,obj2)=>({...obj1},{...obj2});