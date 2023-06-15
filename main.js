const form=document.getElementById("campos");

function validaCampo(campoA){
    const campoA=campoA.split('');
    return campoA.length >= campoB;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const campoA=document.getElementById("campoA");
    if (!validaCampo(campoA.value)){
        alert("Campo A deve ser menor que Campo B")
    }

})

console.log(form);


