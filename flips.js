import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';



const require = createRequire(import.meta.url);
const argv = require('minimist')(process.argv.slice(2));
const number = argv.number
if (Number.isInteger(number)){
    console.log(number)
    var flips = coinFlips(number)
    console.log(flips);
    console.log(countFlips(flips));
    
} else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --number=#");
}
