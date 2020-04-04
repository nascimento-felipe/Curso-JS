function contar() {

    var init = window.document.getElementById('inicio')
    var res = window.document.querySelector('div#res')
    var fim = document.getElementById('fim')
    var passo = document.querySelector('input#passo')

    if (init.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        
    } else if (passo.value == 0 || passo.value.length == 0) {
        alert('Passo inválido! Considerando PASSO = 1')

        var init = Number(init.value)
        var fim = Number(fim.value)
        var passo = 1
        res.innerHTML = 'Contando...</br>'

        if (init < fim) {
            for (var i = init; i <= fim; i += passo) {
                res.innerHTML += `${i}  `
            }
        } else {
            for (var i = init; i >= fim; i -= passo) {
                res.innerHTML += `${i}  `
            }

        }
    } else {
        var init = Number(init.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        res.innerHTML = 'Contando...</br>'

        if (init < fim) {
            for (var i = init; i <= fim; i += passo) {
                res.innerHTML += `${i}  `
            }
        } else {
            for (var i = init; i >= fim; i -= passo) {
                res.innerHTML += `${i}  `
            }

        }

    }
}