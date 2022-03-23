function matchName(input){
    let regEx= /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let token;
    let result=[];
    while((token=regEx.exec(input))!=null){
        result.push(token[0]);
    }
    console.log(result.join(' '));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")