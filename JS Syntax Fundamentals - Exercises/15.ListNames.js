function listNames(arr){
arr.sort((a,b)=>{
    return a.localeCompare(b)
}).forEach((a,i)=>console.log(`${i+1}.${a}`));
}
listNames(["John", "Bob", "Christina", "Ema"])