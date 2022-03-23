function solve(inputArr){
let result=[];
let totalPrice=0;
while(inputArr[0]!='Purchase'){
    let item=inputArr.shift();
    let regExp=/>>(?<furniture>[A-Z]\w+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/g;
    let flag=regExp.exec(item);
    if(flag!=null){
        result.push(flag.groups['furniture']);
        totalPrice+=flag.groups['price']*flag.groups['qty'];
    }
}
console.log('Bought furniture:');
result.forEach(a=>console.log(a))
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
)