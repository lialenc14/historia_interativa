const content = document.getElementById("content")

if (window.location.search == ""){
    window.location.href="?step=0"
}

const historia = [
    {
        message: "Você sai de casa e precisa escolher entre ir na padaria primeiro, ou ir direto para o trabalho. Se escolher ir pra padaria vá para {}, se preferir ir pro trabalho vá para {}",
        options: [1, 2]
    },
    {
        message: "Você vai à padaria e está fechada. Você chora.",
        options: []
    },
    {
        message: "Você vai ao trabalho sem café. Você chora. Só te resta voltar pra casa, vá para {}.",
        options: [3]
    },
    {
        message: "Você volta pra casa.",
        options: []
    }
]

function getStep(){
    const urlParams = new URLSearchParams(window.location.search);
    let step = urlParams.get('step');
    step = parseInt(step);
    return historia[step]
}

window.addEventListener("load", () =>{
    const passo = getStep();
    let mensagem = passo.message;
    for (option of passo.options){
        const a = `<a href='?step=${option}'>${option}</a>`
        mensagem = mensagem.replace("{}", a)
    }

    const p = document.createElement("p");
    p.innerHTML = mensagem

    content.appendChild(p)
    
})