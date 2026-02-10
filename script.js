const botao = document.getElementById("btn");
const imagem = document.getElementById("pokemon");

botao.addEventListener("click", ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/8")
    .then(resposta => resposta.json())
    .then(dados => {
        imagem.src = dados .sprites.front_default;
    })
})