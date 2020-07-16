// (function() {
//
//   // numbers from 1 - 9
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
//   // get four different random numbers from the numbers array
//
//   // get the first random number and remove from the numbers array
//   // get first number
//   let num1 = numbers[Math.floor(Math.random() * numbers.length)];
//
//   // remove from array
//   let a = numbers.indexOf(num1);
//
//   if (a > -1) {
//     numbers.splice(a, 1);
//   }
//
//   // get the second random number and remove from the numbers array
//   // get second number
//   let num2 = numbers[Math.floor(Math.random() * numbers.length)];
//
//   // remove from array
//   let b = numbers.indexOf(num2);
//
//   if (b > -1) {
//     numbers.splice(b, 1);
//   }
//
//   // get the third random number and remove from the numbers array
//   // get third number
//   let num3 = numbers[Math.floor(Math.random() * numbers.length)];
//
//   // remove from array
//   let c = numbers.indexOf(num3);
//
//   if (c > -1) {
//     numbers.splice(c, 1);
//   }
//
//   // get the fourth random number and remove from the numbers array
//   // get fourth number
//   let num4 = numbers[Math.floor(Math.random() * numbers.length)];
//
//   // remove from array
//   let d = numbers.indexOf(num4);
//
//   if (d > -1) {
//     numbers.splice(d, 1);
//   }
//
//   // create an empty array
//   let randNum = [];
//   let userNum = [];
//
//   // get user input
//   let input = document.querySelectorAll('.input');
//
//   // submit button
//   let btn = document.querySelector('.submit');
//
//   // alert div
//   let alert = document.querySelector('.alert');
//
//   // add event listener to submit button
//   btn.addEventListener('click', (event) => {
//     event.preventDefault();
//
//     // check if input fields are empty
//     if (!input[0].value || !input[1].value || !input[2].value ||!input[3].value) {
//       alert.textContent = 'Input all fields'
//     } else {
//
//       // parse user input to integer and push inside userNum array
//       userNum.push(parseInt(input[0].value));
//       userNum.push(parseInt(input[1].value));
//       userNum.push(parseInt(input[2].value));
//       userNum.push(parseInt(input[3].value));
//
//       console.log(userNum);
//
//       // push random numbers inside randNum array
//       randNum.push(num1);
//       randNum.push(num2);
//       randNum.push(num3);
//       randNum.push(num4);
//
//       console.log(randNum);
//
//       // check if user inputs is in randNum
//       let firstCheck = randNum.includes(userNum[0]);
//       let secondCheck = randNum.includes(userNum[0]);
//       let thirdCheck = randNum.includes(userNum[0]);
//       let fourthCheck = randNum.includes(userNum[0]);
//
//       // if user inputs is inside randNum, change to 1
//       if (firstCheck == true) {
//         firstCheck = 1;
//       }
//       if (secondCheck == true) {
//         secondCheck = 1;
//       }
//       if (thirdCheck == true) {
//         thirdCheck = 1;
//       }
//       if (fourthCheck == true) {
//         fourthCheck = 1;
//       }
//
//       let inj = 0;
//       let killCount = 0;
//
//       inj += firstCheck + secondCheck + thirdCheck + fourthCheck;
//
//       // check if user input exists in randNum and on the same index
//       if (randNum[0] == userNum[0]) {
//         killCount++;
//       }
//       if (randNum[1] == userNum[1]) {
//         killCount++;
//       }
//       if (randNum[2] == userNum[2]) {
//         killCount++;
//       }
//       if (randNum[3] == userNum[3]) {
//         killCount++;
//       }
//
//       if (killCount == 4) {
//         let div = document.createElement('div');
//         div.textContent = `${input[0].value}${input[1].value}${input[2].value}${input[3].value} = ${killCount} Killed.
//           You Won!!!
//         `;
//         div.setAttribute('class', 'output');
//         document.body.appendChild(div);
//       } else {
//         // deduct from inj
//         inj = inj - killCount;
//
//          // display in page
//          // create an empty div
//          let div = document.createElement('div');
//
//          // add attribute to created div
//          div.setAttribute('class', 'output');
//
//          // dispaly the result
//          div.textContent = `${userNum[0]}${userNum[1]}${userNum[2]}${userNum[3]} - ${inj} Injured and ${killCount} Killed`
//          document.body.appendChild(div);
//       }
//     }
//   });
//
// }());

// function myFunction() {
//   let element = document.body;
//
//   element.classList.toggle("dark-mode");
// }

// //Event Listeners
// myBudget.addEventListener("blur", getAmount);
// expenseButton.addEventListener("click", addExpenseItem);
// saveItems.addEventListener("click", saveToLocalStorage);
// clearBtn.addEventListener("click", clearLocalStorage);
//
// let expenses;
// if (localStorage.getItem("expenses")) {
//   ul.innerHTML = JSON.parse(localStorage.getItem("expenses"));
//   amtBudget.innerHTML = JSON.parse(localStorage.getItem("budget"));
//   amtLeft.innerHTML = JSON.parse(localStorage.getItem("left"));
// } else {
//   expenses = [];
//   let budgetArray = [];
//   let leftArray = [];
// }
//
// function saveToLocalStorage(event) {
//   event.preventDefault();
//
//   let expensesArray = [];
//   let budgetArray = [];
//   let leftArray = [];
//   expensesArray.push(listItems.innerHTML);
//   budgetArray.push(amtBudget.textContent);
//   leftArray.push(amtLeft.textContent);
//   localStorage.setItem("expenses", JSON.stringify(expensesArray));
//   localStorage.setItem("budget", JSON.stringify(budgetArray));
//   localStorage.setItem("left", JSON.stringify(leftArray));
// }
//
// function clearLocalStorage(event) {
//   event.preventDefault();
//
//   localStorage.removeItem("expenses");
//   localStorage.removeItem("budget");
//   localStorage.removeItem("left");
//
//   addSpan.innerHTML = "";
//   amtBudget.innerHTML = "Budget:";
//   amtLeft.innerHTML = "Left:";
// }
//
// // Arrays
// const expenseAmountArray = [];
//
// //Functions
// function getAmount(event) {
//   if (myBudget.value === 0 || myBudget.value === "") {
//     alert("Please enter a valid amount");
//   }
//   amtBudget.textContent = "Budget:" + "$" + myBudget.value;
//   amtLeft.textContent = "Left:" + "$" + myBudget.value;
//   amtLeft.value = myBudget.value;
//   myBudget.textContent = "";
// }
//
// function addExpenseItem(event) {
//   event.preventDefault();
//   if (
//     myForm.elements.expense.value === "" &&
//     myForm.elements.amount.value === ""
//   ) {
//     expenseButton.setAttribute("disabled", true);
//     expenseAmount.style.border = "thin solid red";
//     expenseName.style.border = "thin solid red";
//     myBudget.style.border = "thin solid red";
//     errorMsg.style.display = "inline";
//   } else {
//     expenseButton.removeAttribute("disabled");
//     expenseAmount.style.border = "thin solid green";
//     expenseName.style.border = "thin solid green";
//     myBudget.style.border = "thin solid green";
//   }
//
//   const newLi = document.createElement("li");
//   const newSpan = document.createElement("span");
//   newSpan.classList.add("amount");
//
//   const newExpenseName = expenseName.value;
//   const newExpenseAmount = Number(expenseAmount.value);
//
//   newSpan.append(newExpenseAmount);
//   listItems.appendChild(newLi).append(newExpenseName, newSpan);
//   expenseAmountArray.push(newExpenseAmount);
//
//   // Getting sum of expenses
//   var sum = expenseAmountArray.reduce(function (a, b) {
//     return a + b;
//   }, 0);
//
//   // Calculating Amount Left
//   const remainingAmount = myBudget.value - sum;
//   amtLeft.textContent = "Left:" + "$" + remainingAmount;
//
//   expenseAmount.value = "";
//   expenseName.value = "";
// }
