const animalFoodPyramid = [
  //Starter money
  //Click button to roll
  //If has animal -- Passive money
  //If no animal (getting a 0) -- No money income D:
  //Create a reset/give up button
  [
    "Zooplankton", // 513 -1024
    "Krill", // 257 -512
    "Insects", // 129 -256
    "Snails", // 33-128
    "Small Fish", // 23 - 32
    "Frogs", // 13 - 22
    "Mice", // 7-12
    "Snakes", //4,5,6
    "Large Fish", //2,3
    "Eagle", //1
  ],
];

function getRandomNumber() {
  let money = 200;
  let randomNumber = Math.floor(Math.random() * 1024);
  let currentAnimal = "";
  while (money >= 200) {
    if (randomNumber === 1) {
      currentAnimal = animalFoodPyramid[0][9];
    } else if (randomNumber >= 2 && randomNumber <= 3) {
      currentAnimal = animalFoodPyramid[0][8];
    } else if (randomNumber >= 4 && randomNumber <= 6) {
      currentAnimal = animalFoodPyramid[0][7];
    } else if (randomNumber >= 7 && randomNumber <= 12) {
      currentAnimal = animalFoodPyramid[0][6];
    } else if (randomNumber >= 13 && randomNumber <= 22) {
      currentAnimal = animalFoodPyramid[0][5];
    } else if (randomNumber >= 23 && randomNumber <= 32) {
      currentAnimal = animalFoodPyramid[0][4];
    } else if (randomNumber >= 33 && randomNumber <= 128) {
      currentAnimal = animalFoodPyramid[0][3];
    } else if (randomNumber >= 129 && randomNumber <= 256) {
      currentAnimal = animalFoodPyramid[0][2];
    } else if (randomNumber >= 257 && randomNumber <= 512) {
      currentAnimal = animalFoodPyramid[0][1];
    } else if (randomNumber >= 513 && randomNumber <= 1024) {
      currentAnimal = animalFoodPyramid[0][0];
    }
    return currentAnimal;
  }
  if (money < 200) {
    console.log("No money");
  }
}
getRandomNumber();
