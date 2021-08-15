const generateRandomNumber = (size, gap) => Math.floor(Math.random() * (size - (gap*2))) + gap;

export {generateRandomNumber};
