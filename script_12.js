//if..else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00: Boa tarde!
// Caso contrário: Boa noite!

//exemplo como são 3 condições
/*if(condicao){
    // codigo a ser executado
}
else if (outraCondicao){
    // codigo a ser executado
}
else//captur as outras condiçoes que nao se encaixe nas outras{

}*/

let hora = 10;
if(hora >= 6 && hora < 12){
    console.log("Bom dia!!");
}
else if (hora >= 12 && hora < 18){
    console.log("Boa tarde!!");
}
else{
    console.log("Boa noite!!")
}