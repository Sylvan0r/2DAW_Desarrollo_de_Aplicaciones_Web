console.log(isWeekend(new Date("2023-10-01"))); // true

function isWeekend(day) {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}   