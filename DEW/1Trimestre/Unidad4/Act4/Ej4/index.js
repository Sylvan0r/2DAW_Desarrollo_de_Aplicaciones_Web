console.log(daysBetweenDates(new Date('2023-10-01'), new Date('2023-10-10'))); // 30

function daysBetweenDates(date1, date2) {
    // Convertir las fechas a objetos Date si son cadenas
    const d1 = (date1 instanceof Date) ? date1 : new Date(date1);
    const d2 = (date2 instanceof Date) ? date2 : new Date(date2);
    // Calcular la diferencia en milisegundos
    const diffTime = Math.abs(d2 - d1);
    // Convertir la diferencia a días
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}