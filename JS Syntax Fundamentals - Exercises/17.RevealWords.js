function reveal(string,template){
let replaceArr=string.split(', ');
let arrTemplate=template.split(' ');

for (let replace of replaceArr) {
    for (let word in arrTemplate) {
        if(arrTemplate[word].includes('*') && (replace.length==arrTemplate[word].length)){
            arrTemplate[word]=replace
        }
    }
}

console.log(arrTemplate.join(' '));
}

reveal('great, learning',
'softuni is ***** place for ******** new programming languages')