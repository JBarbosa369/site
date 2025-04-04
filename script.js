console.log("Bom dia")
let Jeovana = false;
if(Jeovana == true){
    console.log("jeovana")
}else if(Jeovana == false){
    console.log("Mentira");
    Jeovana=true;
    console.log(Jeovana);
}

let soma = 0;
while(soma <10){
    soma = soma + 1;
    console.log(soma);
}

let valortitulo = document.getElementById("Meutitulo").innerText;
let valorparagrafo = document.getElementById("Meuparagrafo").innerText;
console.log(valortitulo);

function Alterartitulo(){
    document.getElementById("Meutitulo").innerText ="O titulo foi alterado com sucesso";
    
}

function Alterarparagrafo(){
    document.getElementById("Meuparagrafo").innerHTML = "o paragrafo foi alterado com sucesso";
    window.alert("Titulo alterado com sucesso");

}


function desfazerAlteracao(){
    document.getElementById("Meutitulo").innerText = valortitulo;
    document.getElementById("Meuparagrafo").innerText = valorparagrafo;

    

    
}