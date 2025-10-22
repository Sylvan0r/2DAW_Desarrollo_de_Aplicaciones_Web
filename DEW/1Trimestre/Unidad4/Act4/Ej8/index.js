console.log(formatTime(new Date('2023-10-01T09:05:00')));

function formatTime(hours) {
    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(hours.getHours())}:${pad(hours.getMinutes())}`;
}