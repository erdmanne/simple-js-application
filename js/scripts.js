var repository = []
repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Charmander",
    height: 0.8,
    types: ["grass", "poison"],
  },
  {
    name: "Venusaur",
    height: 1.9,
    types: ["grass", "poison"],
  },
  {
    name: "Clefable",
    height: 0.4,
    types: ["fairy"],
  },
]
//loop for task 1.3 JS
for (items in repository) {
  document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br>');
  if (repository[items].height > 1) {
    document.write(repository[items].name + " (height: " + repository[items].height + "m) - Wow, that's big!<br><br>");
  } else {
    document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br><br>');
  }
}
