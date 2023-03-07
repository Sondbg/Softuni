function pascalCaseSplitter(string){
let result=[];
let start=0;
let end;
for (let i = 1; i < string.length; i++) {
    if(string.charAt(i)===string.charAt(i).toUpperCase()){
end=i;
result.push(string.slice(start,end))
start=i;
    }
    
}
result.push(string.slice(start))
console.log(result.join(', '));
}
pascalCaseSplitter('Split')