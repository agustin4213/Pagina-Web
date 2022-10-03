let edad;
let sexo;

edad = prompt("Introduce tu edad:");
sexo = prompt("Introduce tu sexo(masculino o femenino)")

switch (sexo) {
    case "masculino":
        if (edad >=18) {
            alert ("Puedes entrar, si eres mayor de edad.");
        } else {
            alert("No puedes entrar, si eres menor de edad.");
        }
        break;
    case "femenino":
        if (edad >-20) {
            alert("Puedes entrar, si eres mayor de edad.");
        }  else{
            alert("No puedes entrar, no tenes la edad necesaria.");
        }
     break;
     default:
        alert("!Por favor ingresa tu edad con valor numerico y tu sexo en minuscula como femenino o masculino segun corresponda.!")
}
       

