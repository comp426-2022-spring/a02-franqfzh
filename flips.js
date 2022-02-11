import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

if(process.argv.length < 3){
    console.log("Error: no input.\nUsage: node flips.js --number=#ofFlips");
} else {
    const require = createRequire(import.meta.url);
    const argv = require('minimist')(process.argv.slice(2));

    const number = argv.number

    // console.log(number);
    var flips = coinFlips(number)
    console.log(flips);
    console.log(countFlips(flips));
}