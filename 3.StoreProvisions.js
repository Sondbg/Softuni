function solve(currentStockArray,productsOrderedArray){
    let store={};
for (let index = 0; index < currentStockArray.length; index+=2) {
    store[currentStockArray[index]]=Number(currentStockArray[index+1]);
}
    for (let index = 0; index < productsOrderedArray.length; index+=2) {
    if (!store.hasOwnProperty(productsOrderedArray[index])){
        store[productsOrderedArray[index]]=Number(productsOrderedArray[index+1]);
    }else{
        store[productsOrderedArray[index]]+=Number(productsOrderedArray[index+1]);
    }
    }

for (let key of Object.keys(store)) {
    console.log(key+' -> '+store[key]);
}
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ])
        