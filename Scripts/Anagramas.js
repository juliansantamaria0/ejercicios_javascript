// Función para verificar si dos palabras son anagramas
function esAnagrama(str1, str2) {
    // Convertir a minúsculas
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Verificar si las longitudes son diferentes
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Contar frecuencia de letras en str1
    const frecuencia = {};
    for (let char of str1) {
        frecuencia[char] = (frecuencia[char] || 0) + 1;
    }
    
    // Restar frecuencia de letras en str2
    for (let char of str2) {
        if (!frecuencia[char]) {
            return false;
        }
        frecuencia[char]--;
    }
    
    // Verificar que todas las frecuencias sean 0
    return Object.values(frecuencia).every(count => count === 0);
}

// Obtener palabras del usuario usando prompt
const palabra1 = prompt("Ingrese la primera palabra:");
const palabra2 = prompt("Ingrese la segunda palabra:");

// Validar que las entradas no sean nulas o vacías
if (palabra1 && palabra2 && palabra1.trim() !== "" && palabra2.trim() !== "") {
    // Verificar si son anagramas y mostrar resultado con alert
    if (esAnagrama(palabra1, palabra2)) {
        alert(`"${palabra1}" y "${palabra2}" son anagramas.`);
    } else {
        alert(`"${palabra1}" y "${palabra2}" no son anagramas.`);
    }
} else {
    alert("Por favor, ingrese dos palabras válidas.");
}