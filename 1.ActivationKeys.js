function solve(inputArr){
let activationKey=inputArr.shift();
let functionsArr={Contains,Flip,Slice};
let infoInput=inputArr.shift().split('>>>');
let command=infoInput.shift();
while (command!="Generate") {
   let p1=infoInput[0];
   let p2=infoInput[1];
   let p3=infoInput[2];
   functionsArr[command](p1,p2,p3);
    infoInput=inputArr.shift().split(">>>");
    command=infoInput.shift()
}

function Contains(string){
    if (activationKey.includes(string)){
        console.log(`${activationKey} contains ${string}`);
        return
    }
    console.log(`Substring not found!`);
}
function Flip(stringCase,start,end){
    let tempStart=activationKey.slice(0,start);
    let temp=activationKey.slice(start,end);
    let tempEnd=activationKey.slice(end,);
    if(stringCase=='Upper'){
        temp=temp.toUpperCase();
    }else{
        temp=temp.toLowerCase();
    }
    activationKey=tempStart+temp+tempEnd;
    console.log(activationKey);
    return;
}
function Slice(start,end) {
    let tempStart=activationKey.slice(0,start);
    let tempEnd=activationKey.slice(end,);
    activationKey=tempStart+tempEnd;
    console.log(activationKey);
    return
}
console.log(`Your activation key is: ${activationKey}`);
}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])