

    cartao.addEventListener("change", function mudaCor(event){
        const elementoSelecionado= event.target
        const isRadioTipo = elementoSelecionado.classList.contain('opcoesDoCartao')
        if(isRadioTipo){
            cartao.style.backgroundColor = elementoSelecionado.value
        }
    });
