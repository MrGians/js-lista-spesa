// TRACCIA
// Creato un Array contenente una Lista della Spesa,
// Inserire tanti <li> nel DOM quanti gli elementi dell'Array,
// Tramite un ciclo While.

// Array contenente gli elementi da stampare sul DOM
const shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"]

// Variabili Globali DOM
const listItemContainer = document.getElementById("list");

// Creo variabile d'appoggio per il Ciclo
let i = 0;

while (i < shoppingList.length) {

  // Creo l'elemento <li>
  const listItem = document.createElement("li");
  // Aggiungo dentro <li> gli elementi dell'array tramite [i]
  listItem.innerText = shoppingList[i];
  console.log(listItem);

  // Inserisco l'elemento appena creato nel DOM dentro #List
  listItemContainer.append(listItem);

  // Incremento variabile d'appoggio
  i++
}



/* METODO CON CICLO FOR


// Creo tanti <li> quanti gli elementi dell'array
for (let i = 0; i < shoppingList.length; i++) {

  // Creo l'elemento <li>
  const listItem = document.createElement("li");
  // Aggiungo dentro <li> gli elementi dell'array tramite [i]
  listItem.innerText = shoppingList[i];
  console.log(listItem)

  // Inserisco l'elemento appena creato nel DOM dentro #List
  listItemContainer.append(listItem);
}


*/



