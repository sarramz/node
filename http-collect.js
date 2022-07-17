// const http=require('http');
// const url=process.argv[2];
// http.get(url,response=>{
    

//     let result="";
//     response.setEncoding('utf-8');


//     response.on('error',(err)=>{
//         console.error(err);
//     });

//     response.on('data', (data)=>{
//         result +=data;
//     });

//     response.on('end',()=>{
//         console.log(result.length);
//         console.log(result);
//     });
// });
//npm i bl
const http= require('http');
const url= process.argv[2];
const bl=require('bl');
http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }))
  })