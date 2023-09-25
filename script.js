function resolverSistema() {
    // Obtendo os valores dos coeficientes das equações
    const a1 = parseFloat(document.getElementById('a1').value);
    const b1 = parseFloat(document.getElementById('b1').value);
    const c1 = parseFloat(document.getElementById('c1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    const b2 = parseFloat(document.getElementById('b2').value);
    const c2 = parseFloat(document.getElementById('c2').value);

    // Verificando se os valores são números válidos
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(a2) || isNaN(b2) || isNaN(c2)) {
        document.getElementById('resultado').textContent = "Por favor, insira números válidos em todas as caixas de entrada.";
        return;
    }

    // Calculando o determinante do sistema
    const determinante = a1 * b2 - a2 * b1;

    // Limpando a lista de passos
    const passosLista = document.getElementById('passosLista');
    passosLista.innerHTML = "";

    // Adicionando os passos ao HTML
    function adicionarPasso(passo) {
        const item = document.createElement('li');
        item.textContent = passo;
        passosLista.appendChild(item);
    }

    // Verificando se o determinante é zero (sistema sem solução única)
    if (determinante === 0) {
        document.getElementById('resultado').textContent = "O sistema não tem uma solução única.";
        adicionarPasso("O determinante é igual a 0, o sistema não tem uma solução única.");
    } else {
        // Calculando as soluções usando a regra de Cramer
        const x = (c1 * b2 - c2 * b1) / determinante;
        const y = (a1 * c2 - a2 * c1) / determinante;
        document.getElementById('resultado').textContent = `x = ${x}, y = ${y}`;
        adicionarPasso("Calculando o determinante:");
        adicionarPasso(`D = (a1 * b2) - (a2 * b1) = (${a1} * ${b2}) - (${a2} * ${b1}) = ${determinante}`);
        adicionarPasso("Calculando x usando a regra de Cramer:");
        adicionarPasso(`x = (c1 * b2 - c2 * b1) / D = (${c1} * ${b2} - ${c2} * ${b1}) / ${determinante} = ${x}`);
        adicionarPasso("Calculando y usando a regra de Cramer:");
        adicionarPasso(`y = (a1 * c2 - a2 * c1) / D = (${a1} * ${c2} - ${a2} * ${c1}) / ${determinante} = ${y}`);
    }
    
    // Limpando os campos de entrada
    document.getElementById('a1').value = "";
    document.getElementById('b1').value = "";
    document.getElementById('c1').value = "";
    document.getElementById('a2').value = "";
    document.getElementById('b2').value = "";
    document.getElementById('c2').value = "";
}