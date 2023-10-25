const displayDinheiro = document.getElementById("money")
let dinheiroAtual = localStorage.getItem("dinheiro");

window.addEventListener("load", function(){
    if(localStorage.getItem("dinheiro")){
        displayDinheiro.textContent = "R$ " + dinheiroAtual;
    }else {
        displayDinheiro.textContent = "R$ " + 0;
    }

    setInterval(function(){
        if(localStorage.getItem("dinheiro")){
            dinheiroAtual = localStorage.getItem("dinheiro");
            displayDinheiro.textContent = "R$ " + dinheiroAtual;
        }
    }, 1000)
})