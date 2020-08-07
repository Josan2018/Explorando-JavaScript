aluno = {
    nome: new String(),
    idade: new Number(),
    classe: String,
    $curso: String,
    sexo: undefined,
    periodo: String,

    setNome: (nome) => {
        aluno.nome = nome;
    },

    getNome: () => {
        return aluno.nome;
    }
};

var ero = Object.create(aluno, aluno.prototype)
var jo = Object.create(aluno, aluno.prototype)

ero.nome = 'ero'
jo.nome = 'jo'


var cadastro = {
    alunos: [],
    criarAluno: (nome, idade, sexo) => {
        x = Object.create(aluno, aluno.__proto__)
        x.nome = nome
        x.idade = idade;
        x.sexo = sexo;
        cadastro.alunos.push(x)
    }
}

cadastro.criarAluno('ero', 30, 'M')
cadastro.criarAluno('ero', 10, 'M')
ero = cadastro.alunos[0]
ero.nome = 'Jo'

console.log(cadastro, ero)







// professor = {
//     nome: String,
//     idade: undefined,
//     curso: String,
//     nivelAcademico: String,
//     DiscplinaA: String,
//     sexo: String

// };

// var cadastro;


// ero = cadastro.criarAluno('Ero', 25, 'M')
// jo = cadastro.criarAluno('Jo', 24, 'M')
// cadastro.inscreverAluno(ero)
// //cadastro.inscreverAluno(jo)

// sala = {
//     periodo: undefined,
//     nTotaldeAlunos: undefined,
// };

// turma = {
//     periodo: Number,
//     classe: undefined,
//     curso: undefined,
//     nAlunos: undefined,
//     professor: undefined,
//     alunos: undefined,
// };








// console.log(cadastro.alunos)

// function delAluno(a) {
//     for (al in aluno) {
//         if ((aluno[al] == a)) delete aluno[al]
//     }

// };


// function mostrarAluno(Aluno) {
//     for (i in Aluno) {
//         console.log(Aluno["nome"]);
//     }

// }