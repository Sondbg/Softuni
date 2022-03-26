function solve(input){
let result=[];
let text=input.split(' ');
for (let word of text) {
    if(word.startsWith('#')&&word.length>1){
       let pass=true;
       word=word.replace('#',"")
        for (let token of word) {
            if(!((token.charCodeAt(0)>64 && token.charCodeAt(0)<91)||(token.charCodeAt(0)>96&&token.charCodeAt(0)<123))){
                pass=false;
            }
        }
     pass==true?result.push(word):'';
    }
}
result.forEach(a=>console.log(a))
}
solve('Nowadays everyone uses # to tag a #11special word in #socialMedia')

