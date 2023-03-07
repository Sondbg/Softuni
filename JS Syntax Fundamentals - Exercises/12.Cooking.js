function cooking(start, ...params) {
    start = Number(start);
    let result = start;

    for (let index = 0; index < params.length; index++) {
        let command = params[index];

        switch (command) {
            case 'chop':
                result = result / 2;
                break;
            case 'dice': result = Math.sqrt(result)
                break;
            case 'spice': result++
                break;
            case 'bake': result = result * 3;
                break;
            case 'fillet': result = result * 0.8;
                break
            default:
                break;
        }
console.log(result);
    }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')