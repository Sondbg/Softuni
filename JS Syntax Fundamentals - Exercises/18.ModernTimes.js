function modernTimes(string){
let stringArr=string.split(' ');
let regEx= new RegExp('\#([a-z]+)');
for (let word of stringArr) {
    if(word[0]=="#" && word.length>1){
regEx.test(word)?console.log(word.substring(1)):'';

    }
}

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')