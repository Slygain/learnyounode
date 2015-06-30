var fs = require('fs');

//notes: As it's being read in as utf8 if appears to type cast it to a string
var fileContents = fs.readFileSync(process.argv[2], 'utf8');
//normally we'd need to use a .toString() to do the split, because of the type cast
// it's not needed
var numberOfLines = fileContents.split('\n').length - 1;

console.log(numberOfLines);