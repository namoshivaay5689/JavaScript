//write a code which can give grade to students according to their scores
let mark=prompt("Enter the marks:");
let Grade;
if(mark<=100 && mark>=80){
    Grade="A";
}
else if(mark<=79 && mark>=70){
    Grade="B";
}
else if(mark<=69 && mark>=60){
    Grade="C";
}
else if(mark<=59 && mark>=50){
    Grade="D";
}
else{
    Grade="F";
}
console.log(Grade);