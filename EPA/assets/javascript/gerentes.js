const main = document.querySelector("main");
const displayDinheiro = document.getElementById("money")
let dinheiroAtual = localStorage.getItem("dinheiro");


const gerentesContratados = [];
const gerentes = [
    {
        id: 0,
        titulo: "Davi Natan",
        descricao: "Andando pela rua enquanto procurava por um novo teclado mecânico você encontra Davi. Vocês param para conversar um pouco e ele acaba te contando que está passando por um momento complicado, ele está desempregado e faria de tudo por um pouco de dinheiro, você pode oferecer uma oportunidade para ele.",
        imagemUrl: "../assets/img/homem4.png",
        elementoFisico: undefined,
        preco: 250,
        liberado: false
    },
    {
        id: 1,
        titulo: "Emelly Alon",
        descricao: "Enquanto procurava por novos desafios na internet você decide descansar um pouco para navegar pelo discord. Você encontra em um servidor a Emelly Alon, ela te conta sobre estar disposta a te ajudar em tarefas fron-end pela quantia certa. Você tem o suficiente para que ela possa te ajudar?",
        imagemUrl: "../assets/img/mulher.png",
        elementoFisico: undefined,
        preco: 500,
        liberado: false
    },
    {
        id: 2,
        titulo: "Pedro Lira",
        descricao: "Em uma data comemorativa você vai até um evento familiar onde lá se diverte muito enquanto enche a barriga de comida boa. Você encontra Pedro Lira, um primo que se interessou em programação recentemente, ele te pergunta se pode fazer um estagio na sua empresa de back-end. Você não duvida de suas capacidades, mas duvida do seu bolso. Você pode contrar ele?",
        imagemUrl: "../assets/img/homem.png",
        elementoFisico: undefined,
        preco: 700,
        liberado: false
    },
    {
        id: 3,
        titulo: "Edisom Coelho",
        descricao: "Você já vem trabalhando em um website pessoal a um bom tempo, você passou por muitas dificuldades, porém, conseguiu superá-las bravamente. Após você liberar seu novo website um antigo colega da época de RPG acabou te encontrando por acaso, ele se dispôs a trabalhar no seu website, procurando por erros, servindo de suporte aos usuarios etc. Mas, para isso ele precisa de um salário (ele tem 6 filhos e precisa sustenta-los). Você pode ajudar um pobre pai desempregado?",
        imagemUrl: "../assets/img/homem2.png",
        elementoFisico: undefined,
        preco: 1500,
        liberado: false
    },
    {
        id: 4,
        titulo: "Gabriel Paiva",
        descricao: "Enquanto trabalhava em um software de validação de clientes para seu banco você fica sabendo que um curriculo com um nome muito familiar foi deixado na sua empresa. Você analisa melhor o curriculo e percebe que ali estava Gabriel Paiva, um grande talento na época escolar, você mais que depressa decide que vai contratar esse profissional, só precisa do salário adequado para isso. Você tem o salário certo para Gabriel Paiva?",
        imagemUrl: "../assets/img/homem3.png",
        elementoFisico: undefined,
        preco: 3000,
        liberado: false
    },
    {
        id: 5,
        titulo: "Gabriel Rodrigues",
        descricao: "Há um tempo você vem hackeando pessoas em fóruns anonimos do 4chan, seus feitos ganham grande destaque na comunidade. Um dia um jovem hacker lhe envia um email se oferecendo para seus ataques. Ele diz: 'pelo dinheiro certo posso te ajudar a realizar qualquer ataque'. Você reconhece a fama dele na comunidade e sabe que ele pode te ajudar. Você tem o dinheiro certo?",
        imagemUrl: "../assets/img/homem4.png",
        elementoFisico: undefined,
        preco: 5000,
        liberado: false
    },
    {
        id: 6,
        titulo: "Heloisa Vincentini",
        descricao: "Após um longo dia de trabalho dentro da microsoft, você vai ver antigos amigos em um parque próximo à sua casa. Lá você encontra Adrian Vincentini junto de sua namorada, Heloisa Vincentini, papo vai, papo vem, ela questiona se você tem alguma oportunidade de emprego para ela dentro da microsoft e em seguida mostra seu portifólio de programadora. Você se impressiona pois nem se quer sabia que ela gostava de programar, mas os projetos dela são muito bons. Você tem alguém para te ajudar?",
        imagemUrl: "../assets/img/mulher2.png",
        elementoFisico: undefined,
        preco: 25000,
        liberado: false
    },
    {
        id: 7,
        titulo: "Ana Onorini",
        descricao: "Após trabalhar por anos dentro da apple você finalmente descobre que pode contratar uma estagiária para ajudar enquanto você desenvolve novos recursos para a apple. Você abre uma vaga de estagiária e uma moça jovem se candidata oferecendo seus serviços. Esse parece ser seu primeiro emprego, você precisa dela?",
        imagemUrl: "../assets/img/mulher3.png",
        elementoFisico: undefined,
        preco: 60000,
        liberado: false
    },
    {
        id: 8,
        titulo: "Amanda Dias",
        descricao: "Uma velha amiga que você conheceu no discord te reencontra em um servidor por acaso. Você conta as novidades para ela, ela mostra muito animada quando você diz ser programador, ela diz que também está trabalhando como programadora e por coincidência é na mesma empresa que a sua. Você é de um grupo um cargo acima do dela, você pode trazê-la para seu grupo caso possa pagar um salário para ela. Você pode? Ela seria de grande ajuda",
        imagemUrl: "../assets/img/mulher4.png",
        elementoFisico: undefined,
        preco: 180000,
        liberado: false
    },
    {
        id: 9,
        titulo: "Yoda",
        descricao: "Após ter sido raptado por aliens você começa a descobrir que muita das coisas que via em ficções ciêntifica são reais. Depois de muito trabalhar ao ponto de não aguentar mais digitar, você olha para o lado e vê uma mesa flutuando, era o mestre Yoda utilizando 'A força' para chamar sua atenção. Ele te oferece ajuda mas para isso precisa de uma quantidade de dinheiro para comprar um novo sabre de luz",
        imagemUrl: "../assets/img/yoda.png",
        elementoFisico: undefined,
        preco: 500000,
        liberado: false
    },
];

const game = {
    criarCards: function(gerente){
        if(!gerente.liberado){
            const areaCartao = document.createElement("section");
            const areaDescricao = document.createElement("div");
            const titulo = document.createElement("h1");
            const paragrafo = document.createElement("p");
            const imagem = document.createElement("img")
            const botao = document.createElement("button");
            
            areaCartao.classList.add("areaCartao")
            areaDescricao.classList.add("descricao");
            imagem.setAttribute("src", gerente.imagemUrl)
            
            titulo.textContent = gerente.titulo;
            paragrafo.textContent = gerente.descricao;
            botao.textContent = "Contratar R$" + gerente.preco; 
            
            areaDescricao.appendChild(titulo);
            areaDescricao.appendChild(paragrafo);
            
            areaCartao.appendChild(areaDescricao);
            areaCartao.appendChild(imagem);
            areaCartao.appendChild(botao);
            
            main.appendChild(areaCartao);
            gerente.elementoFisico = areaCartao;
        }
    },

    contratarGerente: function(gerente){
        if(dinheiroAtual >= gerente.preco){
            gerente.liberado = true;
            gerentesContratados.push(gerente);
            
            dinheiroAtual -= gerente.preco;
            displayDinheiro.textContent = "R$ " + dinheiroAtual

            localStorage.setItem("gerentesContratados", JSON.stringify(gerentesContratados));
            localStorage.setItem("gerentes", JSON.stringify(gerentes));
            localStorage.setItem("dinheiro", dinheiroAtual)
            gerente.elementoFisico.remove();
        }
    }
}

function adicionarEscutadores(){
    for(elemento of gerentes){
        if(!elemento.liberado){
            const botaoContratar = elemento.elementoFisico.querySelector("button");
            botaoContratar.addEventListener("click", function(){
                const elementoPai = this.parentElement;
                const objetoGerente = procurarGerente(elementoPai);
                
                game.contratarGerente(objetoGerente)
            })
        }
    }
}

function procurarGerente(elementoProcurador){
    for(elemento of gerentes){
        if(elemento.elementoFisico === elementoProcurador){
            return elemento;
        }
    }
}

window.addEventListener("load", function(){

    if(localStorage.getItem("gerentes")){
        gerentes.length = 0;
        const informacoesGerentesSalvas = JSON.parse(localStorage.getItem("gerentes"))
        for(elemento of informacoesGerentesSalvas){
            gerentes.push(elemento)
        }
    }

    for(elemento of gerentes){
        game.criarCards(elemento)
    }
    
    if(localStorage.getItem("dinheiro")){
        displayDinheiro.textContent = "R$ " + dinheiroAtual;
    }else {
        displayDinheiro.textContent = "R$ " + 0;
    }

    if(localStorage.getItem("gerentesContratados")){
        gerentesContratados.length = 0
        const gerentesContratadosSalvos = JSON.parse(localStorage.getItem("gerentesContratados"))
        for(elemento of gerentesContratadosSalvos){
            gerentesContratados.push(elemento)
        }
    }

    setInterval(function(){
        if(localStorage.getItem("dinheiro")){
            dinheiroAtual = localStorage.getItem("dinheiro");
            displayDinheiro.textContent = "R$ " + dinheiroAtual;
        }
    }, 1000)

    adicionarEscutadores()
})