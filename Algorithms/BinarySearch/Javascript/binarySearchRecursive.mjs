export const binarySearchRecursive = (array, low, high, searchValue) => {
    if (low <= high) {
        const mid = Math.floor((high + low) / 2);

        if (array[mid] === searchValue) {
            return mid;
        } else if (array[mid] > searchValue) {
            return binarySearchRecursive(array, low, mid - 1, searchValue);
        } else {
            return binarySearchRecursive(array, mid + 1, high, searchValue);
        }
    }

    return -1;
};
