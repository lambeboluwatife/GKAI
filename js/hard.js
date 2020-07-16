(function () {
  // // Dark Mode
  // // Select Body
  // let body = document.querySelector(".body");
  //
  // // Select dark mode button
  // let dark = document.querySelector(".btn-dark");
  //
  // // change to dark theme
  // dark.addEventListener("click", () => {
  //   body.style.backgroundColor = "black";
  //   body.style.color = "white";
  // });

  // numbers from 1 - 9
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // get four different random numbers from the numbers array

  // get the first random number and remove from the numbers array
  // get first number
  let item1 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let a = items.indexOf(item1);

  if (a > -1) {
    items.splice(a, 1);
  }

  // get the second random number and remove from the numbers array
  // get second number
  let item2 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let b = items.indexOf(item2);

  if (b > -1) {
    items.splice(b, 1);
  }

  // get the third random number and remove from the numbers array
  // get third number
  let item3 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let c = items.indexOf(item3);

  if (c > -1) {
    items.splice(c, 1);
  }

  // get the fourth random number and remove from the numbers array
  // get fourth number
  let item4 = items[Math.floor(Math.random() * items.length)];

  // remove from array
  let d = items.indexOf(item4);

  if (d > -1) {
    items.splice(d, 1);
  }

  // put inside an object
  let allNum = {
    a: item1,
    b: item2,
    c: item3,
    d: item4,
  };

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

  let movesCount = 10;

  moves.textContent = `${movesCount} move(s) left`;
  moves.classList.add("btn", "text-center", "btn-dark", "form-control");

  let tryCount = 0;

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
        innerMsg.textContent =
          "All input fields should contain one number only";
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

          // put user's input inside an object and parse to integer
          let userNum = {
            userA: parseInt(input[0].value),
            userB: parseInt(input[1].value),
            userC: parseInt(input[2].value),
            userD: parseInt(input[3].value),
          };

          // create empty array
          let work = [];
          let work2 = [];

          // push userNum into work array
          work.push(userNum.userA);
          work.push(userNum.userB);
          work.push(userNum.userC);
          work.push(userNum.userD);

          // push random number into work2 array
          work2.push(allNum.a);
          work2.push(allNum.b);
          work2.push(allNum.c);
          work2.push(allNum.d);

          // check if user inputs is in work2 array
          let check1 = work2.includes(work[0]);
          let check2 = work2.includes(work[1]);
          let check3 = work2.includes(work[2]);
          let check4 = work2.includes(work[3]);

          let inj = 0;
          let kill = 0;
          let killCount = 0;

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
          if (allNum.a == userNum.userA) {
            killCount++;
          }
          if (allNum.b == userNum.userB) {
            killCount++;
          }
          if (allNum.c == userNum.userC) {
            killCount++;
          }
          if (allNum.d == userNum.userD) {
            killCount++;
          }

          input[0].value = "";
          input[1].value = "";
          input[2].value = "";
          input[3].value = "";

          inj = inj - killCount;

          let div = document.createElement("div");
          div.textContent = `${userNum.userA}${userNum.userB}${userNum.userC}${userNum.userD} = ${inj} Injured and ${killCount} Killed`;
          div.setAttribute("class", "output");
          result.appendChild(div);

          if (tryCount == 10 && killCount != 4) {
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
        }
      }
    }
  });
})();
