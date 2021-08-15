import {generateRandomNumber} from './generateRandomNumber.js';

const generateTreasureCoords = ({ width, height }, gap) => ({
    x: generateRandomNumber(width, gap),
    y: generateRandomNumber(height, gap)
}); 

export {generateTreasureCoords};