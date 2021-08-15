function getDistanceToTreasure ({x: cX, y: cY}, {x: tX, y: tY}) {
    return Math.sqrt((cX - tX)**2 + (cY - tY)**2 );  
}

 export {getDistanceToTreasure};