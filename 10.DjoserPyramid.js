function pyramid(size,increment){
let stone=0;
let marble=0;
let lapis=0;
let gold=0;
let height=1;
let step=1;
for (let a=size;a>0 ;a-=2){
    if(a<=2){
        gold=a*a*increment;
    }else{
stone += (a- 2)*(a-2)*increment;
if (step%5==0){
    lapis+=(a*4-4)*increment;
}else{
marble += (a*4 - 4)*increment;
}
step++;
}
}
height = step*increment;
console.log(`Stone required: ${Math.ceil(stone)} \nMarble required: ${Math.ceil(marble)} \nLapis Lazuli required: ${Math.ceil(lapis)} \nGold required: ${Math.ceil(gold)} \nFinal pyramid height: ${Math.floor(height)}`);
}
pyramid(23,0.5)