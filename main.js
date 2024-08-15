const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "O que você acha de começarmos a entender o racismo a partir de uma história? Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial...",
        alternativas: [
            {
                texto: "Continuar",
            }
            
        ]
    },
    {
        enunciado: "Você concorda com as ideias e o posicionamento de Jorlan?",
        alternativas: [
            {
                texto: "Sim, Há anos esse assunto não apresentava esperança, e agora pode ser resolvido.",
                afirmacao: "Jorlan se motiva e luta ainda mais para o fim do racismo no mundo."
            },
            {
                texto: "Não, acho que desistir disso é a melhor opção, é ele contra o mundo, isso não dará certo.",
                afirmacao: "Jorlan deixa de acreditar na possibilidade de acabar com o racismo."
            }
            
        ]
    },
    {
        enunciado: "Quais atitudes você acha que Jorlan poderia tomar para começar essa mudança?",
        alternativas: [
            {
                texto: "Ele pode começar com campanhas educativas sobre o racismo, buscando apoio e suporte de sindicatos.",
                afirmacao: "Resultado 05"
            },
            {
                texto: "Não tem nenhuma chance disso dar certo, qualquer atitude não passa de um esforço em vão.",
                afirmacao: "Resultado 06"
            }

        ]
    },
    {
        enunciado: "O que você pensa sobre o racismo?",
        alternativas: [
            {
                texto: "Absurdo! Julgar e discriminar uma vida só pela cor de sua pele? Quem faz isso não possui amor nem por si próprio, alguém extremamente inflexível e sem ética.",
                afirmacao: "Resultado 07"
            },
            {
                texto: "Eu acho uma total frescura das pessoas que sofrem com isso, é só relevar essa 'discriminação' e seguir em frente!",
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
    caixaPerguntas.textContent = "Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();