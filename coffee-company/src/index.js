function buyhere() {
  let cardNumber = prompt("what is your Members-Card#?");
  let name = prompt("what is your name?");
  if (cardNumber >= 50000) {
    let h2 = document.querySelector("h2");
    h2.innerHTML =
      "<strong>Hello " + name + "🌼,Wellcome To Simret's Coffee🌼</strong>";
  } else {
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Hi " + name + "!,Please Get a Members-Card🖐";
  }
}

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", buyhere);
