// Funcion para detectar frases plagiadas comparando frases de un estudiante con una base de datos.
function detectarPlagio(base, frasesEstudiante) {
    // Normaliza las frases de la base (minusculas, sin espacios extra, sin puntuacion final).
    const normalizedBase = base.map(frase => 
        frase.toLowerCase().trim().replace(/[.!?]$/, '')
    );
    
    // Filtra las frases del estudiante que, una vez normalizadas, coinciden con alguna frase de la base.
    return frasesEstudiante.filter(frase => {
        const normalizedFrase = frase.toLowerCase().trim().replace(/[.!?]$/, '');
        return normalizedBase.includes(normalizedFrase);
    });
}

// Solicita al usuario las frases base y las frases del estudiante.
let baseInput = prompt("Ingresa las frases de la base (separadas por comas):");
let frasesEstudianteInput = prompt("Ingresa las frases del estudiante (separadas por comas):");

// Procesa las entradas, detecta el plagio y muestra el resultado.
try {
    let base = baseInput.split(',').map(s => s.trim());
    let frasesEstudiante = frasesEstudianteInput.split(',').map(s => s.trim());
    let result = detectarPlagio(base, frasesEstudiante);
    alert("Frases plagiadas: " + JSON.stringify(result));
} catch (e) {
    alert("Error en los datos ingresados: " + e.message + ". Asegúrate de separar las frases con comas.");
}
