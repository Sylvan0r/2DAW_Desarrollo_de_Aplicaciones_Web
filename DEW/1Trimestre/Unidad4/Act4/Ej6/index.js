console.log(addDays(new Date('2023-10-01'), 10));

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}