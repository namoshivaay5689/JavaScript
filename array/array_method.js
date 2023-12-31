/*
Create an array to store companies -> "Bloomberg","Microsoft","uber","Google","IBM","Netflix"
    a.Remove the first company from the array
    b.Remove Uber & Add Ola in its place
    c.Add Amazon at the end
*/

let companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
//remove uber and add ola
companies.splice(2,1,"Ola");
console.log(companies);
//remove the first companies
companies.shift();
console.log(companies);
//add amazon at the end
companies.push("Amazon");
console.log(companies);