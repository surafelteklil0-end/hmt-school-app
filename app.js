// 🧠 STUDENTS DATABASE
const students = {
  "abebe amara wogaso": 1001,
  "negst adane wola": 1002,
  "mox endale areka": 1003,
  "surafel teklil wolde": 1031,
  "yared kidane zeleke": 1032,
  "endale alebachew amde": 1033
};

// 🔐 LOGIN
function login() {
  let name = document.getElementById("username").value.toLowerCase();
  let pass = document.getElementById("password").value;
  let code = document.getElementById("code").value;

  // OWNER
  if (name === "owner" && pass === "1234") {
    localStorage.setItem("role", "owner");
    localStorage.setItem("username", "Owner");
    window.location.href = "dashboard.html";
    return;
  }

  // ADMIN
  if (name === "admin" && pass === "1234") {
    localStorage.setItem("role", "admin");
    localStorage.setItem("username", "Admin");
    window.location.href = "dashboard.html";
    return;
  }

  // STUDENT
  if (students[name] && students[name] == code) {
    localStorage.setItem("role", "student");
    localStorage.setItem("username", name);
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong login");
  }
}

// 🚪 LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// 🎯 ROLE CONTROL + WELCOME
function control() {
  let role = localStorage.getItem("role");
  let user = localStorage.getItem("username");

  if (!role) window.location.href = "index.html";

  document.getElementById("welcome").innerText =
    "Welcome " + user;

  if (role !== "owner") {
    let sec = document.getElementById("userSection");
    if (sec) sec.style.display = "none";
  }
}

// 💳 PAYMENT
function makePayment() {
  let name = document.getElementById("studentName").value;
  let amount = document.getElementById("amount").value;

  let data = JSON.parse(localStorage.getItem("payments")) || [];
  data.push({ name, amount });

  localStorage.setItem("payments", JSON.stringify(data));
  displayPayments();
}

function displayPayments() {
  let data = JSON.parse(localStorage.getItem("payments")) || [];
  let list = document.getElementById("paymentList");
  if (!list) return;

  list.innerHTML = "";
  data.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p.name + " - " + p.amount;
    list.appendChild(li);
  });
}

// 💬 FEEDBACK
function sendFeedback() {
  let name = document.getElementById("fbName").value;
  let text = document.getElementById("feedbackText").value;

  let data = JSON.parse(localStorage.getItem("feedbacks")) || [];
  data.push({ name, text });

  localStorage.setItem("feedbacks", JSON.stringify(data));
  displayFeedback();
}

function displayFeedback() {
  let data = JSON.parse(localStorage.getItem("feedbacks")) || [];
  let list = document.getElementById("feedbackList");
  if (!list) return;

  list.innerHTML = "";
  data.forEach(f => {
    let li = document.createElement("li");
    li.innerText = f.name + ": " + f.text;
    list.appendChild(li);
  });
}

// 👥 USERS (OWNER)
function addUser() {
  let name = document.getElementById("newUsername").value;

  let data = JSON.parse(localStorage.getItem("users")) || [];
  data.push(name);

  localStorage.setItem("users", JSON.stringify(data));
  displayUsers();
}

function displayUsers() {
  let data = JSON.parse(localStorage.getItem("users")) || [];
  let list = document.getElementById("userList");
  if (!list) return;

  list.innerHTML = "";
  data.forEach(u => {
    let li = document.createElement("li");
    li.innerText = u;
    list.appendChild(li);
  });
}

// 🔥 LOAD
window.onload = function () {
  control();
  displayPayments();
  displayFeedback();
  displayUsers();
};
