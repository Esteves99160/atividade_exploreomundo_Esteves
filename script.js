const botao = document.getElementById("tema");
const icone = botao.querySelector("i");

const salvaTema = localStorage.getItem("theme");

//Se o tema for escolhido na memória do localStorage for tema escuro 

if (salvaTema === 'dark'){
    //adiciona a class "dark-mode" no corpo da página
    document.body.classList.add("dark-mode");
    //trocar o ícone de lua (fa-moon) para um ícone de sol 
    icone.classList.replace("fa-moon", "fa-sun");
}

//quando clicar no botao ele vai executar o código abaixo

botao.addEventListener("click", () => {
    //

    document.body.classList.toggle("dark-mode");
    //verificar se a página ficou ocom o modo escuro ativado
    const dark = document.body.classList.contains("dark-mode");

    //se o modo escuro estiver ativado 
    if (dark){
        icone.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        //troca o de sol de volta para lua
        icone.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light"); 
    }
})