function solve(inputArr){
let objWords={}
let words= inputArr.shift().split(' ');
for (let word of words) {
    objWords[word]=0;
}
for (let word of inputArr) {
    if(objWords.hasOwnProperty(word)){
        objWords[word]++
    }
}
let sortArr=Object.entries(objWords);
sortArr.sort((a,b)=>b[1]-a[1]);
for (let word of sortArr) {
    console.log(`${word[0]} - ${word[1]}`);
}
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )