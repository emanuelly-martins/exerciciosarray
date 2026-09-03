// 🟣 Nível 5 — reverse() e sort()
// 19. Ordenando números

let numeros = [50, 10, 100, 5, 25, 1];
numeros.sort();
console.log(`Resultado errado: ${numeros}`);

// Se usarmos apenas numeros.sort():
// O JS converte para texto e ordena com string ("50", "10", "100", "5", "25", "1"), dando: [ 1, 10, 100, 25, 5, 50 ]!
// Para ordenar números corretamente em ordem crescente utilizamos:
// numeros.sort((a, b) => a -b);
// console.log(numeros);
// Resultado: [1, 5, 10, 25, 50, 100]

numeros.sort((a, b) => a -b);
console.log(`Resultado certo: ${numeros}`);
