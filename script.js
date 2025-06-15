const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const helpBtn = document.getElementById("help-button");
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
const helpContainer = document.getElementById("help-container");
const helpContainerContent = document.getElementById("help-container-content");

//  URL API
// All creatures: https://rpg-creature-api.freecodecamp.rocks/api/creatures
// One creature: https://rpg-creature-api.freecodecamp.rocks/api/creature/pyrolynx

const getCreatureStats = async () => {
  try {
    const creatureNameOrID = searchInput.value.toLowerCase();
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrID}`);
    const data = await res.json();
    console.log(data);
    updateUI(data);
  } catch {
    alert(`Creature not found, if you need help click the "?" button.`);
    searchInput.value = "";
    console.error(err);
  }
};

const getAllCreatures = async () => {
  try {
    const res = await fetch("https://rpg-creature-api.freecodecamp.rocks/api/creatures");
    const data = await res.json();
    console.log(data);
  } catch {
    console.error(err);
  }
}

const updateUI = (data) => {
  creatureEl.style.display = "block";
  nameEl.textContent = data.name.toUpperCase();
  idEl.textContent = ` #${data.id}`;
  weightEl.textContent = data.weight;
  heightEl.textContent = data.height;
  specialNameEl.textContent = data.special.name;
  specialDescEl.textContent = data.special.description;
  hpEl.textContent = data.stats[0].base_stat;
  attackEl.textContent = data.stats[1].base_stat;
  defenseEl.textContent = data.stats[2].base_stat;
  spAttackEl.textContent = data.stats[3].base_stat;
  spDefenseEl.textContent = data.stats[4].base_stat;
  speedEl.textContent = data.stats[5].base_stat;
  typesEl.innerHTML = data.types.map(type => `<p class="creature-type ${type.name}">${type.name.toUpperCase()}</p>`).join("");
}

const showHelpContainer = () => {
  helpContainer.classList.toggle("open");
  helpBtn.textContent = helpBtn.textContent === "?" ? "X" : "?";

  // Fill help container with content!!

}

searchBtn.addEventListener("click", getCreatureStats);
helpBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showHelpContainer();
});

window.addEventListener("click", (e) => {
  if (helpContainer.classList.contains("open") && !helpContainer.contains(e.target)) {
    helpContainer.classList.remove("open");
  }
})

