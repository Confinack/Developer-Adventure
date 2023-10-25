const iconeArea = document.querySelector(".icone");
const imagensUrl = ["../assets/img/iconesOriginais/Amauri_Icon.png", "../assets/img/iconesOriginais/Diogo_Icon.png", "../assets/img/iconesOriginais/Ingrid_Icon.png", "../assets/img/iconesOriginais/Mosca_elon.png", "../assets/img/iconesOriginais/voce_sabe_quem.png", "../assets/img/iconesOriginais/Yoda.png", "../assets/img/iconesOriginais/Hacker.png", "../assets/img/iconesOriginais/Jobs_steve.png"];
let galeria = undefined;

iconeArea.addEventListener("click", function(){
    criarElemento()

    galeria.addEventListener("click", function (){
        galeria.remove()        
    });
});

function criarElemento(){
    const sectionArea = document.createElement("section");
    const sectionGaleria = document.createElement("section");
    const imagem = [document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img"), document.createElement("img")];

    sectionArea.classList.add("backgroundGaleria");
    sectionGaleria.classList.add("galeria")
    let i = 0;
    for(elemento of imagem){
        elemento.setAttribute("src", imagensUrl[i]);
        sectionGaleria.appendChild(elemento)
        i++
    };

    sectionArea.appendChild(sectionGaleria);
    document.body.appendChild(sectionArea);
    galeria = sectionArea;

    for(elemento of imagem){
        elemento.addEventListener("click", function(){
            iconeArea.setAttribute("src", this.getAttribute("src"));
            localStorage.setItem("iconeEscolhido", this.getAttribute("src"))
        })
    }
}

window.addEventListener("load", function(){
    if(!localStorage.getItem("iconeEscolhido")){
        const index = Math.round(Math.random() * 2);
        iconeArea.setAttribute("src", imagensUrl[index])
    }else {
        const imagem = localStorage.getItem("iconeEscolhido")
        iconeArea.setAttribute("src", imagem)
    }
})