function solve(input){
let arr=input.split(' ');
let objArr={};
for (let word of arr) {
   word=word.toLowerCase();
    if(objArr[word]==undefined){
        objArr[word]=1;
    }else{
        objArr[word]++;
    }
}
let result=[];
for (let [word, value] of Object.entries(objArr)) {
    if(value%2!=0){
    result.push(word);
    }
}
console.log(result.join(" "));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')