console.log(contarVideojuegosPorGenero([
    { titulo: "The Legend of Zelda: Breath of the Wild", genero: "Aventura" },
    { titulo: "God of War", genero: "Plataforma" },
    { titulo: "God of War", genero: "FPS" },
    { titulo: "God of War", genero: "Deportes" },
    { titulo: "God of War", genero: "Aventura" }
]));

function contarVideojuegosPorGenero(array) {
    const generos = {};

    array.forEach(videojuego => {
        const genero = videojuego.genero;
        if (generos[genero]) {
            generos[genero]++;
        } else {
            generos[genero] = 1;
        }
    });

    return generos;
}