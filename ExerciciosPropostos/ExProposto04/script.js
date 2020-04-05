function tabuada() {
    let n = document.getElementById('num')
    let list = document.getElementById('list')

    if (n.value.length == 0) {
        alert('Por favor, digite um número!')

    } else {

        let num = Number(n.value)
        list.innerHTML = ''

        for (let i = 0; i <= 10; i++) {

            let option = document.createElement('option')
            option.text = `${num} X ${i} = ${num * i}`
            list.appendChild(option)

        }
    }
}