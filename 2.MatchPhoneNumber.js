function match(input){
  let regExp=/\+359(?<space> |-)(2)\k<space>\d{3}\k<space>\d{4}\b/g;
  let result=[]
  while(( token=regExp.exec(input))!=null){
result.push(token[0]);
  }
   console.log(result.join(', '));
}
match("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")