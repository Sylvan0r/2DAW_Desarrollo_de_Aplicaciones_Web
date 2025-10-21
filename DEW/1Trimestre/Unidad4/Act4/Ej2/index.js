console.log(daysUntilEndOfYear(new Date('2023-10-01'))); // Ejemplo de uso

function daysUntilEndOfYear(date) {
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const timeDiff = endOfYear - date;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}