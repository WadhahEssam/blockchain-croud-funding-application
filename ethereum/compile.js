const solc = require('solc');
const path = require('path');
const fs = require('fs-extra'); // this is the new library that we installed which is an improved fs module

const buildPath = path.resolve(__dirname, 'build'); 

// deletes the build folder
// from what i got in the documentation that the sync indicates 
// that you are not waiting for a call back for this function 
// so most of the fs extra functions have a sync version of them
fs.removeSync(buildPath);

// * the contract file name is the only thing that i will need to change in future
const contractPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

const source = fs.readFileSync(contractPath, 'utf8');

// not the output compiler will have to objects, one for  
// compiling campaign and anther for campaign factory
const output = solc.compile(source,1).contracts; 

// ensure if a directory exists and if it is not 
// it will create it, 
fs.mkdirsSync(buildPath);

// close to foreach loop that will loop throw the elements of the output object
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.substring(1,contract.length) + '.json'),
    output[contract], 
  );
}