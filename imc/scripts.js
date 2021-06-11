
var imc_result=document.getElementById("imc_result");
var estatura_component=document.getElementById("estatura_content");
var masa_component=document.getElementById("peso_content");

function calcular(){
    //extraemos las variables
    imc_result.innerHTML="";
    let estatura=estatura_component.value;
    let masa=masa_component.value;
    console.log(estatura,masa);
    if(estatura===""|| masa===""){
        alert("Ingrese todos los datos para el calculo IMC");
    }else{
            //convertimos la cadena en flotante
        
        estatura=parseFloat(estatura); 
        masa=parseFloat(masa);
        if(!isNaN(estatura) && !isNaN(masa)){
            let res=masa/Math.pow(estatura,2);
            imc_result.innerHTML="<strong>El valor del IMC es: "+ res.toFixed(3)+"</strong>";
            /*
            Peso inferior al normal: Menos de 18.5
            Peso superior al normal: 25.0 – 29.9
            Obesidad: Más de 30.0
            */
            if(res<18.5){
                imc_result.innerHTML+="<p> Peso inferior al normal</p>";
                }else{
                    if(res<25){
                        imc_result.innerHTML+="<p> Peso Normal</p>";
                    }else{
                        if(res<30){
                            imc_result.innerHTML+="<p> Peso Superior al Normal</p>";
                        }else{
                            imc_result.innerHTML+="<p> Obesidad </p>";   
                        }
                    }
                }
        }else{
            alert("Datos proporcionados erroneamente");
        }
    

}}

function limpiar(){
    imc_result.innerHTML="";
    estatura_component.value="";
    masa_component.value="";
    $(".alert").alert();
}