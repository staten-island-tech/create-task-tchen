//Starter money
//Click button to roll
//If has animal -- Passive money
//If no animal (getting a 0) -- No money income D:
//Create a reset/give up button

const animalFoodPyramid = [
  { name: "Zooplankton" },
  { name: "Krill" },
  { name: "Insects" },
  { name: "Snails" },
  { name: "Small Fish" },
  { name: "Frogs" },
  { name: "Mice" },
  { name: "Snakes" },
  { name: "Large Fish" },
  { name: "Eagle" },
];

const btn = document.querySelector(".btn");
let money = 2000;
btn.addEventListener("click", getRandomAnimal);
const animalContainer = document.querySelector(".animals");

function getRandomAnimal() {
  let randomNumber = Math.floor(Math.random() * 1100);
  let currentAnimal = "";
  const colorBox = document.querySelector(".rarity");

  if (money >= 200) {
    money -= 200;
    if (randomNumber === 1) {
      currentAnimal = animalFoodPyramid[9].name;
      money += 5000000;
    } else if (randomNumber >= 2 && randomNumber <= 3) {
      currentAnimal = animalFoodPyramid[8].name;
      money += 14500;
    } else if (randomNumber >= 4 && randomNumber <= 6) {
      currentAnimal = animalFoodPyramid[7].name;
      money += 14000;
    } else if (randomNumber >= 7 && randomNumber <= 12) {
      currentAnimal = animalFoodPyramid[6].name;
      money += 13500;
    } else if (randomNumber >= 13 && randomNumber <= 22) {
      currentAnimal = animalFoodPyramid[5].name;
      money += 13000;
    } else if (randomNumber >= 23 && randomNumber <= 32) {
      currentAnimal = animalFoodPyramid[4].name;
      money += 650;
    } else if (randomNumber >= 33 && randomNumber <= 128) {
      currentAnimal = animalFoodPyramid[3].name;
      money += 650;
    } else if (randomNumber >= 129 && randomNumber <= 256) {
      currentAnimal = animalFoodPyramid[2].name;
      money += 650;
    } else if (randomNumber >= 257 && randomNumber <= 512) {
      currentAnimal = animalFoodPyramid[1].name;
      money += 650;
    } else if (randomNumber >= 513 && randomNumber <= 1024) {
      currentAnimal = animalFoodPyramid[0].name;
      money += 650;
    } else {
      currentAnimal = "";
    }
    if (
      currentAnimal === animalFoodPyramid[0].name ||
      currentAnimal === animalFoodPyramid[1].name ||
      currentAnimal === animalFoodPyramid[2].name ||
      currentAnimal === animalFoodPyramid[3].name
    ) {
      colorBox.style.backgroundColor = "burlywood";
    } else if (
      currentAnimal === animalFoodPyramid[4].name ||
      currentAnimal === animalFoodPyramid[5].name ||
      currentAnimal === animalFoodPyramid[6].name
    ) {
      colorBox.style.backgroundColor = "cyan";
    } else if (
      currentAnimal === animalFoodPyramid[7].name ||
      currentAnimal === animalFoodPyramid[8].name
    ) {
      colorBox.style.backgroundColor = "purple";
    } else if (currentAnimal === animalFoodPyramid[9].name) {
      colorBox.style.backgroundColor = "gold";
    }
  } else {
    console.log("Not enough money left --- Yikes");
  }
  if (currentAnimal !== "") {
    console.log(`You have ${currentAnimal}.`);
  } else {
    console.log("No animal");
  }
  addToInventory(currentAnimal);

  console.log(`Money left: $${money}`);
}

function getAnimals(animals) {
  animalContainer.innerHTML = "";
  animals.forEach((animal) => {
    animalContainer.insertAdjacentHTML(
      "afterbegin",
      `<div>
        <p>${animal.name}</p>
      </div>`,
    );
  });
}

getAnimals(animalFoodPyramid);
let inventory = [];
function addToInventory(newAnimal) {
  inventory.push(newAnimal);
  for (let i = 0; i < inventory.length; i++) {
    if (newAnimal !== "") {
      money -= 10;
    }
  }
  console.log("Inventory: ", inventory);
}
