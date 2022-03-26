function solve(words,text){
let wordsArr=words.split(', ');
let arrText=text.split(" ");
for (let word of wordsArr) {
    for (let token in arrText) {
        if(arrText[token].includes('*') && (word.length==arrText[token].length)){
            arrText[token]=word;
        }
    }
}
console.log(arrText.join(' '))
}
solve('great',
'softuni is ***** place for learning new programming languages'
)
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)