function solveRace(inputArr){
let racers=inputArr.shift().split(', ');
let result={}
racers.forEach(a=>result[a]=0);

while (inputArr[0]!='end of race'){
    let info=inputArr.shift();
    let name=info.match(/[a-zA-Z]+/g).join('')
    if(result.hasOwnProperty(name)){
        result[name]+=info.match(/\d/g).map(Number).reduce((a,b)=>a+b)
    }
}
let print=Object.keys(result).sort((a,b)=>result[b]-result[b])
console.log(`1st place: ${print[0]}\n2nd place: ${print[1]}\n3rd place: ${print[2]}`);
}
solveRace(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)