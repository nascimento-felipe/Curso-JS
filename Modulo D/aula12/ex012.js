//Condições if() e else parte 2

var idade = 19
console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log(`e não pode votar`)
} else {
    if (idade < 18 || idade > 65) {
        console.log(`e o voto é opcional`)
    } else {
        console.log(`e o voto é obrigatório`)
    }
}