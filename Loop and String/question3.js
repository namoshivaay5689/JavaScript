//Create a game where you start with any random game number . 
//Ask the user to keep guessing the game number until the user enter correct value.

let corrNum=8;
let num=prompt("Enter the number !");

if(corrNum==num){
    console.log("The guessed number is correct");
}
else{
    console.log("Entered the number is wrong");
}