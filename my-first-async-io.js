const fs=require('fs');



// fs.readFile('./file.txt','utf-8',(err,data)=>{
//     if (err) return console.log(err)
//     var lines= data.split('\n').length;
//     //console.log(x)
//     console.log(lines)
// });

var file= process.argv[2]

fs.readFile(file,'utf-8',(err,data)=>{
    if (err) return console.log(err)
    var lines= data.split('\n').length-1;
    //console.log(x)
    console.log(lines)
});
