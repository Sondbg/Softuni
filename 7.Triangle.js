function triangle(number){
    for (let a=1; a<=number;a++){
let PrintTriangle='';
        for(let i=1;i<=a;i++){
            PrintTriangle+=a;
            if(i<a){
                PrintTriangle+=' ';
            }
        }
        console.log(PrintTriangle);
    }
}
triangle(7)