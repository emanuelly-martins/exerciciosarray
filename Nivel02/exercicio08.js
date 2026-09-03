// 🟡 Nível 2 — slice()
// 8. slice() não altera o original

const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
const novasFrutas = frutas.slice(1, 3);

console.log('Array original:', frutas);
console.log('Novo array fatiado:', novasFrutas);
