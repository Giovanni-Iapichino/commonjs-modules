//# Importa la tua funzione da names.js
//# Importa la tua funzione da hobbies.js
//# Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const name = require("./names.js");
const hobby = require("./hobbies.js");

const registeredPerson = () => {
  const people = {
    fullName: name("Giovanni", "Iapichino"),
    hobbies: hobby("Calcio", "Anime", "Videogiochi"),
  };
  console.log(people);
};

registeredPerson();
