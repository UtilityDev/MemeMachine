
const img = document.getElementById("meme-img");
const generateBtn = document.getElementById("generate");

async function pullAPI() {
  
  const res = await fetch('https://meme-api.herokuapp.com/gimme');
  const results = await res.json();
  
  console.log(results);
  
  img.src = results.url;
  
}

generate.addEventListener("click", pullAPI);