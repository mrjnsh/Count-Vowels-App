const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const word = document.querySelector(".input");

btn.addEventListener("click", () => {
  let counter = 0;
  let val = word.value.toLowerCase();
  for (let i = 0; i < val.length; i++) {
    if (val[i].match(/a|e|i|o|u/)) {
      counter++;
    }
  };
  text.innerHTML = `${val.toUpperCase()} has ${counter} vowels`;
});
