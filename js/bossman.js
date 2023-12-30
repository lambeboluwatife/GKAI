const db = new Dexie("GKAI (Bossman)");

db.version(2).stores({
  computerNumber: "++id,num1,num2,num3,num4",
});

db.version(3).stores({
  trials: "++id,num1,num2,num3,num4,result",
});

const generateRandomNumbers = async () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let item1 = items[Math.floor(Math.random() * items.length)];

  let a = items.indexOf(item1);

  if (a > -1) {
    items.splice(a, 1);
  }

  let item2 = items[Math.floor(Math.random() * items.length)];

  let b = items.indexOf(item2);

  if (b > -1) {
    items.splice(b, 1);
  }

  let item3 = items[Math.floor(Math.random() * items.length)];

  let c = items.indexOf(item3);

  if (c > -1) {
    items.splice(c, 1);
  }

  let item4 = items[Math.floor(Math.random() * items.length)];

  let d = items.indexOf(item4);

  if (d > -1) {
    items.splice(d, 1);
  }

  await db.computerNumber.add({
    num1: item1,
    num2: item2,
    num3: item3,
    num4: item4,
  });
};

async function fetchRandomNumber() {
  try {
    const computerNumber = await db.computerNumber.toArray();
    console.log(computerNumber);

    if (computerNumber.length > 0) {
      console.log("The collection is not empty.");
    } else {
      console.log("The collection is empty.");
      generateRandomNumbers();
    }
  } catch (error) {
    console.error("Error fetching records:", error);
  }
}

fetchRandomNumber();

const resultDiv = document.getElementById("result");

const trials = async () => {
  const userTrial = await db.trials.toArray();

  resultDiv.innerHTML = userTrial
    .map(
      (item) =>
        `<div class="output">${item.num1}${item.num2}${item.num3}${item.num4} - ${item.result}</div>`
    )
    .join("");
};

window.onload = trials;

// Get user input
let input = document.querySelectorAll(".input");

// submit button
let submit = document.querySelector(".submit");

// alert div
let alert = document.querySelector(".alert");

//result
let result = document.querySelector(".result");

// Moves
let moves = document.querySelector(".moves");

let movesCount = 7;

moves.textContent = `${movesCount} move(s) left`;
moves.classList.add("btn", "text-center", "btn-dark", "form-control");

let tryCount = 0;

// Get all number inputs
const numberInputs = document.querySelectorAll(".number-input");

// Attach input event listeners
numberInputs.forEach((input, index, inputs) => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });
});

// add event listener to submit button
submit.addEventListener("click", (event) => {
  event.preventDefault();
  // check if input fields are empty
  if (
    !input[0].value ||
    !input[1].value ||
    !input[2].value ||
    !input[3].value
  ) {
    let innerMsg = document.createElement("div");
    innerMsg.textContent = "Input all field";
    innerMsg.classList.add(
      "btn",
      "text-center",
      "btn-warning",
      "text-light",
      "form-control"
    );
    alert.appendChild(innerMsg);
    setTimeout(() => innerMsg.remove(), 3000);
  } else {
    // check if input length is more than one
    if (
      input[0].value.length >= 2 ||
      input[1].value.length >= 2 ||
      input[2].value.length >= 2 ||
      input[3].value.length >= 2
    ) {
      let innerMsg = document.createElement("div");
      innerMsg.textContent = "Enter number from 1 to 9";
      innerMsg.classList.add(
        "btn",
        "text-center",
        "btn-warning",
        "text-light",
        "form-control"
      );
      alert.appendChild(innerMsg);
      setTimeout(() => innerMsg.remove(), 3000);
    } else if (
      input[0].value == 0 ||
      input[1].value == 0 ||
      input[2].value == 0 ||
      input[3].value == 0
    ) {
      let innerMsg = document.createElement("div");
      innerMsg.innerHTML = "the value <b>0</b> is invalid";
      innerMsg.classList.add(
        "btn",
        "text-center",
        "btn-danger",
        "text-light",
        "form-control"
      );
      alert.appendChild(innerMsg);
      setTimeout(() => innerMsg.remove(), 3000);
    } else {
      // Check if a value exists twice
      if (
        input[0].value == input[1].value ||
        input[0].value == input[2].value ||
        input[0].value == input[3].value
      ) {
        let innerMsg = document.createElement("div");
        innerMsg.textContent = "A number can't appear twice";
        innerMsg.classList.add(
          "btn",
          "text-center",
          "btn-danger",
          "text-light",
          "form-control"
        );
        alert.appendChild(innerMsg);
        setTimeout(() => innerMsg.remove(), 3000);
      } else if (
        input[1].value == input[0].value ||
        input[1].value == input[2].value ||
        input[1].value == input[3].value
      ) {
        let innerMsg = document.createElement("div");
        innerMsg.textContent = "A number can't appear twice";
        innerMsg.classList.add(
          "btn",
          "text-center",
          "btn-danger",
          "text-light",
          "form-control"
        );
        alert.appendChild(innerMsg);
        setTimeout(() => innerMsg.remove(), 3000);
      } else if (
        input[2].value == input[0].value ||
        input[2].value == input[1].value ||
        input[2].value == input[3].value
      ) {
        let innerMsg = document.createElement("div");
        innerMsg.textContent = "A number can't appear twice";
        innerMsg.classList.add(
          "btn",
          "text-center",
          "btn-danger",
          "text-light",
          "form-control"
        );
        alert.appendChild(innerMsg);
        setTimeout(() => innerMsg.remove(), 3000);
      } else if (
        input[3].value == input[0].value ||
        input[3].value == input[1].value ||
        input[3].value == input[2].value
      ) {
        let innerMsg = document.createElement("div");
        innerMsg.textContent = "A number can't appear twice";
        innerMsg.classList.add(
          "btn",
          "text-center",
          "btn-danger",
          "text-light",
          "form-control"
        );
        alert.appendChild(innerMsg);
        setTimeout(() => innerMsg.remove(), 3000);
      } else {
        // Count how many time a user guess
        tryCount++;

        // deduct moves
        movesCount--;

        moves.textContent = `${movesCount} move(s) left`;

        let userNum = {
          userA: parseInt(input[0].value),
          userB: parseInt(input[1].value),
          userC: parseInt(input[2].value),
          userD: parseInt(input[3].value),
        };

        let inj = 0;
        let kill = 0;
        let killCount = 0;

        const addTrials = async () => {
          const computerNumber = await db.computerNumber.toArray();

          // create empty array
          let work = [];
          let work2 = [];

          // push userNum into work array
          work.push(userNum.userA);
          work.push(userNum.userB);
          work.push(userNum.userC);
          work.push(userNum.userD);

          // push random number into work2 array
          work2.push(computerNumber[0].num1);
          work2.push(computerNumber[0].num2);
          work2.push(computerNumber[0].num3);
          work2.push(computerNumber[0].num4);

          console.log(work);
          console.log(work2);

          // check if user inputs is in work2 array
          let check1 = work2.includes(work[0]);
          let check2 = work2.includes(work[1]);
          let check3 = work2.includes(work[2]);
          let check4 = work2.includes(work[3]);

          // if user inputs is inside work2 array, change to 1
          if (check1 == true) {
            check1 = 1;
          }
          if (check2 == true) {
            check2 = 1;
          }
          if (check3 == true) {
            check3 = 1;
          }
          if (check4 == true) {
            check4 = 1;
          }

          inj += check1 + check2 + check3 + check4;

          // check if user input exists in work2 array and on the same index
          if (computerNumber[0].num1 == userNum.userA) {
            killCount++;
          }
          if (computerNumber[0].num2 == userNum.userB) {
            killCount++;
          }
          if (computerNumber[0].num3 == userNum.userC) {
            killCount++;
          }
          if (computerNumber[0].num4 == userNum.userD) {
            killCount++;
          }

          input[0].value = "";
          input[1].value = "";
          input[2].value = "";
          input[3].value = "";

          inj = inj - killCount;

          await db.trials.add({
            num1: userNum.userA,
            num2: userNum.userB,
            num3: userNum.userC,
            num4: userNum.userD,
            result: `${inj} Injured and ${killCount} Killed`,
          });
        };

        addTrials();

        if (tryCount == 7 && killCount != 4) {
          // Get the modal
          let modal = document.getElementById("myModal2");

          // Get the btn that closes the modal
          let btn = document.querySelector(".btn-dark");

          // Get the replay button
          let replay = document.querySelector(".replay");

          // Get the home button
          let home = document.querySelector(".home");

          // opens modal
          modal.style.display = "block";

          // closes modal
          btn.onclick = function () {
            modal.style.display = "none";
          };

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };

          // Show the replay button
          replay.style.display = "block";

          // Hide the submit button
          submit.style.display = "none";

          // Go to home page
          home.style.display = "block";

          // Reload page
          replay.onclick = function () {
            location.reload();
          };

          let div = document.createElement("div");
          div.innerHTML = `You Lose. The Computer's Number is <b>${work2[0]} ${work2[1]} ${work2[2]} ${work2[3]}</b>`;
          div.setAttribute("class", "output");
          result.appendChild(div);
        }

        if (killCount == 4) {
          // Get the modal
          let modal = document.getElementById("myModal");

          // Get the btn that closes the modal
          let btn = document.querySelector(".btn-light");

          // Get the replay button
          let replay = document.querySelector(".replay");

          // Get the home button
          let home = document.querySelector(".home");

          // opens modal
          modal.style.display = "block";

          // closes modal
          btn.onclick = function () {
            modal.style.display = "none";
          };

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };

          // Show the replay button
          replay.style.display = "block";

          // Go to home page
          home.style.display = "block";

          // Hide the submit button
          submit.style.display = "none";

          // Reload page
          replay.onclick = function () {
            location.reload();
          };

          let div = document.createElement("div");
          div.textContent = `You Got All Number Right and tried it ${tryCount} times`;
          div.setAttribute("class", "output");
          result.appendChild(div);
        }

        // let resultsArray = [];
        // resultsArray.push(result.innerHTML);
        // localStorage.setItem("result", JSON.stringify(resultsArray));
        // localStorage.setItem("comNum", JSON.stringify(work2));
      }
    }
  }
});
