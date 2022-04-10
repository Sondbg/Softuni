function printSum(a,b){
    let sum=0;
    let string='';
    for (a; a<=b;a++){
sum+=a;
string+=a;
if(a<b){
    string+=' ';
}
    }
    console.log(string);
console.log(`Sum: ${sum}`);
}
printSum(5,10)