const hint = document.getElementById('hint');
const map = document.querySelector('[alt="treasure_map"]');

const hidTreasure = {
    X: Math.random(),
    Y: Math.random()
};

function hideTreasure (map) {
    console.dir(map);
}

hideTreasure(map);