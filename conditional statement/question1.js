//get user to input a number using prompt("Enter a number :").Check if the number is multiple of 5 or not

let num=prompt("Enter the number :");
if(num%5===0){
    console.log(num,"is divisible by 5");
}
else{
    console.log(num,"is not divisible by 5");
}