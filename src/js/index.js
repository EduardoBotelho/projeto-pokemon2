
// 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// 2 - pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

 // 3 - identificar o clique do usuario no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //6 - remover a classe do modo-escuro do body
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    
    
    if(modoEscuroAtivo){
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }else {
    imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
