function solve(input){
    let objTown={};
    for (let town of input) {
        town=town.split(' | ');
    objTown['town']=town[0];
    objTown['latitude']=Number(town[1]).toFixed(2);
    objTown['longitude']=Number(town[2]).toFixed(2);
        console.log(objTown)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)