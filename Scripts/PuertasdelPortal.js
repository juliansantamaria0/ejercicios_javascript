function portalFueraDeFase(portales) {
   
    let freq = {};
    for (let char of portales) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    
    for (let i = 0; i < portales.length; i++) {
        if (freq[portales[i]] === 1) {
            return i;
        }
    }
    
    
    return -1;
}


function verificarPortal() {
    
    let portales = prompt("Ingresa los códigos de los portales activados (solo letras minúsculas, ej: aabbc):");
    
    
    if (!portales) {
        alert("No se ingresó ningún código de portal.");
        return;
    }
    
   
    if (!/^[a-z]+$/.test(portales)) {
        alert("Entrada inválida. Por favor, ingresa solo letras minúsculas.");
        return;
    }
    
    
    let resultado = portalFueraDeFase(portales);
    
    
    if (resultado !== -1) {
        alert(`El primer portal fuera de fase está en el índice: ${resultado}`);
    } else {
        alert("No hay portales fuera de fase. Todos se repiten.");
    }
}


verificarPortal();