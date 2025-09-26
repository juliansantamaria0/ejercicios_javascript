function getCompromisedFiles(lastSafeDownload, droneLogs) {
    let compromised = new Set();
    for (let [file_id, timestamp] of droneLogs) {
        if (timestamp > lastSafeDownload) {
            compromised.add(file_id);
        }
    }
    return Array.from(compromised).sort((a, b) => a - b);
}

// Solicitar entrada
let lastSafeDownload = parseInt(prompt("Ingresa el timestamp de la última descarga segura:"));
let droneLogsInput = prompt("Ingresa el array de registros [[ID, timestamp], ...]:");
let droneLogs = JSON.parse(droneLogsInput); // se Convierte de string a array
let result = getCompromisedFiles(lastSafeDownload, droneLogs);
alert("Archivos comprometidos: " + JSON.stringify(result));