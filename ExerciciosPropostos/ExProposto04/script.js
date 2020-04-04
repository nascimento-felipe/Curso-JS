function tabuada() {
    var n = document.getElementById('num')
    var list = document.getElementById('list')

    if (n.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var i = 0
        var n = Number(n.value)
        while (i <= 10) {
            
            var linhaTab = n * i
            var li = document.createElement('li')
            li.innerHTML = `${n} * ${i} = ${linhaTab}`
            list.appendChild(li)
            i++

        }
    }
}