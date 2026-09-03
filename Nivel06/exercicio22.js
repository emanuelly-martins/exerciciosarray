// 🔴 Nível 6 — Combinando métodos
// 22. Desafio — Playlist 🎵

const musicas = ["Odres novos", "Baby", "Sutilmente", "Rude", "Sign of the times", "The first time", "I just might", "Grenade"];

// 1. includes()
console.log('Tem The first time?', musicas.includes('The first time'));

// 2. indexOf()
console.log('Posição de Grenade:', musicas.indexOf('Grenade'));

// 3. slice()
let novasmusicas = musicas.slice(0, 4);
console.log(novasmusicas);

// 4. splice()
musicas.splice(3, 1);
console.log(musicas);

// 5. sort()
musicas.sort();
console.log(musicas);

// 6. reverse()
musicas.reverse();
console.log(musicas);

// 7. join()
const frase2 = musicas.join(' ');
console.log(frase2);
