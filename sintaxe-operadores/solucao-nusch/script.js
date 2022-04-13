function comparaNumeros(num1, num2) {
    // PRIMEIRA FORMA
    // const saoIguais = num1 === num2
    // const soma = num1 + num2

    // // // se a função só comparasse os números, poderia ser simples assim:
    // // if (saoIguais) {
    // //     return "São iguais"
    // //     // return serve para parar a função e retornar algo 
    // // }

    // // // como existe um return dentro do if, o return abaixo pode ficar fora do if sem precisar de um else
    // // return "Não são iguais"

    // // dá para substituir todo o if de cima para um operador terciário:
    // return saoIguais ? "São iguais" : "Não são iguais"

    // SEGUNDA FORMA
    if(!num1 || !num2) return "Digite dois números!"

    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = ''

    if(num1 !== num2) {
        saoIguais = 'não'
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2
    const compara10 = soma > 10
    const compara20 = soma > 20
    
    let resultado10 = 'menor'
    let resultado20 = 'menor'

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(10, 10))