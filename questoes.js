
// Questão 01
function exibirFrutas(){
    let frutas = ["maçã", "banana"];

    frutas.push("laranja");

    console.log("Questão 01: ")
    console.log(frutas)
}

// Questão 02
function exibirNumeros(){
    let numeros = [1,2,3,4];

    const removido = numeros.pop();

    console.log("\nQuestão 02: ")

    console.log("O item removido é " + removido)

    console.log("A lista atualizada é: \n" + numeros)
}


// Questão 03
function exibirAnimais(){
    let animais = ["gato", "cachorro"];

    animais.unshift("passaro");

    console.log("\nQuestão 03: ")
    console.log(animais);
}

//Questão 04
function exibirCores(){
    let cores = ["vermelho", "verde", "azul"];

    cores.shift();

    console.log("\nQuestão 04: ")
    console.log(cores);
}

// Questão 05

function exibirCarros(){
    let carros = ["Fiat", "Ford", "Chevrolet"];

    carros.splice(1, 0, "Volksvagem");
    console.log("\nQuestão 05: ")
    console.log(carros);
}

// Questão 06

function exibirLetras(){
    let letras = ["a", "b", "c", "d", "e"];

    let filtro = letras.slice(1,4);
    console.log("\nQuestão 06: ")
    console.log(filtro);
    }

// Questão 07

function exibirNumerosDobrados(){
    let numeros = [1,2,3,4,5,6]
    console.log("\nQuestão 07: ")
    console.log("Numero / Resultado * 2")
    numeros.forEach(resultado => {
        console.log(resultado + " = " + resultado * 2)
    });
}

// Questão 08

function exibirIdades(){
    let idades = [12, 18, 25, 30, 15];

    let maiores = idades.filter(idades => (idades >= 18));
    console.log("\nQuestão 08: ")
    console.log(maiores);

    let dobro = maiores.map(idade => idade * 2);

    console.log(dobro);

}

exibirFrutas();
exibirNumeros();
exibirAnimais();
exibirCores();
exibirCarros();
exibirLetras();
exibirNumerosDobrados();
exibirIdades();
