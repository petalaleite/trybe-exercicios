const peça = "bispo"

switch (peça.toLowerCase()) {
  case 'bispo':
    console.log('Se move em diagonais');
    break;
  case 'rainha':
    console.log('Se move para todos os lados sem limites de casas')
    break;
  case 'cavalo':
    console.log('Se move em L');
    break;
  case 'torre':
    console.log('Se move em na horizontal e vertical sem limite de casas');
    break;
  case 'rei':
    console.log('Se move para todos os lados limitado a uma casa');
    break;
  case 'peao':
    console.log('Se movem uma casa para a frente, entretando se fora primeira jogada eles podem se mover duas casas');
    break;
}
