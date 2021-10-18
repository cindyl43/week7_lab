/*** Object Constructors ***/

function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A panda”;
  this.image = “panda.jpg”;
}

function Zebra(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A zebra”;
  this.image = “zebra.jpg”;
}


function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A Bengal Tiger”;
  this.image = “tiger.jpg”;
}

/*** Global Variables ***/
let animals = [new Panda(), new Zebra(), new Tiger()];
let names = ["Oslo", "Berlin", "Tokyo", "Paris", "New York"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generate a random age between 0-7
function generateRandomAge() {
  return getRandomIndex(5)
}

// generate a random name
function generateRandomName() {
  let randomIdx = getRandomIndex (names.length);
  return names[randomIdx]
}

// generate a random animal
function generateRandomAnimal() {
  let randomIdx = getRandomIndex (animals.length);
  let randomAnimals = animals[randomIdx]
  if (randomAnimal instanceof Panda)
  {
    return new Panda (generateRandomName(), generateRandomAge ());
  }
  else if (randomAnimal instanceof Zebra)
  {
    return new Zebra (generateRandomName(), generateRandomAge ());
  }
  else if (randomAnimal instanceof Tiger)
  {
    return new Tiger (generateRandomName(), generateRandomAge ());
  }
  {
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}
