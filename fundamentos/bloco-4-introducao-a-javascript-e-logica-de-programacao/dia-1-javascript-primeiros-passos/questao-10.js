const custo = 100;
const valorVenda = 200;
const imposto = 0.2;
const quantidadeProdutos = 1000;
const impostoSobreOCusto = custo * imposto;
if (custo < 0 || valorVenda < 0) {
  console.log('ERRO! \n Valor inválido')
}

let custoTotal = (custo + impostoSobreOCusto) * quantidadeProdutos;
console.log(custoTotal)


let lucro = (valorVenda * quantidadeProdutos) - custoTotal;

console.log('O lucro foi de ' + lucro)
