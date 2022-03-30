function solve(inputArr){
let regularList=[];
let VIPlist=[];
    while(inputArr[0]!='PARTY'){
let person=inputArr.shift();
if(Number(person[0])/1==Number(person[0])){
    VIPlist.push(person);
}else{
    regularList.push(person);
}
    }
inputArr.shift();
for (let guest of inputArr) {
    if(Number(guest[0])/1==Number(guest[0])){
        VIPlist.splice(VIPlist.indexOf(guest),1)
    }else{
        regularList.splice(regularList.indexOf(guest),1)
    }
}

console.log(VIPlist.length+regularList.length);
for (let person of VIPlist) {
    console.log(person);
}
for (let person of regularList) {
    console.log(person);
}
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'SVQXQCbc',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)