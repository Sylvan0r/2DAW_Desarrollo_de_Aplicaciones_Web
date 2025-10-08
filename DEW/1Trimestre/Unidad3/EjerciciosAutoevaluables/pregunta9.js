console.log(filterAndJoinEvens([1, 2, 3, 4, 5, 6]));
console.log(filterAndJoinEvens([7,9,12,18,21]));
console.log(filterAndJoinEvens([3,5,7]));

function filterAndJoinEvens(array) {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers.join(', ');
}