//console.log(process.argv[2])//1
//console.log(process.argv.splice(2))//['1','2','3']

/*
var sum=0
for (let i = 2; i < process.argv.length; i++) {
    sum=sum+Number(process.argv[i]);  
}
console.log(sum);
*/


const numbers=process.argv.splice(2);
var sum=0;
for (let index = 0; index < numbers.length; index++) {
    sum=sum+Number(numbers[index]);
    
}
console.log(sum);
