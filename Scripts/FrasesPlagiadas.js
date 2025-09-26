function detectarPlagio(base, frasesEstudiante) {
    const normalizedBase = base.map(frase => 
        frase.toLowerCase().trim().replace(/[.!?]$/, '')
    );
    
    return frasesEstudiante.filter(frase => {
        const normalizedFrase = frase.toLowerCase().trim().replace(/[.!?]$/, '');
        return normalizedBase.includes(normalizedFrase);
    });
}


let baseInput = prompt("Ingresa las frases de la base (separadas por comas):");
let frasesEstudianteInput = prompt("Ingresa las frases del estudiante (separadas por comas):");
try {
    let base = baseInput.split(',').map(s => s.trim());
    let frasesEstudiante = frasesEstudianteInput.split(',').map(s => s.trim());
    let result = detectarPlagio(base, frasesEstudiante);
    alert("Frases plagiadas: " + JSON.stringify(result));
} catch (e) {
    alert("Error en los datos ingresados: " + e.message);
}