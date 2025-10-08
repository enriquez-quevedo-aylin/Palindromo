import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById("verificar").addEventListener("click",function(){
    let texto = document.getElementById("texto").value; 
    texto = texto.trim(); 
    if(texto == ""){
        //alert("Por favor escribe una frase o palabra "); 
        resultado.style.display = "block";
        resultado.textContent = "Solo se permiten letras y espacios.";
        resultado.className = "palindromo";
        return; 
        
    }
    let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
    if(!soloLetras.test(texto)){
        //alert("Solo se permiten letras y espacios")
        resultado.style.display = "block";
        resultado.textContent = "Solo se permiten letras y espacios.";
        resultado.className = "no-palindromo";
        
        return; 
    }
    texto = texto.toLowerCase(); 

    let limpio = ""; 
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (
            (letra >= "a" && letra <= "z") || 
            letra === "á" || letra === "é" || letra === "í" || 
            letra === "ó" || letra === "ú" || letra === "ü" || letra === "ñ"
        ) {
        limpio = limpio + letra;
    
  }

    }

    let invertido = ""; 
    for(let i = limpio.length -1 ; i>= 0 ; i --){
        invertido = invertido +limpio[i]; 

    }
    if(limpio == invertido){
        //alert("es un palindromo "); 
         resultado.style.display = "block";
        resultado.textContent = "Es un palindromo";
        resultado.className = "correcto";

    }else {
       // alert("No es un palindromo, intentalo de nuevo ")
         resultado.style.display = "block";
        resultado.textContent = "No es un palindromo";
        resultado.className = "no-correcto";
    }
});