function printNth(arr,number){
    let returnArr=[];
for (let index = 0; index < arr.length; index+=number) {
   returnArr.push(arr[index])
    
}
return returnArr;
}
printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2)