// 🔴 Nível 6 — Combinando métodos
// 20. Pesquisa de produto 🛒

let produtos = ['Arroz', 'Feijão', 'Macarrão', 'Leite', 'Café', 'Açúcar'];

// 1. includes()
console.log('Tem Café?', produtos.includes('Café'));

// 2. indexOf()
console.log('Posição de Café:', produtos.indexOf('Café'));

// 3. slice()
let novosProdutos = produtos.slice(0, 4);
console.log(novosProdutos);

// 4. splice()
produtos.splice(3, 1);
console.log(produtos);

// 5. join()
console.log(produtos.join(" "));
