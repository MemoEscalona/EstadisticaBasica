/**
 * Función que calcula la media de un conjunto de números
 * @param {Array<number>} params - Arreglo de números
 * @returns {number} - La media de los números
 */
const getArithmeticMean = (params)=> {
    let size=params.length;
    let sum = params.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum/size;
}
/**
 * Función que calcula la mediana de un conjunto de números
 * @param {Array<number>} params - Arreglo de números
 * @returns {number} - La mediana de los números
 */
const getMedian = (params) => {
    params.sort((a, b) => a - b);
    let size = params.length;
    if (size % 2 === 0) {
        return (params[Math.floor(size / 2)] + params[Math.floor(size / 2) - 1]) / 2;
    } else {
        return params[Math.floor(size / 2)];
    }
}
/**
 * Función que calcula la moda de un conjunto de números
 * @param {Array<number>} params - Arreglo de números
 * @returns {number} - La moda de los números
 */
const getMode = (params) => {
    let obj = {};
    
    params.forEach((el) => {
        obj[el] = (obj[el] || 0) + 1;
    });

    let maxFrequency = 0;
    let mode = null;

    for (let key in obj) {
        if (obj[key] > maxFrequency) {
            maxFrequency = obj[key];
            mode = Number(key);
        }
    }

    return mode;
}
/**
 * Función que calcula la varianza de un conjunto de números
 * @param {Array<Number>} params 
 * @returns {number} - La varianza de los números
 */
const getVariation = (params) => {
    let mean = getArithmeticMean(params);
    let size = params.length;
    let sum = 0;
    params.forEach((el) => {
        sum += Math.pow(el - mean, 2);
    });
    return sum / (size - 1);
}
/**
 * Función que calcula la desviación estandar de un conjunto de números
 * @param {Array<Number>} params Arreglo de números 
 * @returns {number} - La desviación estandar de los números
 */
const getStandardDeviation = (params) => {
    return Math.sqrt(getVariation(params));
}

let numbers = [1, 1, 2, 3, 5, 8, 13, 12, 4, 5, 2, 3, 4, 6, 7, 8, 9, 2, 1, 5, 7, 8, 9, 10, 13, 12, 13, 5, 7, 8, 4, 11, 13, 12, 4, 5, 2, 3, 2, 3, 5, 8, 13, 12, 4, 5, 2, 3, 4, 6, 7, 8, 9, 2, 1, 5, 3, 5, 8, 13, 12, 4, 5, 2, 3, 4, 6, 7, 3, 5, 8, 13, 12, 4, 5, 2, 3, 4, 6, 7,9, 10, 13, 12, 13, 5, 7, 8, 4, 11, 13, 12, 4, 5, 2, 3, 2, 3, 5, 8, 13, 12, 4, 5, 2, 3, 4, 6, 7, 8, 9, 2, 1, 5, 3];
console.log("Conjunto de números: ", numbers);
console.log("Media: ", getArithmeticMean(numbers));
console.log("Mediana: ", getMedian(numbers));
console.log("Moda: ", getMode(numbers));
console.log("Varianza: ", getVariation(numbers));
console.log("Desviación estandar: ", getStandardDeviation(numbers));
