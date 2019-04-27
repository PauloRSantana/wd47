(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click",function(){
        /* const ajudas =[
            "Bem vindo ao Ceep"
            ,"Clique no btn Linhas para mudar o layout"
        ] */

        const ajudas =[
           {conteudo:"Bem vindo ao Ceep", cor:"#F05450"}
            ,{conteudo:"Clique no btn Linhas para mudar o layout", cor:"#92C4EC"}
        ]

        ajudas.forEach(function(ajuda){
            //alert(item)
            adicionaCartaoNoMural(ajuda)
        })
    })
    btnAjuda.classList.remove('no-js')
})()