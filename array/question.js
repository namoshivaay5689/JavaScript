//For a given array with marks of student [85,97,44,37,76,60].Find the average marks of the entire class.

let marks=[85,97,44,37,76,60];
let num=marks.length;
let sum=0;
for(let i=0;i<num;i++){
    sum +=marks[i];
}
let avg=sum/num;
console.log(avg);