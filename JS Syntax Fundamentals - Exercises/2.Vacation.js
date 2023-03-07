function vacation(people, group, day) {
    let total;
    let discount = 1;
    let price = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.8,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.9,
            'Saturday': 15.6,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.5
        }
    }

    if (group == 'Students' && people >= 30) {
        discount = 0.85;
    } else if (group == 'Business' && people >= 100) {
        people -= 10;
    }
    else if (group == 'Regular' && people >= 10 && people <= 20) {
        discount = 0.95;
    }
    total = people * price[group][day] * discount;
    console.log(`Total price: ${total.toFixed(2)}`);
}


vacation(100, 'Business', 'Sunday')