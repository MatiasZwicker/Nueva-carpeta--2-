alert("Bienvenidos a mi proyecto");

const entradas =
    [
        {
            id: 1,
            Tribuna: "Belgrano",
            Tipo: "Platea",
            Precio: 5000,
            Cantidad: 0
        },

        {
            id: 2,
            Tribuna: "San Martin",
            Tipo: "Platea",
            Precio: 4000,
            Cantidad: 0
        },

        {
            id: 3,
            Tribuna: "Sivori",
            Tipo: "Popular",
            Precio: 3000,
            Cantidad: 0
        },

        {
            id: 4,
            Tribuna: "Centenario",
            Tipo: "Popular",
            Precio: 2000,
            Cantidad: 0
        },

    ]


const ordenarMenorMayor = () => {
    entradas.sort((a, b) => a.Precio - b.Precio);
}
const mostrarEntradas = () => {
    const listaEntradas = entradas.map(entrada => {
        return '- ' + entrada.Tribuna + ' $' + entrada.Precio
    });
    alert('Entradas para el proximo partido: ' + '\n\n' + listaEntradas.join('\n'));
}

ordenarMenorMayor();
mostrarEntradas();

const ventaEntradas = () => {
    let subtotal = 0;
    let tribuna = " ";
    let cantidad = 0;



    do {
        tribuna = prompt("Escriba el nombre de la tribuna que desea ir: ").trim().toLowerCase();
        cantidad = Number(prompt("¿Cuantas entradas deseas sacar?"));

        switch (tribuna) {
            case "centenario":

                const idBuscado = 4;
                const entradaEncontrada = entradas.find(entrada => entrada.id === idBuscado);

                if (entradaEncontrada) {
                    const precio = entradaEncontrada.Precio;
                    const totalPorTribuna = precio * cantidad; // Multiplica precio por cantidad
                    subtotal += totalPorTribuna; // Suma al subtotal

                    alert(`El precio de su entrada es de: $ ${precio} cada una.`);
                } else {
                    alert(`No se encontró una entrada con ID ${idBuscado}`);
                }
                break;


            case "sivori":

                const idBuscadoo = 3;
                const entradaEncontradas = entradas.find(entrada => entrada.id === idBuscadoo);

                if (entradaEncontradas) {
                    const precio = entradaEncontradas.Precio;
                    const totalPorTribunas = precio * cantidad; // Multiplica precio por cantidad
                    subtotal += totalPorTribunas; // Suma al subtotal

                    alert(`El precio de su entrada es de: $ ${precio} cada una.`);
                } else {
                    alert(`No se encontró una entrada con ID ${idBuscado}`);
                }

                break;

            case "belgrano":

                const idBuscador = 1;
                const entradaEncontradaas = entradas.find(entrada => entrada.id === idBuscador);

                if (entradaEncontradaas) {
                    const precio = entradaEncontradaas.Precio;
                    const totalPorTribunas = precio * cantidad; // Multiplica precio por cantidad
                    subtotal += totalPorTribunas; // Suma al subtotal

                    alert(`El precio de su entrada es de: $ ${precio} cada una.`);

                } else {
                    alert(`No se encontró una entrada con ID ${idBuscado}`);
                }

                break;

            case "san martin":

            const idBuscad= 1;
            const entradaEncontrad = entradas.find(entrada => entrada.id === idBuscad);

            if (entradaEncontrad) {
                const precio = entradaEncontrad.Precio;
                const totalPorTribunas = precio * cantidad; // Multiplica precio por cantidad
                subtotal += totalPorTribunas; // Suma al subtotal

                alert(`El precio de su entrada es de: $ ${precio} cada una.`);

            } else {
                alert(`No se encontró una entrada con ID ${idBuscado}`);
            }

            break;
            
            default:
                alert("Algunos de los datos ingresados son incorrectos");
            

        }



        seguirComprando = confirm("¿Desea seguir comprando?");

    } while (seguirComprando)

    alert(`El subtotal a pagar es: $ ${subtotal}`); // Muestra el subtotal al final

    return subtotal;

}

const aplicarDescuento = (subtotal) => {
    const descuento = 0.90; // Descuento del 10%
    const descuento1 = 0.80; // Descuento del 20%

    if (subtotal >= 6000) {
        return subtotal * descuento1;
    } else if (subtotal >= 5000) {
        return subtotal * descuento; 
    } 
    else {
        return subtotal;
    }

}
const mostrarDetalleDeCompra = (precioFinal) => {
    alert('El precio total de su compra es: $'+precioFinal);
    console.log (subtotal);
    console.log (precioFinal); 
}

const subtotal = ventaEntradas();

const precioFinal = aplicarDescuento(subtotal);

mostrarDetalleDeCompra(precioFinal);






