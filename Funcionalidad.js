function SoloNumeros(Caracter){
    Caracter.value = Caracter.value.replace(/[^0-9]/g, '');
}

function SoloUna(Caracter){
    if(Caracter.value.length > 1){
        Caracter.value = Caracter.value.slice(-1).replace(/[^A-Z]/g, '');
    } else{
        Caracter.value = Caracter.value.replace(/[^A-Z]/g, '');
    }
}

function Verificar(){
    if(document.getElementById("Numero").value != "" && document.getElementById("Letra").value != ""){
        let Entero = parseInt(document.getElementById("Numero").value, 10);
        let Letra = document.getElementById("Letra").value;
        let Arreglo = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        if(Entero < 99999999){
            let Residuo = Entero % 23;
            
            if(Letra == Arreglo[Residuo]){
                alert("La letra es correcta, tu DNI es adecuado");
            } else{
                alert("La letra es incorrecta, tu letra es: " + Arreglo[Residuo]);
            }
        } else{
            alert("DNI muy largo")
        }
    } else{
        alert("Llena ambos campos");
    }
    
    
}