import {generateTreasureCoords} from './utils/generateTreasureCoords.js';
import {getDistanceToTreasure} from './utils/getDistanceToTreasure.js';


const hint = document.getElementById('hint');
const treasureMap = document.querySelector('[alt="treasure_map"]');


console.log(getDistanceToTreasure({x: 2, y: 3}, {x: 5, y: 6}));
console.log(generateTreasureCoords({width:450, heigth:500}, 20));