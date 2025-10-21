console.log(getDayOfWeek('2023-10-01')); // Output: Wednesday

function getDayOfWeek(dateString) {
    const daysOfWeek = [
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
    ];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}