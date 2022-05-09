function sumOdd(n){
let sum=0;
let i=1;
for(i;;i++){
    if(i%2!=0){
        n--;
        sum+=i;
        console.log(i);
    }
if(n==0){
    break;
}
}
console.log(`Sum: ${sum}`);
}
sumOdd(3)