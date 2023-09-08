//Tipos de Funções
// Realiza uma tarefa, não devolve nada
function dizerNome(){
    console.log('Grazielly');
};

dizerNome();
// Faz um cálculo ou alteraçao é retornar algo
function MultiplicarPorDois(valor){
    return valor*2;
};
//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);
console.log(resultado);