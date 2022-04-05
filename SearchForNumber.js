function searchNumber(arr1,arr2){
let number=arr2[0];
let deleteNumbers=arr2[1];
let searchNumber=arr2[2];
let newArr=arr1.slice(0,number).splice(0,deleteNumbers);
console.log(newArr);

}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )