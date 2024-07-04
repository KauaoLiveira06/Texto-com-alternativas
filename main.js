const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativas 1",
            "Alternativas 2"
        ]
    },
    {
        enunciado: "Perguntas 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Perguntas 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Perguntas 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Perguntas 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]

let atual = 0 
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraPergunta();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}