function leap(year){

((year % 4==0 && year % 100!=0) || year % 400==0) ? console.log('yes'): console.log('no');
}
leap(2003)