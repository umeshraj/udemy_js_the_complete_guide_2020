const ages = [30, 12, 29];

ages.push(48); //

const namePopularity = [
  { userName: "max", usages: 5 },
  { userName: "manu", usages: 9 }
];

const manuUsages = namePopularity.find(pers => pers.userName === "manu").usages;
console.log(manuUsages);

const nameMap = {
  max: 5,
  manu: 9
};

const manuUsages2 = nameMap["manu"];
console.log(manuUsages2);

// JS has built-in map
