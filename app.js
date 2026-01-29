const animalFoodPyramid =
  //Starter money
  //Click button to roll
  //If has animal -- Passive money
  //If no animal (getting a 0) -- No money income D:
  //Create a reset/give up button
  [
    { name: "Zooplankton" }, // 513 -1024
    { name: "Krill" }, // 257 -512
    { name: "Insects" }, // 129 -256
    { name: "Snails" }, // 33-128
    { name: "Small Fish" }, // 23 - 32
    { name: "Frogs" }, // 13 - 22
    { name: "Mice" }, // 7-12
    { name: "Snakes" }, //4,5,6
    { name: "Large Fish" }, //2,3
    { name: "Eagle" }, //1
  ];

let money = 200;
function getRandomAnimal() {
  let randomNumber = Math.floor(Math.random() * 1010);
  let currentAnimal = "";
  if (money >= 200) {
    money -= 200;
    if (randomNumber === 1) {
      currentAnimal = animalFoodPyramid[9].name;
    } else if (randomNumber >= 2 && randomNumber <= 3) {
      currentAnimal = animalFoodPyramid[8].name;
    } else if (randomNumber >= 4 && randomNumber <= 6) {
      currentAnimal = animalFoodPyramid[7].name;
    } else if (randomNumber >= 7 && randomNumber <= 12) {
      currentAnimal = animalFoodPyramid[6].name;
    } else if (randomNumber >= 13 && randomNumber <= 22) {
      currentAnimal = animalFoodPyramid[5].name;
    } else if (randomNumber >= 23 && randomNumber <= 32) {
      currentAnimal = animalFoodPyramid[4].name;
    } else if (randomNumber >= 33 && randomNumber <= 128) {
      currentAnimal = animalFoodPyramid[3].name;
    } else if (randomNumber >= 129 && randomNumber <= 256) {
      currentAnimal = animalFoodPyramid[2].name;
    } else if (randomNumber >= 257 && randomNumber <= 512) {
      currentAnimal = animalFoodPyramid[1].name;
    } else if (randomNumber >= 513 && randomNumber <= 1024) {
      currentAnimal = animalFoodPyramid[0].name;
    } else {
      currentAnimal = "";
    }
  } else {
    console.log("Not enough money left --- Yikes");
  }
  if (currentAnimal !== "") {
    console.log(`You have ${currentAnimal}`);
  } else {
    console.log("No animal");
  }
}
getRandomAnimal();
