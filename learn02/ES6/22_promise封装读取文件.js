const fs = require('fs')

fs.readFile('/西游记.md',(err,data)=>{
    if (err) throw err;
    console.log(data);
})