function solve(input){
let cypher=['s','t','a','r'];
let numberMessages=input.shift();
let attackedPlanets=[];
let destroyedPlanets=[];
for (let message of input) {
    let regExp=/@(?<planet>[a-zA-Z]+)([^@\-!:>]+)?:(?<population>\d+)([^@\-!:>]+)?!([^@\-!:>]+)?(?<type>[AD])([^@\-!:>]+)?!([^@\-!:>]+)?->(?<soldiers>\d+)/g;
    let count=0;
    for (let token of message) {
       cypher.includes(token.toLowerCase())? count++ :"";
    }
//remove the count from the current ASCII value of each symbol of the encrypted message.
    message=message.split('');
    message.forEach((a,index)=>
     message[index]=String.fromCharCode(a.charCodeAt(0)-count));
    message=message.join('')
let decypher=regExp.exec(message);
if(decypher!=null){
    if(decypher.groups['type']=='A'){
        attackedPlanets.push(decypher.groups['planet'])
    }else{
        destroyedPlanets.push(decypher.groups['planet']);
    }
}
    }
console.log(`Attacked planets: ${attackedPlanets.length}`);
attackedPlanets=attackedPlanets.sort((a,b)=>a.localeCompare(b)).forEach(a=>console.log('->',a));
console.log(`Destroyed planets: ${destroyedPlanets.length}`);
destroyedPlanets=destroyedPlanets.sort((a,b)=>a.localeCompare(b)).forEach(a=>console.log('->',a));
}
// solve(['2',
// 'STCDoghudd4=63333$D$0A53333',
// 'EHfsytsnhf?8555&I&2C9555SR']
// )
solve(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']
)