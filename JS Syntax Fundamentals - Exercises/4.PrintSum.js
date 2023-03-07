function printSum(start,end){
    let sum=0;
let arr=[];

for (; start <= end; start++) {
   sum+=start
arr.push(start)    
}

console.log(arr.join(' '));
console.log(`Sum: ${sum}`);
}

printSum(50,60)