// =============================
// PARA LOLY ❤️
// script.js
// =============================

const mensagem = `Loly, meu amor...

Eu penso muito em tudo o que você viveu desde que sua mãe se foi, em 2024. Eu sei que uma dor como essa nunca vai embora de verdade. Ela só muda de forma. Tem dias em que a saudade aperta mais, tem dias em que parece que o coração fica mais pesado. E eu sei que não existe palavra no mundo que faça essa dor desaparecer.

Eu também não quero fingir que tenho as palavras certas. Eu não tenho. Mas eu tenho o meu amor, o meu abraço e a minha presença. E isso eu vou te entregar todos os dias.

Eu acredito de verdade que Deus cruzou os nossos caminhos na hora certa. Em meio ao luto, à dor e aos dias cinzentos, Ele fez nascer o nosso amor. E eu sinto que isso não foi por acaso. Foi um jeito de Deus cuidar de nós dois.

Eu quero que você saiba que você nunca vai precisar enfrentar tudo isso sozinha. Quando a saudade apertar, segura na minha mão. Quando você sentir vontade de chorar, chora no meu abraço. E quando você não conseguir dizer nada, eu vou entender o seu silêncio. Eu só quero estar ao seu lado, em todos os momentos.

Loly, você é o amor da minha vida. Você é uma das maiores bênçãos que Deus colocou no meu caminho. Eu amo o seu coração, o seu jeito, a sua força e até as suas fragilidades, porque elas fazem parte de quem você é. E eu quero passar a minha vida inteira te amando, te cuidando e te respeitando.

Eu não sei o que o futuro reserva pra gente, mas eu sei de uma coisa: enquanto eu estiver aqui, você sempre terá alguém para caminhar ao seu lado. Alguém que vai celebrar os seus sorrisos, enxugar as suas lágrimas e lembrar todos os dias o quanto você é amada.

Eu te amo muito. Mais do que eu consigo explicar em palavras. E vou fazer questão de demonstrar esse amor todos os dias, porque você merece se sentir amada, acolhida e segura.

Nunca se esqueça: você não está sozinha. Você tem a mim. E vai ter sempre.`;

const typing = document.getElementById("typing");
const assinatura = document.getElementById("signature");
const botao = document.getElementById("playAudio");
const audio = document.getElementById("audio");

let indice = 0;

function escrever() {

    if (indice < mensagem.length) {

        typing.innerHTML += mensagem.charAt(indice);

        indice++;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        let velocidade = 28;

        const letra = mensagem.charAt(indice);

        if (letra === "." || letra === "!" || letra === "?") {
            velocidade = 250;
        }

        if (letra === "\n") {
            velocidade = 120;
        }

        setTimeout(escrever, velocidade);

    } else {

        assinatura.style.opacity = "1";

        botao.style.display = "block";

    }

}

window.onload = () => {

    setTimeout(() => {

        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(escrever, 1500);

    }, 5000);

};

botao.addEventListener("click", () => {

    audio.play();

    botao.innerHTML = "❤️ Obrigado por ouvir";

    botao.disabled = true;

});