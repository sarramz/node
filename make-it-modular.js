const myModule =require('./mymodule');
const directory =process.argv[2];
const extention =process.argv[3];

myModule(directory,extention,(err,filteredlist)=>{
    if (err) {
        return console.error(err);
    }
    filteredlist.forEach(file => {
        console.log(file);
    });
})