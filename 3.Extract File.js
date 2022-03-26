function pathFile(input){
let fileName=input.slice(input.lastIndexOf('\\')+1,input.lastIndexOf('.'));
let extension=input.slice(input.lastIndexOf('.')+1);
console.log(`File name: ${fileName}`);
console.log(`File extension: ${extension}`);
}
pathFile('C:\\Internal\\training-internal\\Template.pptx.hello')