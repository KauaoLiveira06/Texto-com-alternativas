const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "O que você acha de começarmos a entender o racismo a partir de uma história? Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial... (É importante que você seja fiel com seu posicionamento até o fim das alternativas, seja ele positivo ou não!)",
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
                afirmacao: "Com a falta de apoio, Jorlan deixa de acreditar na possibilidade de acabar com o racismo."
            }
            
        ]
    },
    {
        enunciado: "Quais atitudes você acha que Jorlan poderia tomar para começar essa mudança?",
        alternativas: [
            {
                texto: "Ele pode começar com campanhas educativas sobre o racismo, buscando apoio e suporte de sindicatos.",
                afirmacao: "Sem pensar duas vezes, finalmente inicia campanhas para começar o projeto."
            },
            {
                texto: "Não tem nenhuma chance disso dar certo, qualquer atitude não passa de um esforço em vão, nenhuma instituição irá aceitar a proposta.",
                afirmacao: "Jorlan começa a se tornar uma pessoa preconceituosa e sua vida começa a ter problemas sociais."
            }

        ]
    },
    {
        enunciado: "O que você pensa e entende sobre o racismo?",
        alternativas: [
            {
                texto: "Absurdo! Julgar e discriminar uma vida só pela cor de sua pele? Quem faz isso não possui amor nem por si próprio, alguém extremamente inflexível e sem ética.",
                afirmacao: "Seu jeito de pensar de expandiu para familiares e amigos, conseguiu melhorar a base da educação nas escolas, disciplinando os alunos sobre o racismo."
            },
            {
                texto: "Eu acho uma total frescura das pessoas que sofrem com isso, é só relevar essa 'discriminação' e seguir em frente!",
                afirmacao: "Acaba sendo preso por discriminação em flagrante, após fazer comentários racistas perto de um polícial em um mercado."
            }
            
        ]
    },
    {
        enunciado: "Você acredita que Jorlan deveria se preocupar com isso?",
        alternativas: [
            {
                texto: "Com certeza! Não será fácil, mas graças a sua atitude, agora podemos lutar e buscar acabar com o preconceito racial.",
                afirmacao: "Jorlan se torna um marco em seu país, sua influência aumentou, e a segurança social melhorou!... Meus parabéns pela sua escolha, você o guiou para o melhor caminho!"
            },
            {
                texto: "Achei desnecessário, deveria ter deixado pra lá essa história de amigos. Sabemos que no mundo há pessoas que não mudam de qualquer jeito.",
                afirmacao: "Após 3 anos de prisão, Jorlan é solto, porém se envolve em mais brigas por causa de seu racismo, se envolvendo em uma luta armada, sendo baleado e levado ao Hospital... Suas escolhas o levaram para o pior caminho, se você não mudar, você é o próximo!"
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
    caixaPerguntas.textContent = "Aos 14 anos, Jorlan enfrenta o racismo desde criança. Criado por pais que o ensinaram a valorizar sua identidade, ele testemunha um episódio de discriminação na escola e decide intervir, defendendo seus amigos e promovendo a igualdade racial...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();