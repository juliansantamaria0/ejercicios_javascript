function candidatosCompatibles(oferta, candidatos) {
   
    const minSkills = Math.floor(oferta.length * 0.7);
    
    
    let compatibles = [];
    
    
    for (let candidato of candidatos) {
        
        let matches = 0;
        const ofertaLower = oferta.map(skill => skill.toLowerCase());
        const skillsLower = candidato.skills.map(skill => skill.toLowerCase());
        
        for (let skill of ofertaLower) {
            if (skillsLower.includes(skill)) {
                matches++;
            }
        }
        
        
        if (matches >= minSkills) {
            compatibles.push(candidato.id);
        }
    }
    
   
    return compatibles.sort();
}


function verificarCandidatos() {
   
    let ofertaStr = prompt("Ingresa las habilidades requeridas por la oferta, separadas por comas (ejemplo: JavaScript,React,Node,CSS,Git):");
    if (!ofertaStr) {
        alert("No se ingresaron habilidades para la oferta.");
        return;
    }
    let oferta = ofertaStr.split(',').map(item => item.trim());
  
    let candidatosStr = prompt("Ingresa los candidatos (formato: id1:habilidad1,habilidad2;id2:habilidad3,habilidad4, ej: juan:JavaScript,React;ana:CSS,Node):");
    if (!candidatosStr) {
        alert("No se ingresaron datos de candidatos.");
        return;
    }
    
   
    let candidatos = [];
    let candidatoEntries = candidatosStr.split(';').map(entry => entry.trim());
    
    for (let entry of candidatoEntries) {
        if (entry) {
            let [id, skillsStr] = entry.split(':').map(item => item.trim());
            if (id && skillsStr) {
                let skills = skillsStr.split(',').map(skill => skill.trim());
                candidatos.push({ id, skills });
            }
        }
    }
    

    let resultado = candidatosCompatibles(oferta, candidatos);
    
    if (resultado.length > 0) {
        alert("Candidatos compatibles (ordenados alfabéticamente): " + resultado.join(', '));
    } else {
        alert("No hay candidatos compatibles.");
    }
}


verificarCandidatos();