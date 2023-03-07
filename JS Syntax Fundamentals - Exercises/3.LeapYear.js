function leapYear(year){
    let output='no';

    if(year%400==0 || (year%4==0 && year%100!=0)){
        output='yes'
    }
console.log(output);
}

leapYear(1984)