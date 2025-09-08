// ==============================
// Part 1: Variables, Conditionals
// ==============================
document.getElementById("greetBtn").addEventListener("click", function () {
  let name = document.getElementById("username").value;

  if (name.trim() === "") {
    document.getElementById("greeting").textContent = "Please enter your name.";
  } else {
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
  }
});

// ==============================
// Part 2: Functions
// ==============================
// Function to add two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to format a string
function formatMessage(message) {
  return "*** " + message.toUpperCase() + " ***";
}

document.getElementById("sumBtn").addEventListener("click", function () {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = calculateSum(n1, n2);

  document.getElementById("sumResult").textContent = formatMessage("The sum is " + result);
});

// ==============================
// Part 3: Loops
// ==============================
document.getElementById("countdownBtn").addEventListener("click", function () {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // While loop example: generating stars
  let stars = "";
  let count = 0;
  while (count < 5) {
    stars += "⭐";
    count++;
  }
  let starItem = document.createElement("li");
  starItem.textContent = stars;
  list.appendChild(starItem);
});

// ==============================
// Part 4: DOM Manipulation
// ==============================
// Toggle color of title
document.getElementById("toggleBtn").addEventListener("click", function () {
  let title = document.getElementById("title");
  title.classList.toggle("highlight");
});

// Add dynamic list items
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});
