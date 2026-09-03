let alunos = [
    'Emanuelly',
    'Letícia',
    'Maria Eduarda',
    'Gabriela',
    'Pamela',
    'Paloma',
    'Kevin',
    'Anabelle',
    'Giovanna',
    'Heloisa',
];

// 1 - Verificar se um aluno existe
console.log('1 - Aluno existe?');
console.log(alunos.includes('Emanuelly'));

// 2 - Encontrar posição de um aluno
console.log('\n2 - Posição do aluno:');
console.log(alunos.indexOf('Letícia'));

// 3 - Criar uma parte da lista
console.log('\n3 - Parte da lista:');
let parteLista = alunos.slice(2, 5);
console.log(parteLista);

// 4 - Remover aluno
console.log('\n4 - Removendo aluno:');
alunos.splice(3, 1);
console.log(alunos);

// 5 - Inserir aluno
console.log('\n5 - Inserindo aluno:');
alunos.splice(2, 0, 'Pamela');
console.log(alunos);

// 6 - Ordenar alunos
console.log('\n6 - Lista ordenada:');
alunos.sort();
console.log(alunos);

// 7 - Inverter lista
console.log('\n7 - Lista invertida:');
alunos.reverse();
console.log(alunos);

// 8 - Exibir lista como texto
console.log('\n8 - Lista como texto:');
console.log(alunos.join(', '));
