const PI = 3.1315;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxPlants = area / plantSpace;

let plants = 100;

function predictGrowth(weeks, plants) {
    let plantCount = plants * Math.pow(2, weeks);
    const requiredArea = plantCount * plantSpace;
    const radius = Math.sqrt(requiredArea / PI);
    return { plantCount, requiredArea, radius};
}




