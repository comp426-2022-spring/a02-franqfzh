import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";


var argv = process.argv.slice(2);

var number = coinFlips(argv)
console.log(number);
console.log(countFlips(number));
