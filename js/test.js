const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

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
  d: item4
};

btn.addEventListener("click", () => {
  const string = input.value;
  const work = arr => arr.map(Number);
  work(string.split(""));
  console.log(work);
  // console.log(string.split(""));
  // console.log([...string]);
  // console.log(Array.from(string));
  // console.log(Object.assign([], string));
});
