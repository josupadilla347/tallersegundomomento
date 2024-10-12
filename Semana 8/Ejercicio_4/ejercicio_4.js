const productos = [
    { nombre: 'Laptop', categoria: 'tecnología', precio: 1000 }, 
    { nombre: 'Smartphone', categoria: 'tecnología', precio: 600 }, 
    { nombre: 'Camisa', categoria: 'ropa', precio: 30 }, 
    { nombre: 'Teclado', categoria: 'tecnología', precio: 50 },
    { nombre: 'Zapatillas', categoria: 'ropa', precio: 80 }
];


const categoriaTecnologia = productos.filter(producto => producto.categoria === 'tecnología');
console.log(categoriaTecnologia);


const tecnologiaConDescuento =categoriaTecnologia.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9 
    
}))

const totalDescuento = tecnologiaConDescuento.reduce((acc, producto) => acc + producto.precio, 0);

console.log('Total con descuento del 10%:', totalDescuento);
console.log(tecnologiaConDescuento)
