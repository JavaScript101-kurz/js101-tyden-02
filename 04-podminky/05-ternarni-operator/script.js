console.log('%c Ternární operátor ', 'background:black;color:yellow;');

/*
Syntaxe:
podmínka ? hodnotaAno : hodnotaNe
*/

const vek = 23;
let napoj = '';

// klasická podmínka
if (vek >= 18) {
  napoj = 'pivo';
} else {
  napoj = 'limonáda';
}

// můžeme zapsat pomocí ternárního operátoru
napoj = vek >= 18 ? 'pivo' : 'limonáda';

console.log(napoj);


// ternární operátor lze použít i uvnitř jiných výrazů
const maRidicak = false;
console.log(`Alena pojede ${ maRidicak ? 'autem' : 'raději na kole' }.`);
