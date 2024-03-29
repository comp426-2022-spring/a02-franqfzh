import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';



const require = createRequire(import.meta.url);
const argv = require('minimist')(process.argv.slice(2));
const number = argv.number
// if (Number.isInteger(number)){
//     var flips = coinFlips(number)
//     console.log(flips);
//     console.log(countFlips(flips));
    
// } else {
//     var oneFlip = coinFlips(1);
//     if (oneFlip == 'tails') {
//         console.log({tails: 1});
//     } else {
//         console.log({heads: 1});
//     }
// }

if (isNaN(number)) {
    var oneFlip = coinFlips(1);
    if (oneFlip == 'tails') {
        console.log([ "tails" ]);
        console.log({tails: 1});
    } else {
        console.log([ "heads" ]);
        console.log({heads: 1});
    }
} else {
    var flips = coinFlips(number)
    console.log(flips);
    console.log(countFlips(flips));
}
