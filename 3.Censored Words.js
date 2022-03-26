function solve(text,wordToReplace){
let result=text.replace(wordToReplace,'*'.repeat(wordToReplace.length));
while(result.includes(wordToReplace)){
    result=result.replace(wordToReplace,'*'.repeat(wordToReplace.length));
}
console.log(result);
}
solve('A small sentence small with some words', 'small')
solve('Find the hidden word', 'hidden')