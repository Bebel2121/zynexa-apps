const apps = [
    {nome:"CapCut Pro", img:"assets/capcut.jpg", preco:"10"},
    {nome:"KineMaster Pro", img:"assets/kine.jpg", preco:"12"},
    {nome:"Alight Motion", img:"assets/alight.jpg", preco:"15"},
    {nome:"Netflix Premium", img:"assets/netflix.jpg", preco:"20"},
    {nome:"Crunchyroll", img:"assets/crunchy.jpg", preco:"18"},
    {nome:"Spotify Premium", img:"assets/spotify.jpg", preco:"10"},
    {nome:"YouTube Premium", img:"assets/youtube.jpg", preco:"15"},
    {nome:"Remini Pro", img:"assets/remini.jpg", preco:"12"},
    {nome:"PicsArt Pro", img:"assets/picsart.jpg", preco:"10"},
    {nome:"Lightroom Pro", img:"assets/lightroom.jpg", preco:"15"},
    {nome:"Canva Pro", img:"assets/canva.jpg", preco:"20"},
    {nome:"InShot Pro", img:"assets/inshot.jpg", preco:"10"},
    {nome:"Filmora Pro", img:"assets/filmora.jpg", preco:"18"},
    {nome:"Snapseed Premium", img:"assets/snapseed.jpg", preco:"12"},
    {nome:"VivaCut Pro", img:"assets/vivacut.jpg", preco:"10"},
    {nome:"VSCO Premium", img:"assets/vsco.jpg", preco:"15"},
    {nome:"FaceApp Pro", img:"assets/faceapp.jpg", preco:"12"},
    {nome:"Anime TV", img:"assets/anime.jpg", preco:"18"},
    {nome:"Disney+", img:"assets/disney.jpg", preco:"20"},
    {nome:"HBO Max", img:"assets/hbo.jpg", preco:"20"}
];

let selecionado = "";

const container = document.getElementById("apps-container");

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

function comprar(nome, preco){
    selecionado = `${nome} - R$${preco}`;
    document.getElementById("modal").style.display = "flex";
}

function enviar(){
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;

    if(!nome || !numero){
        toast("Preencha os dados!");
        return;
    }

    let msg = `🔥 *Novo Pedido - Zynexa Apps* 🔥%0A
👤 Nome: ${nome}%0A
📱 Número: ${numero}%0A
📦 App: ${selecionado}%0A
💰 Pagamento: Pix%0A
🚀 Quero finalizar minha compra!`;

    window.location.href = `https://wa.me/5521990682259?text=${msg}`;
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