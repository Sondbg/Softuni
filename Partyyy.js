function sadParty(arrGuests){
    let resultList=[];
for (let index = 0; index < arrGuests.length; index++) {
    let command=arrGuests[index].split(' ');
    let guest = command[0];
    if(command.length>3){
        if(checkList(guest)){
            resultList.splice(resultList.indexOf(guest),1)
        }else{
           console.log(`${guest} is not in the list!`);
        }
    }else{
        checkList(guest)? console.log(`${guest} is already in the list!`):resultList.push(guest);
    }
}
function checkList(name){
    for (let i = 0; i < resultList.length; i++) {
     if(name==resultList[i]){
         return true
     }
    }
    return false;
}
resultList=resultList.join(' \n ');
console.log(resultList)
}
// sadParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
// )
sadParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)