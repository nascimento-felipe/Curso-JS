let array = []
let res = document.querySelector('div#res')

function comparar(a, b) {
    return a - b
}

function adicionar() {

    let num = document.getElementById('num')
    let n = Number(num.value)

    if (array.indexOf(n) != -1 || n > 100 || n < 1 || num.value.length == 0) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        array.push(n)

        let selec = document.querySelector('select#sec')
        let op = document.createElement('option')
        op.text = `Valor ${n} adicionado.`
        selec.appendChild(op)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    res.innerHTML = ''

    //ADIÇÃO DO PARÁGRAFO E DA LÓGICA QUE DIZ QUANTOS NÚMEROS TEM NO TOTAL.
    let tamAr = Number(array.length)
    res.innerHTML += `<p>Ao todo, temos ${tamAr} números cadastrados. </p>`

    //ADIÇÃO DO PARÁGRAFO E DA LÓGICA QUE DIZ QUAL O MAIOR NÚMERO.
    array.sort(comparar)
    let maior = array[Number(array.length) - 1]
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

    //ADIÇÃO DO PARÁGRAFO E DA LÓGICA QUE DIZ QUAL O MENOR NÚMERO.
    res.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`

    //ADIÇÃO DO PARÁGRAFO E DA LÓGICA QUE DIZ A SOMA TOTAL.
    let s = 0
    for (let i in array) {
        s += array[i]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${s}.</p>`

    //ADIÇÃO DO PARÁGRAFO E DA LÓGICA QUE DIZ A SOMA TOTAL.
    res.innerHTML += `<p>A média dos valores digitados é ${s/array.length}.</p>`
}