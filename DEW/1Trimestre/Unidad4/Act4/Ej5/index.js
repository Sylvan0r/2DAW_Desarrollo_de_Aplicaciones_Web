console.log(formatoFecha(new Date(2023, 0, 15))); // "15 de enero de 2023"

function formatoFecha(fecha) {
    let day = fecha.getDate();
    let month = fecha.getMonth();
    let year = fecha.getFullYear();

    return `${day}/${(month)}/${year}`;
}