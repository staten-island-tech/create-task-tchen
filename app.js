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
const rarityTable = [
  { min: 1, max: 1, index: 9, reward: 5000000 },
  { min: 2, max: 3, index: 8, reward: 14500 },
  { min: 4, max: 6, index: 7, reward: 14000 },
  { min: 7, max: 12, index: 6, reward: 13500 },
  { min: 13, max: 22, index: 5, reward: 13000 },
  { min: 23, max: 32, index: 4, reward: 650 },
  { min: 33, max: 128, index: 3, reward: 650 },
  { min: 129, max: 256, index: 2, reward: 650 },
  { min: 257, max: 512, index: 1, reward: 650 },
  { min: 513, max: 1024, index: 0, reward: 650 },
];

const btn = document.querySelector(".btn");
let money = 2000;
btn.addEventListener("click", getRandomAnimal);
const animalContainer = document.querySelector(".animals");

function getColor(index) {
  if (index <= 3) return "burlywood";
  if (index <= 6) return "cyan";
  if (index <= 8) return "purple";
  if (index === 9) return "gold";
}
function getRandomAnimal() {
  let randomNumber = Math.floor(Math.random() * 1024) + 1;
  let currentAnimal = "";
  const colorBox = document.querySelector(".rarity");

  if (money >= 200) {
    money -= 200;
    let selectedIndex = null;

    for (let i = 0; i < rarityTable.length; i++) {
      const tier = rarityTable[i];

      if (randomNumber >= tier.min && randomNumber <= tier.max) {
        if (tier.reward > 10000) {
          console.log("High rarity animal!");
        }
        currentAnimal = animalFoodPyramid[tier.index].name;
        money += tier.reward;
        selectedIndex = tier.index;
        break;
      }
    }
    if (selectedIndex !== null) {
      const color = getColor(selectedIndex);
      colorBox.style.backgroundColor = color;
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
    if (inventory[i] === newAnimal) {
      console.log("Duplicate animal!");
    }
    if (newAnimal !== "") {
      money -= 10;
    }
  }
  console.log("Inventory: ", inventory);
}
