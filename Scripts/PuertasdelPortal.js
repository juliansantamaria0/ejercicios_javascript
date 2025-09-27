// Funcion para encontrar el indice del primer portal "fuera de fase" (codigo unico).
function portalFueraDeFase(portales) {
    // Cuenta la frecuencia de cada codigo de portal.
    let freq = {};
    for (let char of portales) freq[char] = (freq[char] || 0) + 1;
    
    // Busca el primer código con una frecuencia de 1 y retorna su indice.
    for (let i = 0; i < portales.length; i++) {
        if (freq[portales[i]] === 1) return i;
    }
    
    // Si no se encuentra ningún codigo unico, retorna -1.
    return -1;
}

// Funcion para interactuar con el usuario y verificar los portales.
function verificarPortal() {
    let portales = prompt("Ingresa los códigos de los portales activados (solo letras minúsculas, ej: aabbc):");
    
    // Valida la entrada del usuario (no vacia y solo minusculas).
    if (!portales) {
        alert("No se ingresó ningún código de portal.");
        return;
    }
    if (!/^[a-z]+$/.test(portales)) {
        alert("Entrada inválida. Por favor, ingresa solo letras minúsculas.");
        return;
    }
    
    // Muestra el resultado de la búsqueda del portal fuera de fase.
    let resultado = portalFueraDeFase(portales);
    if (resultado !== -1) {
        alert(`El primer portal fuera de fase está en el índice: ${resultado}`);
    } else {
        alert("No hay portales fuera de fase. Todos se repiten.");
    }
}

// Ejecuta la verificación al cargar el script.
verificarPortal();
