document.addEventListener("DOMContentLoaded", () => {

const numero = "5521990682259"; // SEU NÚMERO

const apps = [
    "CapCut Pro","KineMaster","Spotify","Netflix","Crunchyroll",
    "Disney+","HBO Max","Canva","PicsArt","Lightroom",
    "Remini","InShot","Filmora","VSCO","VivaCut",
    "FaceApp","YouTube Premium","Anime TV","Prime Video","Alight Motion"
];

const container = document.getElementById("apps");

if(container){
    apps.forEach((nome, i) => {

        let preco = Math.floor(Math.random()*15)+10;
        let img = "https://via.placeholder.com/150";

        let badge = i < 3 ? `<div class="badge">🔥 TOP</div>` : "";

        let msg = encodeURIComponent(
`🔥 Pedido Zynexa Apps
📦 ${nome}
💰 R$${preco}
🚀 Quero comprar agora!`
        );

        container.innerHTML += `
        <div class="app">
            ${badge}
            <img src="${img}">
            <h3>${nome}</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>R$ ${preco}</p>

            <a href="https://wa.me/${numero}?text=${msg}">
                <button>COMPRAR</button>
            </a>
        </div>
        `;
    });
}

/* CONTADOR */
function atualizarContador(){
    let el = document.getElementById("contador");
    if(!el) return;

    let num = Math.floor(Math.random()*50)+10;
    el.innerText = `🔥 ${num} pessoas comprando agora`;
}
setInterval(atualizarContador, 3000);

/* LOADING (ANTI BUG) */
let p = 0;
let loading = document.getElementById("loading");
let progress = document.getElementById("progress");

if(loading && progress){
    let int = setInterval(()=>{
        p++;

        progress.style.width = p + "%";

        if(p >= 100){
            clearInterval(int);
            loading.style.display = "none";
        }
    },20);

    // 🔥 GARANTE QUE NUNCA TRAVA
    setTimeout(()=>{
        loading.style.display = "none";
    },4000);
}

});