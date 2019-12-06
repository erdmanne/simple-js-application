
var repository = [
{name: 'Bulbasaur', height: 7, type:['grass', ' poison']},
{name: 'Charizard', height: 5, type:['fire', ' flying']},
{name: 'Butterfree', height: 3, type:['bug', ' flying']},
];


 /* Applied For Each Loop To Pokedex Array */
 repository.forEach(function(property) { /* Applied For Each Loop To Pokedex Array */
   document.write("<br>"+"Name: "+property.name + "  | Height: "+property.height+" | Type: "+property.type);
   if(property.height > 5){
      document.write("  (- Wow that is a big Pokemon!)")
 }
 document.write("<p>");
 });


/*loop for task 1.3 JS
for (items in repository) {
  document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br>');
  if (repository[items].height > 1) {
    document.write(repository[items].name + " (height: " + repository[items].height + "m) - Wow, that's big!<br><br>");
  } else {
    document.write(repository[items].name + ' (height: ' + repository[items].height + 'm)<br><br>');
  }
}

// further explantion: https://www.youtube.com/watch?v=W6NZfCO5SIk
let name = 'eva';
console.log (name);

function greet(name) {
  console.log ('hello ' + name);
}
greet ('Eva');
*/
