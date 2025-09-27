// Función para verificar si una secuencia de salida de frutas es posible dada una secuencia de entrada.
function frutaEmpacadaCorrectamente(entrada, salida) {
    if (entrada.length !== salida.length) {
        return false;
    }
    
    let stack = [];
    let inputIndex = 0;
    
    for (let fruit of salida) {
        if (stack.length > 0 && stack[stack.length - 1] === fruit) {
            stack.pop();
        } else {
            while (inputIndex < entrada.length && entrada[inputIndex] !== fruit) {
                stack.push(entrada[inputIndex]);
                inputIndex++;
            }
            if (inputIndex < entrada.length && entrada[inputIndex] === fruit) {
                stack.push(entrada[inputIndex]);
                stack.pop();
                inputIndex++;
            } else {
                return false;
            }
        }
    }
    
    return true;
}

// Interacción con el usuario
function verificarFrutas() {
    // Pedir entrada al usuario
    let entradaStr = prompt("Ingresa las frutas de entrada separadas por comas (ejemplo: manzana,banana,kiwi):");
    let salidaStr = prompt("Ingresa las frutas de salida separadas por comas (ejemplo: kiwi,banana,manzana):");
    
    // Convertir las entradas en arrays, eliminando espacios
    let entrada = entradaStr.split(',').map(item => item.trim());
    let salida = salidaStr.split(',').map(item => item.trim());
    
    // Verificar la secuencia
    let resultado = frutaEmpacadaCorrectamente(entrada, salida);
    
    // Mostrar resultado
    alert(resultado ? "La secuencia de salida es válida." : "La secuencia de salida no es válida.");
}

// Ejecutar la función al cargar la página (puedes llamarla desde un boton o evento)
verificarFrutas();