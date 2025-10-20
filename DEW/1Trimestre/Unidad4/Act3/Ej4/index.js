resolverEcuacionCuadratica(1,-3,2); // { raiz1: 2, raiz2: 1 }

function resolverEcuacionCuadratica(a, b, c) {
    const discriminante = b * b - 4 * a * c;
    if (discriminante > 0) {
        const raiz1 = console.log((-b + Math.sqrt(discriminante)) / (2 * a));
        const raiz2 = console.log((-b - Math.sqrt(discriminante)) / (2 * a));
        return raiz1, raiz2;
    } else if (discriminante === 0) {
        const raiz = console.log(-b / (2 * a));
        return  raiz ;
    } else {
        return null;
    }
}