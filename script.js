alert("JS carregou");

const apps = [
    {nome:"CapCut Pro", img:"https://upload.wikimedia.org/wikipedia/commons/3/3c/CapCut_logo.png", preco:"10"},
    {nome:"KineMaster Pro", img:"https://upload.wikimedia.org/wikipedia/commons/0/0c/KineMaster_Logo.png", preco:"12"}
];

let selecionado = "";

const container = document.getElementById("apps-container");

if(container){
    apps.forEach(app => {
        container.innerHTML += `
        <div class="app">
            <img src="${app.img}">
            <h3>${app.nome}</h3>
            <p>R$ ${app.preco}</p>
            <button onclick="comprar('${app.nome}', '${app.preco}')">COMPRAR</button>
        </div>
        `;
    });
}

function comprar(nome, preco){
    selecionado = `${nome} - R$${preco}`;
    document.getElementById("modal").style.display = "flex";
}

function enviar(){
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;

    if(!nome || !numero){
        alert("Preencha tudo!");
        return;
    }

    let msg = `Pedido Zynexa%0A Nome: ${nome}%0A App: ${selecionado}`;

    window.location.href = `https://wa.me/5521990682259text=${msg}`;
}

function toast(msg){
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.style.display = "block";

    setTimeout(() => {
        t.style.display = "none";
    }, 3000);
}

/* LOADING */
let progress = 0;
let interval = setInterval(() => {
    progress++;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("percent").innerText = progress + "%";

    if(progress >= 100){
        clearInterval(interval);
        document.getElementById("loading").style.display = "none";
    }
}, 30);