
function simularCompra() {

    // Preços dos produtos
    const classic = 22.90;
    const bacon = 27.90;
    const double = 32.90;
    const batata = 14.90;

    // Perguntar as quantidades
    let qtdClassic = Number(prompt("Quantos Byte Classic deseja?"));
    let qtdBacon = Number(prompt("Quantos Byte Bacon deseja?"));
    let qtdDouble = Number(prompt("Quantos Byte Double deseja?"));
    let qtdBatata = Number(prompt("Quantas Batatas Byte deseja?"));

    // Verificar quantidades inválidas
    if (
        !Number.isInteger(qtdClassic) || qtdClassic < 0 ||
        !Number.isInteger(qtdBacon) || qtdBacon < 0 ||
        !Number.isInteger(qtdDouble) || qtdDouble < 0 ||
        !Number.isInteger(qtdBatata) || qtdBatata < 0
    ) {
        alert("Digite apenas números inteiros iguais ou maiores que zero!");
        return;
    }

    // Calcular os valores
    let valorClassic = classic * qtdClassic;
    let valorBacon = bacon * qtdBacon;
    let valorDouble = double * qtdDouble;
    let valorBatata = batata * qtdBatata;

    // Calcular o total
    let total = valorClassic + valorBacon + valorDouble + valorBatata;

    // Verificar se nenhum produto foi selecionado
    if (
        qtdClassic === 0 &&
        qtdBacon === 0 &&
        qtdDouble === 0 &&
        qtdBatata === 0
    ) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    // Exibir o resultado
    alert(
        "RESUMO DA COMPRA - BYTE BURGER\n\n" +

        "Byte Classic: " + qtdClassic +
        " unidades - R$ " + valorClassic.toFixed(2) + "\n\n" +

        "Byte Bacon: " + qtdBacon +
        " unidades - R$ " + valorBacon.toFixed(2) + "\n\n" +

        "Byte Double: " + qtdDouble +
        " unidades - R$ " + valorDouble.toFixed(2) + "\n\n" +

        "Batata Byte: " + qtdBatata +
        " unidades - R$ " + valorBatata.toFixed(2) + "\n\n" +

        "TOTAL DA COMPRA: R$ " + total.toFixed(2)
    );
}
