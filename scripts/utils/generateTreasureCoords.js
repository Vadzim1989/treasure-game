import {generateRandomNumber} from './generateRandomNumber.js';

const generateTreasureCoords = ({width, heigth}, gap) => ({
    x: generateRandomNumber(width,gap),
    y: generateRandomNumber(heigth,gap)
});

export {generateTreasureCoords};