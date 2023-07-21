console.log("Js ok !!!!!!!!!!!!!!!");

const myContainer = document.getElementById("contenitore");
let scriviValore;

for (let i = 1; i <= 100; i++) {
  //   credo un elemento nuovo chiamato "myBox" che avrà come tag--> div
  const myCard = document.createElement("div");
  const myBox = document.createElement("div");

  scriviValore = i;
  myCard.classList.add("cardx");
  myBox.classList.add("box");

  if (i % 3 == 0 && i % 5 == 0) {
    scriviValore = "FizzBuzz";
    myBox.classList.add("fizzbuzz");
    console.log("sono dentro fizzbuzz");
  } else if (i % 3 == 0) {
    scriviValore = "fizz";
    myBox.classList.add("fizz");
    console.log("sono dentro fizz");
  } else if (i % 5 == 0) {
    scriviValore = "buzz";
    myBox.classList.add("buzz");
    console.log("sono dentro buzz");
  }

  console.log(scriviValore);
  //   inserisco il valore di scriviValore in myBox
  myBox.innerHTML = scriviValore;
  //  attacco il nuovo elemento all'elemento contenitore

  myCard.append(myBox);
  myContainer.append(myCard);
}
