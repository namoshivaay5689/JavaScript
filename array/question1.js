/*
For a given array with prices of 5 items -> [250,645,300,900,50].All items have an offer of 10% off on them . 
change the array to store final price after applying offer
*/
let item=[250,645,300,900,50];
let sum=0;
//overall discount

/*
for(let i=0;i<item.length;i++){
    sum += item[i];
}
let discount=sum*0.10;
console.log(discount);
*/

for(let i=0;i<item.length;i++){
    let offer=item[i]*0.10;
    item[i]=item[i]-offer;
}
console.log(item);