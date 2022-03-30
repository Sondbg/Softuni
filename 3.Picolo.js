function solve(inputArr){
let parkingLot= new Map();
for (let word of inputArr) {
    let [command, car]=word.split(", ")
    if(command=='IN'){
        parkingLot.set(car,1)
    }else{
        parkingLot.delete(car);
    }
}
let result=[]
for (let key of parkingLot.keys()) {
 result.push(key);
}
result.sort((a,b)=>a.localeCompare(b));
console.log(result.length!=0? result.join('\n'): 'Parking Lot is Empty');
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)