# Estadística Básica

Este proyecto es una implementación de conceptos básicos de estadística utilizando JavaScript.

## Descripción

El objetivo de este proyecto es proporcionar una herramienta sencilla para realizar cálculos estadísticos básicos como media, mediana, moda, varianza y desviación estándar.

## Instalación

Para utilizar este proyecto, clona el repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/tu_usuario/EstadisticaBasica.git
cd EstadisticaBasica
```

## Uso

Puedes ejecutar el proyecto utilizando Node.js. Asegúrate de tener Node.js instalado en tu máquina.

```bash
node index.js
```

## Funcionalidades

- **Media**: Calcula la media de un conjunto de números.
- **Mediana**: Calcula la mediana de un conjunto de números.
- **Moda**: Encuentra la moda de un conjunto de números.
- **Varianza**: Calcula la varianza de un conjunto de números.
- **Desviación Estándar**: Calcula la desviación estándar de un conjunto de números.

## Ejemplo de Uso

```javascript
const estadistica = require('./estadistica');

const datos = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

console.log('Media:', estadistica.media(datos));
console.log('Mediana:', estadistica.mediana(datos));
console.log('Moda:', estadistica.moda(datos));
console.log('Varianza:', estadistica.varianza(datos));
console.log('Desviación Estándar:', estadistica.desviacionEstandar(datos));
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejorar el proyecto.

## Licencia

Este proyecto está bajo la Licencia GNU. Consulta el archivo `LICENSE` para más detalles.
