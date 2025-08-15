const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submir", (e) => {
    const quilo = Number(frm.inQuilo.Value);
    const consumo = Number(frm.inConsumo.value);

    const valor = (quilo / 1000) * consumo;
    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
    
    e.preventDefault();
});