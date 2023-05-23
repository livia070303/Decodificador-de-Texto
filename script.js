// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
document.getElementById("bloco-retorno").style.display = "none";

let resultado = document.getElementById("resultado");

function Criptografar() {
    let palavra = document.getElementById("palavra").value;
    if(EhMinusculo(palavra) && SemAcento(palavra)) {
        var palavraCriptografada = palavra.replaceAll("e", "enter");
        palavraCriptografada = palavraCriptografada.replaceAll("i", "imes");
        palavraCriptografada = palavraCriptografada.replaceAll("a", "ai");
        palavraCriptografada = palavraCriptografada.replaceAll("o", "ober");
        palavraCriptografada = palavraCriptografada.replaceAll("u", "ufat");

        resultado.value = palavraCriptografada;
        document.getElementById("bloco-retorno").style.display = "block";
        document.getElementById("bloco-estatico").style.display = "none";
        document.getElementById("copiado").style.background = "#EFF1FA";
    } else{
        alert("Somente letras minuscúlas e sem acento!")
    }

}

function Descriptografar() {
    var palavra = document.getElementById("palavra").value;
    if(EhMinusculo(palavra) && SemAcento(palavra)) {
        var palavraDescriptografada = palavra.replaceAll("ufat", "u");
        palavraDescriptografada = palavraDescriptografada.replaceAll("ober", "o");
        palavraDescriptografada = palavraDescriptografada.replaceAll("ai", "a");
        palavraDescriptografada = palavraDescriptografada.replaceAll("imes", "i");
        palavraDescriptografada = palavraDescriptografada.replaceAll("enter", "e");

        resultado.value = palavraDescriptografada;
        document.getElementById("bloco-retorno").style.display = "block";
        document.getElementById("bloco-estatico").style.display = "none";
        document.getElementById("copiado").style.background = "#EFF1FA";

    } else{
        alert("Somente letras minúsculas e sem acento!");
    }

}
function EhMinusculo(palavra) {
    var minusculo = palavra.toLowerCase();
    return palavra === minusculo;
}
function SemAcento(palavra) {
    var semAcento = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    return semAcento === palavra;

}


function Copiar() {
    navigator.clipboard.writeText(resultado.value);
    document.getElementById("copiado").style.background = "limegreen";
    document.getElementById("copiado").innerText = "Copiado ";
}

function Limpar() {
    document.getElementById("palavra").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("bloco-estatico").style.display = "block";
    document.getElementById("bloco-retorno").style.display = "none";
}