console.log(isValidDate("2024-10-01"));
console.log(isValidDate("2023-02-29"));
console.log(isValidDate("invalid-date"));

function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) && dateString === date.toISOString().split('T')[0];
}