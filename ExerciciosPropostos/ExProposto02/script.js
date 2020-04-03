function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''

        if (fsex[0].checked) {
            genero = 'Um homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homemBebe.png')
            } else if (idade < 21) {
                img.setAttribute('src','homemJovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                img.setAttribute('src', 'homemIdoso.png')
            }

        } else {
            genero = 'Uma mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulherBebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulherJovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulherAdulta.png')
            } else {
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }

        res.innerHTML = `${genero} com ${idade} anos. </br>`
        
        res.appendChild(img)
    }
}