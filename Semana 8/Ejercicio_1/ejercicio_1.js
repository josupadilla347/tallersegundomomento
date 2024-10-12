const numeros = [5, 8, 12, 15, 2, 4, 18, 21];


const multiplicados = numeros.map(num => num * 2);

console.log(multiplicados); 


const mayoresquediez = multiplicados.filter(num => num > 10);

console.log(mayoresquediez);


const suma = mayoresquediez.reduce((acc, num) => acc + num, 0);

console.log(suma); // Resultado final