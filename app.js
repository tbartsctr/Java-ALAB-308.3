const PI = 3.1315;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxPlants = area / plantSpace;

let plants = 20;

function predictGrowth(weeks) {plants * Math.pow(2, weeks);
    const plantPercentage = (plants / maxPlants) * 100;
    if (plantPercentage > 80) {return "Prune Plants";}
    else if (plantPercentage <= 80 && plantPercentage >= 50); {return "Monitor";}
    else {return "Plant More";}



}
