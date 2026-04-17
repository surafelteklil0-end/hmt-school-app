// language
const lang = {
  am: {
    title: "መግቢያ",
    login: "ግባ",
    success: "በትክክል ገብተዋል",
    fail: "ስህተት ነው"
  },
  en: {
    title: "Login",
    login: "Login",
    success: "Login success",
    fail: "Wrong username or password"
  }
};

// default user (temporary)
const users = [
  {username:"owner", password:"1234", role:"owner"},
  {username:"admin", password:"1234", role:"admin"}
];

function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  let user = users.find(x => x.username === u && x.password === p);

  let currentLang = localStorage.getItem("lang") || "en";

  if(user){
  document.getElementById("msg").innerText = lang[currentLang].success;

  setTimeout(()=>{
    window.location.href = "dashboard.html";
  },1000);

}else{
    document.getElementById("msg").innerText = lang[currentLang].fail;
  }
}

function setLang(l){
  localStorage.setItem("lang", l);
  applyLang();
}

function applyLang(){
  let l = localStorage.getItem("lang") || "en";
  document.getElementById("title").innerText = lang[l].title;
}

window.onload = applyLang;
function go(page){
  alert(page + " page coming soon");
}

function logout(){
  window.location.href = "index.html";
}
