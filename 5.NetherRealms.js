function solve(input){
    let result=[]
let inputArr=input.split(',')
for (let name of inputArr) {
    name=name.trim();
let demon={};
let regExpHealth=/[^0-9+\-*\/\.]/g;
let health=name.match(regExpHealth)
health.forEach((a,index)=>health[index]=a.charCodeAt(0))
health=health.reduce((a,b)=>a+b);
let regExpDamage=/(([+-]?(\d+(\.\d*)?))(\B[\*\/])*)/g;
let damage=name.match(regExpDamage);
if(damage==null){
    damage=0;
}else{
damage=damage.reduce((a,b)=>Number(a)+Number(b))
let multiplierRegExp=/[*\/]/g;
let multiplier=name.match(multiplierRegExp);
if(multiplier!=null){
    multiplier.forEach(a=>{
    if(a=='*'){
        damage=damage*2;
    }else{
        damage=damage/2;
    }
});
}
}
demon['name']=name;
demon['health']=health;
demon['damage']=Number(damage);
result.push(demon);
}
result=result.sort((a,b)=>a['name'].localeCompare(b['name']))
result.forEach(a=>console.log(`${a['name']} - ${a['health']} health, ${a['damage'].toFixed(2)} damage`))
}
solve('A00.00000001b')
// solve('M3ph1st0**, Azazel')
// solve('Gos/ho')