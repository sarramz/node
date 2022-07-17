const fs=require('fs');
//synchronous filesystem operation to read a file
// const x= fs.readFileSync('./file.txt','utf-8');
 //the number of newlines (\n)
// const lines=x.toString().split('\n').length
// console.log(x);
// console.log(lines); 

const x= fs.readFileSync(process.argv[2],'utf-8');
const res=x.split('\n').length-1;
console.log(res);