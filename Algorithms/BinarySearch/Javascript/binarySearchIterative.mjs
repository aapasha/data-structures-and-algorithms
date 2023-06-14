export const binarySearchIterative = (array, searchVal) => {

    let low = 0;
    let high = array.length - 1;
    let mid = 0;

    while (low <= high) {
        
        mid = Math.floor((high + low) / 2);

        if (array[mid] < searchVal) {
            
            low = mid + 1;
        
        } else if (array[mid] > searchVal) {

            high = mid - 1;

        } else {

            return mid;

        }
    }

    return -1;
}
