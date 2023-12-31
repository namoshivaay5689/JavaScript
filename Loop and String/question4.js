/*Prompt the user to enter their full name . Generate a username for them based on the input. Start username with @,
 followed by their fullname  and ending with their full name length*/
  let fullName=prompt("Enter The Full Name !");
  let start="@";
  let end=fullName.length;

  let userName=start+fullName+end;
  console.log(userName);