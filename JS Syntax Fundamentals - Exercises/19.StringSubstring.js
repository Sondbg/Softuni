function substringString(word,text){
let temp=text.toUpperCase().split(' ');
let tempWord=word.toUpperCase();

for (let i = 0; i < temp.length; i++) {
   if(temp[i]===tempWord){
    console.log(word)
    return
   }
    
}
console.log(`${word} not found!`);
}
substringString('javascript',
'JavaScript is the best programming language')