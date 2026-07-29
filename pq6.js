//function that return larger value
let arr=[4,,5,8,5,4,5,5,10,1,0,313];
let num=22;
function getElement(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElement(arr,num);
//get unique string
let str="abcdefgabcedefg";
let ans="";
function getUninqestring(str,ans){
for(let i=0;i<str.length;i++){
    let curr=str[i];
    if(ans.indexOf(curr)==-1){
        ans+=curr;
    }}
    return ans;
}
getUninqestring(str,ans);
//write a java script program that return longest country name
let country=["america","canada","rush","united state of kingdom"];
let output="";
function getLongest(country,output){
    let max=country[1].length;
    for(let i=0;i<country.length;i++){
        console.log("country name",country[i],country[i].length);
        if(max<=country[i].length){
            max=country[i].length;
            output+=country[i];
        }
    }
    return output;
}

//count the vowel of string
let alphabet="annaa";
let vowel=["a","e","i","o","u"];
function countVowel(str){
let count=0;
    for(let i=0;i<str.length;i++){
        if(vowel.indexOf(str[i])!=-1){
            count++;
        }
    }
    return count;
}

//generate a random number
let initial=1;
let max=5;
function Random(initaial,max){
    let diff=end-initaial;
    let Random2=Math.floor(Math.random()*diff+initial);
    return Random2;
}