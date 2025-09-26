function decodeSpell() {
 
  const symbols = prompt("Ingresa los simbolos del conjuro:");
  
  
  const symbolValues = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100
  };

  // Verificar si la entrada es nula (solo aparece si se cancela el prompt)
  if (symbols === null || symbols === "") {
    alert("Error: No se ingresaron simbolos. El conjuro es invalido.");
    return NaN;
  }

  // Verificar si hay simbolos desconocidos
  for (let symbol of symbols) {
    if (!(symbol in symbolValues)) {
      alert(`Error: Simbolo desconocido "${symbol}" detectado. El conjuro es invalido.`);
      return NaN;
    }
  }

  let total = 0;
  
  // Calcular el valor total
  for (let i = 0; i < symbols.length; i++) {
    const currentValue = symbolValues[symbols[i]];
    const nextValue = i + 1 < symbols.length ? symbolValues[symbols[i + 1]] : 0;

   
    if (nextValue > currentValue) {
      total -= currentValue;
    } else {
   
      total += currentValue;
    }
  }

  //resultado
  alert(`El valor del conjuro es: ${total}`);
  return total;
}


decodeSpell();