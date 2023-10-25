let cartoesLojas = document.querySelectorAll(".card");
let cardsOcultadores = undefined;
const areaDeAtualizacao = document.querySelectorAll(".levelUp");
const displayDinheiro = document.getElementById("money");
let quantidadeGerentes = undefined;
let dinheiroAtual = 0;

const lojas = [
    {
        titulo: "Freelancer",
        elementoFisico: cartoesLojas[0],
        liberado: true,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 50,
        level: 1,
        preco: 0,
        rendimento: 20,
        tempo: 3
    },
    {
        titulo: "Front-End",
        elementoFisico: cartoesLojas[1],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 75,
        level: 1,
        preco: 200,
        rendimento: 100,
        tempo: 5
    },
    {
        titulo: "Back-end",
        elementoFisico: cartoesLojas[2],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 120,
        level: 1,
        preco: 450,
        rendimento: 250,
        tempo: 10
    },
    {
        titulo: "Projeto pessoal",
        elementoFisico: cartoesLojas[3],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 200,
        level: 1,
        preco: 900,
        rendimento: 600,
        tempo: 20
    },
    {
        titulo: "Trabalho para o banco",
        elementoFisico: cartoesLojas[4],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 350,
        level: 1,
        preco: 1800,
        rendimento: 1400,
        tempo: 35
    },
    {
        titulo: "Hacker",
        elementoFisico: cartoesLojas[5],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 700,
        level: 1,
        preco: 5000,
        rendimento: 2500,
        tempo: 60
    },
    {
        titulo: "Microsoft",
        elementoFisico: cartoesLojas[6],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 1400,
        level: 1,
        preco: 12000,
        rendimento: 7000,
        tempo: 90
    },
    {
        titulo: "Apple",
        elementoFisico: cartoesLojas[7],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 3000,
        level: 1,
        preco: 20000,
        rendimento: 18000,
        tempo: 120
    },
    {
        titulo: "Elon Musk",
        elementoFisico: cartoesLojas[8],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 7000,
        level: 1,
        preco: 50000,
        rendimento: 30000,
        tempo: 180
    },
    {
        titulo: "Raptação Alien",
        elementoFisico: cartoesLojas[9],
        liberado: false,
        emProducao: false,
        possuiGerente: false,
        upgradePreco: 20000,
        level: 1,
        preco: 100000,
        rendimento: 70000,
        tempo: 300
    }
];

const game = {
    produzir: function(lojaObj){
        if(lojaObj.liberado && !lojaObj.possuiGerente){
            let barraProgresso = lojaObj.elementoFisico.querySelector(".progressBar");
            let temporizador = lojaObj.elementoFisico.querySelector(".timer");

            if(!lojaObj.emProducao){
                let segundos = 0;
                let progressoAtual = 0;

                const intervaloDoProgresso = setInterval(function(){
                    progressoAtual++;
                    if(progressoAtual >= 100){
                        progressoAtual = 0;
                        barraProgresso.style.setProperty("--progresso", progressoAtual + "%");

                        clearInterval(intervaloDoProgresso);
                        return 
                    }

                    barraProgresso.style.setProperty("--progresso", progressoAtual + "%");
                }, 10 * lojaObj.tempo);
                
                const intervaloProducao = setInterval(function(){
                    segundos++;

                    if(segundos >= lojaObj.tempo){
                        segundos = 0;
                        temporizador.textContent = lojaObj.tempo + " seg";
                        dinheiroAtual += lojaObj.rendimento;
                        lojaObj.emProducao = false;
            
                        atualizarDisplays(displayDinheiro, `R$ ${dinheiroAtual}`)
                        salvarInformacoes()
                        clearInterval(intervaloProducao);
                        return
                    }

                    temporizador.textContent = lojaObj.tempo - segundos + " seg";
                }, 1000);

                lojaObj.emProducao = true;
            };
        };
    },

    gerenteProducao: function(lojaObj){
        if(lojaObj.liberado && lojaObj.possuiGerente){
            let barraProgresso = lojaObj.elementoFisico.querySelector(".progressBar");
            let temporizador = lojaObj.elementoFisico.querySelector(".timer");

            if(!lojaObj.emProducao){
                let segundos = 0;
                let progressoAtual = 0;

                const intervaloDoProgresso = setInterval(function(){
                    progressoAtual++;
                    if(progressoAtual >= 100){
                        progressoAtual = 0;
                        barraProgresso.style.setProperty("--progresso", progressoAtual + "%");

                        return 
                    }

                    barraProgresso.style.setProperty("--progresso", progressoAtual + "%");
                }, 10 * lojaObj.tempo);
                
                const intervaloProducao = setInterval(function(){
                    segundos++;

                    if(segundos >= lojaObj.tempo){
                        segundos = 0;
                        temporizador.textContent = lojaObj.tempo + " seg";
                        dinheiroAtual += lojaObj.rendimento;
            
                        atualizarDisplays(displayDinheiro, `R$ ${dinheiroAtual}`)
                        salvarInformacoes()
                        return
                    }

                    temporizador.textContent = lojaObj.tempo - segundos + " seg";
                }, 1000);

                lojaObj.emProducao = true;
            };
        };
    },

    bloquearLojas: function(){
        for(elemento of lojas){
            if(!elemento.liberado){
                const areaOcultada = document.createElement("div");
                const preco = document.createElement("span");
                const imagem = document.createElement("img");

                areaOcultada.classList.add("cardOculto");
                preco.textContent = "R$" + elemento.preco;
                imagem.setAttribute("src", "../assets/img/adicionarAtividade.png")

                areaOcultada.appendChild(preco);
                areaOcultada.appendChild(imagem);

                elemento.elementoFisico.appendChild(areaOcultada)
            }
        }
    },

    liberarLoja: function(loja, ocultadorDoCard){
        const lojaObj = checarObjetoReferenciaDaLoja(loja);
        const precoDeLiberacao = lojaObj.preco;

        if(dinheiroAtual >= precoDeLiberacao){
            dinheiroAtual -= precoDeLiberacao;
            lojaObj.liberado = true;
            atualizarDisplays(displayDinheiro, `R$ ${dinheiroAtual}`)
            ocultadorDoCard.remove();
            salvarInformacoes()
        };
    },

    upgradeLoja: function(lojaObj, areaDeUpgrade){
        if(dinheiroAtual >= lojaObj.upgradePreco && lojaObj.liberado){
            let displayLevel = lojaObj.elementoFisico.querySelector(".nivel");
            let rendimentoVisual = lojaObj.elementoFisico.querySelector(".rendimento")
            dinheiroAtual -= lojaObj.upgradePreco;

            lojaObj.level++
            lojaObj.rendimento = Math.ceil(lojaObj.rendimento * 1.5);
            lojaObj.upgradePreco *= 2

            atualizarDisplays(displayDinheiro, `R$ ${dinheiroAtual}`)
            atualizarDisplays(areaDeUpgrade, `R$ ${lojaObj.upgradePreco}`)
            atualizarDisplays(rendimentoVisual, `R$${lojaObj.rendimento}`)
            atualizarDisplays(displayLevel, `Nivel: ${lojaObj.level}`)
            salvarInformacoes()
        }else {
            console.log("Dinheiro insuficiente")
        }
    }
}

function checarObjetoReferenciaDaLoja(loja){
    for(objetoLoja of lojas){
        if(objetoLoja.elementoFisico === loja){
            return objetoLoja;
        };
    };
};

function atualizarDisplays(elemento, value){
    elemento.textContent = value;
};

function adicionarEscutadores(){
    for(lojaUnica of lojas){
        lojaUnica.elementoFisico.addEventListener("click", function producao(){
            const lojaObjeto = checarObjetoReferenciaDaLoja(this);
            game.produzir(lojaObjeto)
        });
    };
    
    for(cardOcultador of cardsOcultadores){
        cardOcultador.addEventListener("click", function(){
            game.liberarLoja(this.parentElement, this)
        })
    }
    
    for(elemento of areaDeAtualizacao){
        elemento.addEventListener("click", function(){
            let lojaPai = this.closest(".card")
            let objetoLojaPai = checarObjetoReferenciaDaLoja(lojaPai);
            game.upgradeLoja(objetoLojaPai, this)
        })
    }
};

function salvarInformacoes(){
    localStorage.setItem("salvamentoLojas", JSON.stringify(lojas));
    localStorage.setItem("dinheiro", dinheiroAtual)
}

window.addEventListener("load", function(){
    if(localStorage.getItem("dinheiro")){
        dinheiroAtual = Number(localStorage.getItem("dinheiro"));
        atualizarDisplays(displayDinheiro, "R$ " + dinheiroAtual);
    };

    if(localStorage.getItem("salvamentoLojas")){
        lojas.length = 0;
        let i = 0;

        for(elemento of JSON.parse(localStorage.getItem("salvamentoLojas"))){
            elemento.elementoFisico = cartoesLojas[i];

            const levelUpPreco = elemento.elementoFisico.querySelector(".levelUp");
            const levelAtual = elemento.elementoFisico.querySelector(".nivel");
            const elementoRendimento = elemento.elementoFisico.querySelector(".rendimento");

            levelUpPreco.textContent = "R$ " + elemento.upgradePreco;
            levelAtual.textContent = "nivel: " + elemento.level;
            elementoRendimento.textContent = "R$" + elemento.rendimento;

            elemento.emProducao = false;
            lojas.push(elemento)
            i++
        }
    }

    setInterval(function(){
        if(dinheiroAtual != Number(localStorage.getItem("dinheiro"))){
            dinheiroAtual = Number(localStorage.getItem("dinheiro"));
            displayDinheiro.textContent = "R$ " + dinheiroAtual;
        }

        if(localStorage.getItem("gerentesContratados")){
            quantidadeGerentes = JSON.parse(localStorage.getItem("gerentesContratados")).length
            for(let i = 0; i < quantidadeGerentes; i++){
                lojas[i].possuiGerente = true;
                game.gerenteProducao(lojas[i]);
            }
        }
    }, 100);

    game.bloquearLojas();
    cardsOcultadores = document.querySelectorAll(".cardOculto");
    adicionarEscutadores();
});