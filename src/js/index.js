/* 

OBJETIVO 1- quando o usuário clicar no botão de veja o trailler, devemos abrir a modal com o vídeo do trailler

OBJETIVO 2- quando o usuário clicar no x devemos fechar a modal 


OBJETIVO 1 - quando o usuário clicar no botão de veja o trailler, devemos abrir a modal com o vídeo do trailler
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no x devemos fechar a modal
- passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
- passo 2 - dar um jeito de identificar quando o usuário clicar no x
- passo 3 - fechar modal 

*/

//- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById ("video");
const modal = document.querySelector(".modal");
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

//passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
      modal.classList.add("aberto");
      video.setAttribute("src",linkDoVideo);
});


//passo 2 - dar um jeito de identificar quando o usuário clicar no x
botaoFecharModal.addEventListener("click", () => {
//passo 3 - fechar modal 
modal.classList.remove("aberto");
video.setAttribute("src", "")
});


