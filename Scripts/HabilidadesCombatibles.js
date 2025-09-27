// Funcion para encontrar candidatos que cumplen con un porcentaje minimo de habilidades de una oferta.
function candidatosCompatibles(oferta, candidatos) {
    // Calcula el número mínimo de habilidades requeridas (70% de las habilidades de la oferta).
    const minSkills = Math.floor(oferta.length * 0.7);
    let compatibles = [];
    
    // Itera sobre cada candidato para verificar sus habilidades.
    for (let candidato of candidatos) {
        let matches = 0;
        // Normaliza las habilidades a minúsculas para una comparacion insensible a mayusculas/minúsculas.
        const ofertaLower = oferta.map(skill => skill.toLowerCase());
        const skillsLower = candidato.skills.map(skill => skill.toLowerCase());
        
        // Cuenta cuantas habilidades de la oferta tiene el candidato.
        for (let skill of ofertaLower) {
            if (skillsLower.includes(skill)) matches++;
        }
        
        // Si el candidato cumple con el minimo de habilidades, se añade a la lista.
        if (matches >= minSkills) compatibles.push(candidato.id);
    }
    
    // Retorna los IDs de los candidatos compatibles, ordenados alfabeticamente.
    return compatibles.sort();
}

// Función para interactuar con el usuario y verificar candidatos.
function verificarCandidatos() {
    let ofertaStr = prompt("Ingresa las habilidades requeridas por la oferta (ej: JavaScript,React):");
    let candidatosStr = prompt("Ingresa los candidatos (ej: juan:JavaScript,React;ana:CSS,Node):");
    
    // Valida las entradas del usuario.
    if (!ofertaStr || !candidatosStr) {
        alert("Entradas incompletas. Por favor, ingrese todos los datos.");
        return;
    }

    // Procesa las cadenas de entrada para convertirlas en arrays y objetos.
    let oferta = ofertaStr.split(',').map(item => item.trim());
    let candidatos = candidatosStr.split(';').map(entry => {
        let [id, skillsStr] = entry.split(':').map(item => item.trim());
        return { id, skills: skillsStr.split(',').map(skill => skill.trim()) };
    });
    
    // Muestra los candidatos compatibles.
    let resultado = candidatosCompatibles(oferta, candidatos);
    if (resultado.length > 0) {
        alert("Candidatos compatibles: " + resultado.join(', '));
    } else {
        alert("No hay candidatos compatibles.");
    }
}

// Ejecuta la verificación al cargar el script.
verificarCandidatos();
