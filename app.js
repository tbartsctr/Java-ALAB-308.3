const PI = 3.1315;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxPlants = area / plantSpace;

let plants = 10;

function predictGrowth(weeks) {plants * Math.pow(2, weeks);
   const plantPercentage = (plants / maxPlants) * 100;
    if (plantPercentage > 80) {return "Prune Plants";}
    else if (plantPercentage <= 80 && plantPercentage >= 50); {return "Monitor";}
    else {return "Plant More";}



}

let plants = 100;

function predictGrowth(weeks, plants) {
    let plantCount = plants * Math.pow(2, weeks);
    const requiredArea = plantCount * plantSpace;
    const radius = Math.sqrt(requiredArea / PI);
    return { plantCount, requiredArea, radius};
}

