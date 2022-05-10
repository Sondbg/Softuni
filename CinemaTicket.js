function cinemaTicket(input){
let day=input[0];
let price=0;
switch (day){
    case 'Saturday': case 'Sunday': 
price=16; break;
case 'Wednesday': case 'Thursday':
    price=14; break;
    default : price=12;break;
}
console.log(`${price}`)
}
cinemaTicket(["Sunday"])