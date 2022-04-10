function vacation(group,type,day){
let pricePerPerson=0;
let discount=1;
if (type=='Students'){
    if (group>=30){
        discount-=15/100;
    }
    switch (day) {
        case 'Friday': pricePerPerson=8.45;
            break;
        case 'Saturday': pricePerPerson=9.8;
            break;
        case 'Sunday': pricePerPerson=10.46;
            break;
    }
}else if (type=='Business'){
    if (group>=100){
        group-=10;
    }
        switch (day) {
            case 'Friday': pricePerPerson=10.9;
                break;
            case 'Saturday': pricePerPerson=15.6;
                break;
            case 'Sunday': pricePerPerson=16;
                break;
    }
}else if(type=='Regular'){
    if(group>=10 && group <=20){
discount-=5/100;
    }
    switch (day) {
        case 'Friday': pricePerPerson=15;
            break;
        case 'Saturday': pricePerPerson=20;
            break;
        case 'Sunday': pricePerPerson=22.5;
            break;
}
}
console.log(`Total price: ${(group*pricePerPerson*discount).toFixed(2)}`);
}
vacation(100,"Business","Sunday")
vacation(40,"Regular","Saturday")