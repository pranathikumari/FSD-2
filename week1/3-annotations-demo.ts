let movieTitle:string="Baahubali:The Beginning";
let releaseYear:number=2015;
let isBlockbuster:boolean=true;

function getMovieStatus(title:string,year:number):string{
    return `${title} was a massive hit released in ${year}.`;
}
let leadActors:string[]=["Prabhas","Rana","Anushka","Tamannah"];
const summary:string=getMovieStatus(movieTitle,releaseYear);
console.log(summary);
console.log(`Starring:${leadActors.join(",")}`);
console.log(`is it a blockbuster ? ${isBlockbuster ?"Yes,Jai Mahishmati":"No"}`);
