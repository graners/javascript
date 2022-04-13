function comparaNumeros(num1, num2) {
    let mensagem = `Os números ${num1} e ${num2} `
    let soma = num1 + num2

    if (num1 === num2) {
        mensagem += "são iguais."
    } else {
        mensagem += "não são iguais."
    }

    mensagem += ` Sua soma é ${soma} que é `

    if (soma < 10) {
        mensagem += "menor que 10 e menor que 20."
    } else if (soma == 10) {
        mensagem += "igual a 10 e menor que 20."
    } else if (soma < 20) {
        mensagem += "maior que 10 e menor que 20."
    } else if (soma == 20) {
        mensagem += "maior que 10 e igual a 20."
    } else {
        mensagem += "maior que 10 e maior que 20."
    }

    alert(mensagem)
}

let num1 = Number(prompt("Digite um valor: "))
let num2 = Number(prompt("Digite outro valor: "))

comparaNumeros(num1, num2)