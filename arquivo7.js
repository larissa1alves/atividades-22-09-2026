function aplicarDesconto(valor ,porcentagem){

    return alert( valor -=valor*(porcentagem/100))
    }
function processarVenda(valorBruto){
    if (valorBruto>100){
        return aplicarDesconto(valorBruto,10)
    }
    else{
        return alert("valorBruto"+ valorBruto)
    }
}

console.log(processarVenda(101))







// 7. Crie duas funções para processar o valor de uma venda:
// a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
// desconto, retornando o valor com o desconto aplicado.
// b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
// chama internamente a função aplicarDesconto (com 10% de desconto) e
// retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
// alterações.