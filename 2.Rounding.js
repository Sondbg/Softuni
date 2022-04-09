function round(numb,precision){
    precision = precision > 15 ? 15 : precision;
    // if (precision>15){
    //     precision=15;
    // }
console.log(parseFloat(numb.toFixed(precision)));
}
round(3.141592653589793238462643383270000095,19)
