console.log(mergeAndSortNumbers([3,2,1],[6,5,4]));
console.log(mergeAndSortNumbers([10,20],[5,15,25]));
console.log(mergeAndSortNumbers([100],[50,150]));

function mergeAndSortNumbers(array1, array2) {
    const array3 = array1.concat(array2);
    return array3.sort((a, b) => a - b);
}