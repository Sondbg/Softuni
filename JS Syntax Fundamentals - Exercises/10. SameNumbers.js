function sameNumber(input){
let sum=0;
let string=input.toString();
let temp=string[0];
let flag=true
for (let index = 0; index < string.length; index++) {
   if(string[index]!==temp){
    flag=false;
   };
    sum+=Number(string[index])
}
console.log(`${flag}\n${sum}`);
}

sameNumber(1234)