console.log(daysInMonth(2023,0))
console.log(daysInMonth(2023,1))
console.log(daysInMonth(2024,1))

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}