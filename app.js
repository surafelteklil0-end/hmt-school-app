const langData = {
  am: "እንኳን ወደ H.M.T ተቀባችሁ",
  en: "Welcome to H.M.T School"
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  document.getElementById("text").innerText = langData[lang];
}

window.onload = function(){
  let lang = localStorage.getItem("lang") || "am";
  document.getElementById("text").innerText = langData[lang];
};
