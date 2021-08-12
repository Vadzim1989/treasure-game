function getDistanceToTreasure ({x: cX, y: cY}, {x: tX, y: tY} ) { // rename arguments
    return Math.sqrt((cX - tX)**2 + (cY - tY)**2);
};

export {getDistanceToTreasure};