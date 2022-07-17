const http=require('http');
const bl=require('bl')
const async=require('async');


const urls=process.argv.splice(2);

async.eachSeries(urls,(url,callback)=>
{
    http.get(url, response => {
                response.pipe(bl(function (err, data) {
                  if (err) {
                    return callback(err)
                  }
                  data = data.toString();
                  console.log(data);
                  callback();
                }));
              }) ;
});
// urls.forEach(url => {
//     http.get(url, function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
//           data = data.toString();
//           console.log(data);
//         }))
//       })
// });
//npm i async
/*
function printResults () {
    for (let i = 0; i < 3; i++) {
      console.log(results[i])
    }
  }

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
          printResults()
        }
      }))
    })
  }

  for (let i = 0; i < 3; i++) {
    httpGet(i)
  }
*/