function mining(input){
let BTCprice=11949.16;
let Goldprice=67.51;
let day=0;
let gold=0;
let BTC=0;
let dayBTC=0;
for (let index=0;index<input.length;index++){
    day++;
    if(day%3==0){
        gold+=input[index]*0.7*Goldprice;
    }else{
gold+=input[index]*Goldprice;
    }
    for(gold;gold>=BTCprice;gold-=BTCprice){
BTC++;
if(BTC==1){
    dayBTC=day;
}
    }
}
console.log(`Bought bitcoins: ${BTC}`);
dayBTC>0 ? console.log(`Day of the first purchased bitcoin: ${dayBTC}`) : '';
console.log(`Left money: ${gold.toFixed(2)} lv.`);
}
mining([50,100])