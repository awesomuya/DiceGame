let rollDice = () => {
  let rollBtn = document.getElementById("rollBtn");
  let container = document.getElementById("container2");

  rollBtn.addEventListener("click", function () {
    let numDice = Number(document.getElementById("input1").value);
    container.innerHTML = "";

    const dices = {
      dice1: "./images/Dice-1-b.svg",
      dice2: "./images/Dice-2-b.svg",
      dice3: "./images/Dice-3-b.svg",
      dice4: "./images/Dice-4-b.svg",
      dice5: "./images/Dice-5-b.svg",
      dice6: "./images/dice-6.svg",
    };

    function getRandomDice() {
      let diceKeys = Object.keys(dices);
      const randomIndex = Math.floor(Math.random() * diceKeys.length);
      return dices[diceKeys[randomIndex]];
    }

    for (let i = 0; i < numDice; i++) {
      const randomDice = getRandomDice();
      const img = document.createElement("img");
      img.src = randomDice;
      img.classList.add("dice-image");
      container.appendChild(img);
    }
  });
};

rollDice();
