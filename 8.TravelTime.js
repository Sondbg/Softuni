function solve(inputArr){
let travelOffers= {};
for (let info of inputArr) {
    let [country, town, cost]= info.split(' > ');
    if(!travelOffers.hasOwnProperty(country)){
        travelOffers[country]=new Map();
    }
    if(travelOffers[country].has(town)){
        travelOffers[country].get(town)>cost? travelOffers[country].set(town,cost):'';
    }else{
        travelOffers[country].set(town,cost);
    }
}
let sorted=Object.entries(travelOffers);
sorted.sort((a,b)=>a[0].localeCompare(b[0]));
for (let [key, map] of sorted) {
    let print='';
    let arrayMap=Array.from(map.entries());
    arrayMap.sort((a,b)=>a[1]-b[1]);
    for (let [city, cost] of arrayMap) {
        print+=city+' -> '+cost+' ';
    }
    console.log(`${key} -> ${print}`);
}
}
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
    )