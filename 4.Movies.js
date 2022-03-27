function solve(inputArr){
let movieList=[];
class movie {
    constructor(name) {
        this.name=name;
    }
    checkInfo(){
        if(this.name!=undefined && this.date!=undefined && this.director!=undefined){
            return true;
        }else{
            return false;
        }
    }
}
for (let commandMovie of inputArr) {
    if(commandMovie.indexOf('addMovie')!=-1){
        commandMovie=commandMovie.split('addMovie ');
        let newMovie=new movie(commandMovie[1])
        movieList.push(newMovie);
    }else if(commandMovie.indexOf('directedBy')!=-1){
        commandMovie=commandMovie.split(' directedBy ');
             for (let i of movieList) {
               if(i['name']==commandMovie[0]){
                   i.director=commandMovie[1];
               }
              }
    }else if(commandMovie.indexOf('onDate')!=-1){
        commandMovie=commandMovie.split(' onDate ');
        for (let i of movieList) {
            if(i['name']==commandMovie[0]){
                i.date=commandMovie[1];
            }
           }
    }
}
for (let obj of movieList) {
    obj.checkInfo()? console.log(JSON.stringify(obj)):'';
}
}
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )
    