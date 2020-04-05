function contar() {

    var init = document.getElementById('inicio')
    var res = document.querySelector('div#res')
    var fim = document.getElementById('fim')
    var passo = document.querySelector('input#passo')

    if (init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'

    } else {

        var init = Number(init.value)
        var fim = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando...</br>'

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if (init < fim) { //contagem crescente
            for (var i = init; i <= fim; i += p) {
                res.innerHTML += `${i}  \u{1F449}`
            }
        } else { //contagem decrescente
            for (var i = init; i >= fim; i -= p) {
                res.innerHTML += `${i}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}