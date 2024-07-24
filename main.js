const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "O que vc acha de começarmos a entender o racismo a partir de uma história onde você é o protagonista? Aos 14 anos, você enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, você testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial.",
        alternativas: [
            "Você se engaja em atividades e protestos contra o racismo, inspirando outros jovens e construindo uma comunidade de apoio.",
            "Você deixa isso de lado, é um caminho difícil e sem garantia de que irá dar certo, pois há muitas pessoas com mente fechada e que irão demontrar resitência."
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
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();