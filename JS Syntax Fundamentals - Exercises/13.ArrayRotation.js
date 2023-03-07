function rotation(arr,rotation){
    for (let i = 0; i < rotation; i++) {
       arr.push(arr.shift())
        
    }
    console.log(arr.join(' '));
}
rotation([51, 47, 32, 61, 21], 2)