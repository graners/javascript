// const alunos = [
//     {
//         nome: "Maria",
//         nota: 10,
//         turma: "1B"
//     },
//     {
//         nome: "João",
//         nota: 5,
//         turma: "2B"
//     },
//     {
//         nome: "Olivia",
//         nota: 8,
//         turma: "1B"
//     },
//     {
//         nome: "Davi",
//         nota: 3,
//         turma: "1C"
//     }
// ]


// function alunosAprovados(arrei, media){
//     let aprovados = []

//     for (item of arrei){
//         // if(item.nota >= media) {
//         //     aprovados.push(item.nome)
//         // }

//         // object destructing: selecionar somente as propriedades que serão de fato utilizadas
//         const {nota, nome} = item
//         if(nota >= media) {
//             aprovados.push(nome)
//         }
//     }

//     return aprovados
// }

// console.log(alunosAprovados(alunos, 5))


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Jade",
    idade: 13
}

const pessoa2 = {
    nome: "Maria",
    idade: 56
}

const animal = {
    nome: "Meg",
    idade: 5,
    raca: "Border Collie"
}

console.log(calculaIdade.apply(pessoa2, [30]))