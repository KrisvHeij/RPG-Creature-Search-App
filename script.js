const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureEl = document.querySelector(".creature-container");
const nameEl= document.getElementById("creature-name");
const idEl = document.getElementById("creature-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const specialNameEl = document.getElementById("special-name");
const specialDescEl = document.getElementById("special-description");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const spAttackEl = document.getElementById("special-attack");
const spDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

//  URL API
// All creatures: https://rpg-creature-api.freecodecamp.rocks/api/creatures
// One creature: https://rpg-creature-api.freecodecamp.rocks/api/creature/pyrolynx

const getCreature = async () => {
  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creatures`);
    const data = await res.json();
    console.log(data);
  } catch {
    console.error(err);
  }
};

// getCreature();