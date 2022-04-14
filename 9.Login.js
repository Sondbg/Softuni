function login(input){
let name=input[0];
for (let index=1;index<=input.length;index++){
    let password=input[index];
let splitPass=password.split("");
let Reverse=splitPass.reverse();
 password=Reverse.join("");
 if (password===name){
     console.log(`User ${name} logged in.`);
     break;
 }else if(index!=4){
     console.log(`Incorrect password. Try again.`);
 }else if(index==4){
     console.log(`User ${name} blocked!`);
     break;
 }
}
}
//login(['Acer','login','go','let me in','recA'])
//login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['momo','omom'])