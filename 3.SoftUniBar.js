function income(input){
let totalIncome=0;
while (input[0]!='end of shift'){
    let regExp=/%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g;
    let token=regExp.exec(input.shift());
    let regindex=regExp.lastIndex;
    if(token){
    let total=token.groups['count']*token.groups['price'];
    totalIncome+=total;
    console.log(`${token.groups['name']}: ${token.groups['product']} - ${total.toFixed(2)}`);
    }
}
console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
income(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']

)
console.log(`---------------------`);
income(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)