function solve(inputArr){
 let heroList=[];
 for (let heroInfo of inputArr) {
    heroInfo=heroInfo.split(' / ');
    let hero={};
    hero.name=heroInfo[0];
    hero.level=Number(heroInfo[1]);
    hero.items=heroInfo[2];
    heroList.push(hero);
 }
let temp=heroList.sort((a,b)=>a.level-b.level);
for (let info of temp) {
    console.log(`Hero: ${info.name}\nlevel => ${info.level}\nitems => ${info.items}`);
}
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

//     Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}
