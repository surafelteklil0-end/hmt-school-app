function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let role = document.getElementById("role").value;
  if (pass === "1234") {
    localStorage.setItem("role", role);
    localStorage.setItem("username", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong password");
  }
}
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
// PAYMENT
function makePayment() {
  let payment = {
    name: document.getElementById("studentName").value,
    amount: document.getElementById("amount").value,
    type: document.getElementById("paymentType").value,
    date: document.getElementById("date").value
  };
  let data = JSON.parse(localStorage.getItem("payments")) || [];
  data.push(payment);
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
    li.innerText = p.name + " - " + p.amount + " - " + p.type;
    list.appendChild(li);
  });
}
// FEEDBACK
function sendFeedback() {
  let fb = {
    name: document.getElementById("fbName").value,
    text: document.getElementById("feedbackText").value,
    time: new Date().toLocaleString()
  };
  let data = JSON.parse(localStorage.getItem("feedbacks")) || [];
  data.push(fb);
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
// USERS
function addUser() {
  let user = {
    username: document.getElementById("newUsername").value,
    role: document.getElementById("newRole").value
  };
  let data = JSON.parse(localStorage.getItem("users")) || [];
  data.push(user);
  localStorage.setItem("users", JSON.stringify(data));
  displayUsers();
}
function displayUsers() {
  let data = JSON.parse(localStorage.getItem("users")) || [];
  let list = document.getElementById("userList");
  if (!list) return;
  list.innerHTML = "";
  data.forEach((u, i) => {
    let li = document.createElement("li");
    li.innerText = u.username + " (" + u.role + ")";
    list.appendChild(li);
  });
}
window.onload = function() {
  displayPayments();
  displayFeedback();
  displayUsers();
};
