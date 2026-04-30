const apps = [
{nome:"CapCut Pro",cat:"edicao",img:"https://www.pngall.com/wp-content/uploads/13/Capcut-Logo-PNG-Cutout.png",preco:"20.90"},
{nome:"KineMaster Pro",cat:"edicao",img:"https://www.pngkey.com/png/detail/868-8683800_logo-kinemaster.png",preco:"12.90"},
{nome:"Alight Motion Pro",cat:"edicao",img:"https://smartmotionapp.com/wp-content/uploads/2025/02/Alight-Motion-Logo-transparent.png",preco:"15.90"},
{nome:"CineFlix Pro",cat:"streaming",img:"https://cdn-icons-png.flaticon.com/512/744/744922.png",preco:"15.90"},
{nome:"Spotify Pro",cat:"streaming",img:"https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",preco:"19.90"},
{nome:"Crunchyroll Pro",cat:"streaming",img:"https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png",preco:"14.90"}
];

let listaAtual = apps;

function render(lista){
  const container = document.querySelector(".apps");
  container.innerHTML = "";

  lista.forEach(app => {
    const estrelas = "★★★★★";
    container.innerHTML += `
      <div class="app">
        <img src="${app.img}">
        <h3>${app.nome}</h3>
        <div class="stars">${estrelas}</div>
        <p>R$ ${app.preco}</p>
        <button onclick="comprar('${app.nome}')">Comprar</button>
      </div>
    `;
  });
}

render(apps);

// busca
document.getElementById("search").addEventListener("input", e => {
  const valor = e.target.value.toLowerCase();
  const filtrado = listaAtual.filter(app =>
    app.nome.toLowerCase().includes(valor)
  );
  render(filtrado);
});

// filtro
function filtrar(cat){
  if(cat === "todos"){
    listaAtual = apps;
  } else {
    listaAtual = apps.filter(app => app.cat === cat);
  }
  render(listaAtual);
}

// whatsapp
function comprar(nome){
  const numero = "5521990682259";
  const msg = `Quero comprar o ${nome}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

  toast("Abrindo WhatsApp...");
  setTimeout(()=> window.open(url,"_blank"),800);
}

// toast
function toast(txt){
  const t = document.getElementById("toast");
  t.innerText = txt;
  t.style.display = "block";
  setTimeout(()=> t.style.display="none",2000);
}

let progress = 0;
const bar = document.querySelector(".progress");
const percent = document.getElementById("percent");

const interval = setInterval(() => {
  progress++;

  bar.style.width = progress + "%";
  percent.innerText = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);

    document.getElementById("loader").style.display = "none";
  }
}, 30); // velocidade (menor = mais rápido)

// neve
const snowContainer = document.querySelector(".snow");

for (let i = 0; i < 80; i++) {
  const snow = document.createElement("span");
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 3 + Math.random() * 5 + "s";
  snow.style.opacity = Math.random();
  snowContainer.appendChild(snow);
}