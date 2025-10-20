console.log(logaritmoBaseN(8,2));

function logaritmoBaseN(numero, base) {
    if (numero <= 0 || base <= 1) {
        throw new Error("El número debe ser mayor que 0 y la base debe ser mayor que 1.");
    }
    return Math.log(numero) / Math.log(base);
}