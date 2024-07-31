const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "O que vc acha de começarmos a entender o racismo a partir de uma história onde você é o protagonista? Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial.",
        alternativas: [
            {
                texto: "Jorlan está totalmente correto com sua atitude, combatendo e defendendo seu posicionamento sobre o racismo desde criança.",
                afirmacao: "Com isso, Jorlan cresce recebendo diversos elogios e com a ideia de combate ao racismo em sua mente, criando diversas campanhas combatendo a discriminação."
            },
            {
                texto: "É melhor Jorlan deixar isso de lado, é um caminho difícil e sem garantia de que irá dar certo, pois há muitas pessoas com mente fechada e que irão demontrar resitência.",
                afirmacao: "Jorlan se desmotiva com a ideia e acaba cedendo aos ideais definidos pela sociedade."
            }
            
        ]
    },
    {
        enunciado: "Jorlan ",
        alternativas: [
            {
                texto: "Alternativa 03",
                afirmacao: "Resultado 03"
            },
            {
                texto: "Alternativa 04",
                afirmacao: "Resultado 04"
            }
            
        ]
    },
    {
        enunciado: "Perguntas 3",
        alternativas: [
            {
                texto: "Alternativa 05",
                afirmacao: "Resultado 05"
            },
            {
                texto: "Alternativa 06",
                afirmacao: "Resultado 06"
            }

        ]
    },
    {
        enunciado: "Perguntas 4",
        alternativas: [
            {
                texto: "Alternativa 07",
                afirmacao: "Resultado 07"
            },
            {
                texto: "Alternativa 08",
                afirmacao: "Resultado 08"
            }
            
        ]
    },
    {
        enunciado: "Perguntas 5",
        alternativas: [
            {
                texto: "Alternativa 09",
                afirmacao: "Resultado 09"
            },
            {
                texto: "Alternativa 10",
                afirmacao: "Resultado 10"
            }
            
        ]
    }
]

let atual = 0 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () =>  respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +  " ";
    atual++;
    mostraPergunta();
}

function mostreResultado() {
    caixaPerguntas.textContent = "O que vc acha de começarmos a entender o racismo a partir de uma história onde você é o protagonista? Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();