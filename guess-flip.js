
import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

// if(process.argv.length < 3){
//     console.log("Error: invalid input.\nUsage: node guess-flip --call=[heads|tails]");
// } else {
    try{
        const require = createRequire(import.meta.url);
        const argv = require('minimist')(process.argv.slice(2));
        const call = argv.call;
        console.log(flipACoin(call));
    } catch (e) {
        console.log(e);
        console.log("Usage: node guess-flip --call=[heads|tails]")
    }
// }