let fs  = require('fs')
let readFile = fs.createReadStream("README.md")
//let writeFile = fs.createWriteStream("README_COPY.md")
let writeFile = fs.createWriteStream("README_COPY.md")
readFile.pipe(writeFile)