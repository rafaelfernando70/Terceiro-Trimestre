// Referências ao formulário e elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Evento para capturar o envio do formulário
frm.addEventListener("submit", (e) => {

    // Obtém valores digitados
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);

    // Calcula entrada (50% do preço) e parcelas (restante dividido por 12)
    const entrada = preco * 0.50;
    const parcela = (preco * 0.50) / 12;

    // Exibe as respostas na página
    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

    // Evita o envio do formulário (recarregar a página)
    e.preventDefault();
});