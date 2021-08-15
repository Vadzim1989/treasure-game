import { hints } from '../constants/hints.js';
import {getDistanceToTreasure} from './getDistanceToTreasure.js';
import { generateTreasureCoords } from './generateTreasureCoords.js'

const hint = document.getElementById('hint');
const treasureMap = document.querySelector('[alt="map"]');


let treasureCoords = generateTreasureCoords(treasureMap, 50);


function startNewGame () {
    treasureCoords =  generateTreasureCoords(treasureMap, 50);
    document.getElementsByClassName('popup')[0].remove();
    treasureMap.addEventListener('click', mapClickHandler);
}

export function mapClickHandler ({offsetX, offsetY}) {
    const userClickCoords = {
        x: offsetX,
        y: offsetY
    };   
    
    generateHint(
        getDistanceToTreasure(userClickCoords, treasureCoords),
        hint
    );
};

function removePreviousClass (anchor) {
    hints.forEach((cls) => {
        if (anchor.classList.contains(cls)) {
            anchor.classList.remove(cls);
        }
    });
}

function makeHint (hintName, anchor) {
    anchor.classList.add(hintName);
    anchor.textContent = hintName.toUpperCase();
}

function openPopUp () {
    const mapWrapper = document.getElementById('map_wrapper');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    console.log(popup.style);
    popup.style.left = treasureCoords.x + 'px';
    popup.style.top = treasureCoords.y + 'px';

    const btnStartNew = document.createElement('button');
    btnStartNew.textContent = 'start new game';
    btnStartNew.addEventListener('click', startNewGame);
    btnStartNew.classList.add('start');

    const winMessage = document.createElement('span');
    winMessage.textContent = 'YOU WON!';

    popup.append(winMessage);
    popup.append(btnStartNew);
    mapWrapper.append(popup);
}

function endGame () {
    treasureMap.removeEventListener('click', mapClickHandler);
    openPopUp();
}

export function generateHint (distance, anchor) {
    removePreviousClass(anchor);

    if (distance < 30) {
        makeHint('hot', anchor);
        endGame();
    } else if (distance < 60) {
        makeHint('warm', anchor);
    } else if (distance < 100) {
        makeHint('medium', anchor);
    } else if (distance < 140) {
        makeHint('cold', anchor);
    } else {
        makeHint('winter', anchor);
    }
}
