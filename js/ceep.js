
function mudaPosicaoCard(){

    
    var cartoes = document.querySelectorAll(".cartao");

    var btn= document.querySelector("#btnMudaLayout");

    if (btn.textContent.trim() == "Linhas") {
        
        btn.textContent = "Colunas";

        var mural = document.querySelector(".mural");
        //mural.style.flexDirection = "column";
        //mural.classList.add("mural--linha");
        mural.classList.toggle("mural--linha");

        for (let i = 0; i < cartoes.length; i++) {
            cartoes[i].style.flexBasis = "100%";
            cartoes[i].style.width = "100%";
            cartoes[i].style.display = "auto";
        }

    } else {
        btn.textContent = "Linhas";

        var mural = document.querySelector(".mural");
        //mural.style.flexDirection = "row";
        //mural.classList.remove("mural--linha");
        mural.classList.toggle("mural--linha");

        for (let i = 0; i < cartoes.length; i++) {
            cartoes[i].style.flexBasis = "auto";
            cartoes[i].style.width = "auto";
            cartoes[i].style.display = "block";
        }
    }

}

/* ANTIGO ACAO DE EXCLUIR "LIXEIRA"
var botoesLixeira = document.querySelectorAll(".opcoesDoCartao-remove");

for (let i = 0; i < botoesLixeira.length; i++) {
    botoesLixeira[i].addEventListener("click", removeCartao);
}

function removeCartao(){
    var botaoRemover = this;
    var cartao = botaoRemover.parentNode.parentNode;
    //cartao.style.display="none";
    //cartao.style.visibility="hidden";
    cartao.classList.add("cartao--some");
    setTimeout(function(){
        cartao.remove();
    },400);
} */


//var cartoes = document.querySelectorAll(".cartao");


//for (let i = 0; i < cartoes.length; i++) {
    /* const cartao = $(".cartao"); */
    /* cartao.on("change", function mudaCor(event){
        const elementoSelecionado= event.target
        const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
        if(isRadioTipo){
            cartao.style.backgroundColor = elementoSelecionado.value
        }
    });
    
    cartao.on("focusin", function(){
        cartao.addClass("cartao--focado");
    });

    cartao.on("focusout",function(){
        cartao.removeClass("cartao--focado");
    });

    cartao.on("keydown", function deixaClicarComEnter(event){
        if(event.target.classList.contains("opcoesDoCartao-opcao")
            && (event.key === 'Enter' || event.key === ' ')){
                event.target.click();
            }
    });

    cartao.on('click',function(event){
        const elementoSelecionado = event.target
        if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
            cartao.addClass("cartao--some")
            cartao.on("transitionend", function(){
                cartao.remove()
            })
        }
    }) */
//}