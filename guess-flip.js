
import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const argv = require('minimist')(process.argv.slice(2));

const call = argv.call;
console.log(flipACoin(call));
