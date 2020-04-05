//Variáveis compostas

let num = [5, 8, 2, 9, 3]
num.sort()

/* 
console.log(`O vetor tem os valores ${num}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let ser = num.indexOf(5)
if (ser == -1) {
    console.log(`Não foi possível encontrar o valor!`)
} else {
    console.log(`O valor está na posição ${ser}!`)
}