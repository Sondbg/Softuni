function mathDates(input){
let regExp=/\b(?<day>\d{2})(?<check>[-.\/])(?<month>[A-Z][a-z]{2})\k<check>(?<year>\d{4})\b/g;
while ((token=regExp.exec(input))!=null) {
  let  days=token.groups['day'];
  let months=token.groups['month'];
  let years=token.groups['year'];
  console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);
}
}
mathDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")