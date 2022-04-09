function distinctArr(arr){
for (let index = 0; index < arr.length; index++) {
    let n = arr[index];
    for (let i = index+1; i < arr.length; i++) {
        if(n==arr[i]){
            arr.splice(i,1);
            i--;
        }
    }
}
console.log(arr.join(' '));
}
distinctArr([1, 2, 2, 2, 3, 4, 2])