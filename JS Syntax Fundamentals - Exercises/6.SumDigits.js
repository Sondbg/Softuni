function sumDigits(input){
    let sum=0;
while(input){
    sum=Number(input%10)+sum;
    input=Math.floor(input/10);
}
    console.log(sum);
}
sumDigits(5)