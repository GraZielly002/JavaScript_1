//Comparação Não boleanos
//falsy
//undefined
//null
//0
//false
//""
//NaN

//Truthy


let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); //retorna o vermelho porque a cor ja foi declarada primeiro 