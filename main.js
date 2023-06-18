const form=document.getElementById("campos");

function validaCampo(campoA){
    const campoA=campoA;
    if (campoA.length <= campoB) {
        alert("O Valor do Campo B é inferior ao do Campo A");
    } else {
        alert("O Valor do Campo B é maior que o do Campo A");
    }
}


form.addEventListener("submit", function(e){
    e.preventDefault();

    const campoA=document.getElementById("campoA");
    
    const campoA = document.getElementById("campoA").value;

    const campoB = document.getElementById("campoB").value;

    validaCampo(campoA, campoB);

