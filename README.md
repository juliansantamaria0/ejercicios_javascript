# 🚀 Ejercicios de JavaScript
**Autor**: Julian Santamaria

Una colección de ejercicios prácticos en JavaScript que combina conceptos fundamentales de programación con escenarios creativos y temáticos. Cada ejercicio está diseñado para fortalecer habilidades específicas en algoritmos, manipulación de datos, validación y simulaciones de estructuras de datos.

**JavaScript**

---

## 📋 Tabla de Contenidos

- [🎯 Requisitos](#-requisitos)
- [🚀 Instalación y Ejecución](#-instalación-y-ejecución)
- [📚 Ejercicios Disponibles](#-ejercicios-disponibles)
- [🛠️ Características Técnicas](#️-características-técnicas)
- [🎓 Conceptos Cubiertos](#-conceptos-cubiertos)
- [🌟 Ejemplos de Uso](#-ejemplos-de-uso)
- [📄 Licencia](#-licencia)

---

## 🎯 Requisitos

- ✅ **Navegador web moderno** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- ✅ **JavaScript habilitado**
- ❌ **No requiere dependencias externas**
- ❌ **No requiere servidor local**

## 🚀 Instalación y Ejecución

### Método 1: Ejecución Directa
```bash
# Clona el repositorio
git clone https://github.com/juliansantamaria0/ejercicios_javascript.git
cd ejercicios-javascript

# Abre el archivo HTML en tu navegador
# Edita la línea: <script src="./Scripts/Anagramas.js"></script>
# Cambia "Anagramas.js" por el ejercicio que deseas ejecutar
```

### Método 2: Ejecución Individual
1. Abre las **Herramientas de Desarrollador** en tu navegador (F12)
2. Ve a la pestaña **Console**
3. Copia y pega el código del ejercicio deseado
4. Presiona **Enter** para ejecutar

---

## 📚 Ejercicios Disponibles

### 🔤 **Anagramas.js** - *Detección de Patrones*
> **Concepto**: Verificación de anagramas mediante conteo de frecuencias

**¿Qué hace?**: Determina si dos palabras contienen exactamente los mismos caracteres con la misma frecuencia.

**Entrada**: `"Escucha"` y `"Acuchaste"`  
**Salida**: `✅ Son anagramas`

**Técnicas aplicadas**:
- Normalización de strings (toLowerCase, trim)
- Conteo de frecuencias con objetos
- Comparación de estructuras de datos

---

### ✨ **Arcanus.js** - *Sistema de Decodificación*
> **Concepto**: Decodificación de símbolos con reglas de suma y resta

**¿Qué hace?**: Traduce conjuros mágicos representados por símbolos especiales a valores numéricos.

**Sistema de símbolos**:
- `⚡` = 100, `⚕` = 50, `♁` = 10, `☾` = 5, `☽` = 1

**Entrada**: `"☾☽⚡"`  
**Salida**: `Valor del conjuro: 106`

**Técnicas aplicadas**:
- Mapeo de símbolos con objetos
- Lógica condicional para reglas de suma/resta
- Iteración con análisis de contexto

---

### 🚁 **Comprometidos.js** - *Análisis de Logs*
> **Concepto**: Filtrado de datos basado en timestamps

**¿Qué hace?**: Identifica archivos comprometidos en logs de drones comparando timestamps de descarga.

**Entrada**: `[[1,50], [2,150], [1,200]]` con timestamp seguro `100`  
**Salida**: `IDs comprometidos: [1, 2]`

**Técnicas aplicadas**:
- Uso de Set para elementos únicos
- Parsing de JSON desde entrada de usuario
- Filtrado condicional de arrays

---

### 📝 **FrasesPlagiadas.js** - *Detección de Similitudes*
> **Concepto**: Comparación normalizada de textos

**¿Qué hace?**: Detecta posible plagio comparando frases de estudiantes con una base de datos.

**Entrada**: Base: `["Hola mundo."]` vs Estudiante: `["hola mundo!"]`  
**Salida**: `["hola mundo!"]` (frase plagiada detectada)

**Técnicas aplicadas**:
- Normalización avanzada de strings
- Expresiones regulares para limpieza
- Comparación de arrays con includes()

---

### 🍎 **FrutasEnvasadas.js** - *Simulación de Estructuras*
> **Concepto**: Validación de secuencias LIFO (Stack)

**¿Qué hace?**: Simula una máquina envasadora tipo pila y valida si una secuencia de salida es posible.

**Entrada**: 
- Entrada: `"manzana,banana,kiwi"`
- Salida deseada: `"kiwi,banana,manzana"`

**Resultado**: `✅ Secuencia válida (LIFO correcta)`

**Técnicas aplicadas**:
- Simulación de estructura de datos Stack
- Algoritmos de validación de secuencias
- Manejo de arrays como pilas

---

### 💼 **HabilidadesCombatibles.js** - *Matching Inteligente*
> **Concepto**: Cálculo de compatibilidad por porcentajes

**¿Qué hace?**: Encuentra candidatos compatibles para ofertas laborales (mínimo 70% de coincidencia).

**Entrada**: 
- Oferta: `"JavaScript,React,CSS,Node.js"`
- Candidato: `"JavaScript,React,Node.js"`

**Resultado**: `✅ Compatible (75% de coincidencia)`

**Técnicas aplicadas**:
- Cálculo de porcentajes de intersección
- Comparación de conjuntos de habilidades
- Filtrado por umbral de compatibilidad

---

### 🌀 **PuertasdelPortal.js** - *Búsqueda de Elementos Únicos*
> **Concepto**: Detección del primer elemento no repetido

**¿Qué hace?**: Encuentra el primer "portal fuera de fase" (carácter que aparece exactamente una vez).

**Entrada**: `"aabbc"`  
**Salida**: `Primer portal único: 'c' en posición 4`

**Técnicas aplicadas**:
- Conteo de frecuencias con Map/Object
- Búsqueda lineal con condición específica
- Análisis de unicidad en secuencias

---

## 🛠️ Características Técnicas

| Característica | Descripción |
|----------------|-------------|
| **🧹 Código Limpio** | Variables descriptivas, funciones bien estructuradas |
| **💬 Comentarios Estratégicos** | 3-5 comentarios por script explicando lógica clave |
| **🛡️ Validación Robusta** | Manejo de entradas inválidas y casos edge |
| **🎨 Interfaz Consistente** | Uso uniforme de `prompt()` y `alert()` |
| **⚡ Rendimiento** | Algoritmos optimizados para casos de uso típicos |
| **🔄 Reutilizable** | Código modular fácil de adaptar |

## 🎓 Conceptos Cubiertos

### **Algoritmos Fundamentales**
- Búsqueda lineal y por condición
- Ordenamiento implícito
- Validación de secuencias
- Matching de patrones

### **Estructuras de Datos**
- Arrays y manipulación avanzada
- Objetos como mapas de frecuencia
- Sets para elementos únicos
- Simulación de Stack (LIFO)

### **Manipulación de Strings**
- Normalización y limpieza
- Expresiones regulares básicas
- Comparación case-insensitive
- Parsing de formatos personalizados

### **Programación Funcional**
- `Array.filter()` para filtrado
- `Array.map()` para transformaciones
- `Array.reduce()` para agregaciones
- Funciones puras y sin efectos secundarios

### **Lógica de Negocio**
- Cálculo de porcentajes
- Análisis de timestamps
- Sistemas de puntuación
- Validación de reglas complejas

## 🌟 Ejemplos de Uso

### Ejecutar un ejercicio específico:
```javascript
// En la consola del navegador
// Pega el código completo del ejercicio y presiona Enter
// El script solicitará las entradas necesarias automáticamente
```

### Modificar para pruebas automatizadas:
```javascript
// Ejemplo: Convertir Anagramas.js para testing
function sonAnagramas(palabra1, palabra2) {
    // Lógica del ejercicio sin prompt/alert
    return resultado;
}

// Test cases
console.log(sonAnagramas("Escucha", "Acuchaste")); // true
console.log(sonAnagramas("Hola", "Mundo")); // false
```

## 📊 Estadísticas del Proyecto

- **📁 Ejercicios**: 7 scripts únicos
- **🎯 Nivel**: Principiante a Intermedio
- **🧠 Conceptos**: +15 técnicas de programación

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver LICENSE para más detalles.

Copyright (c) 2025 Julian Santamaria

