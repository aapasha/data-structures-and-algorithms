export const quicksort = (array, low, high) => {
    
    if (low < high) {
        // use a pivot to partition array s.t. all
        // elements smaller than the pivot are on the left
        // and all elements greater are on the right
        const pivot = partition(array, low, high);

        // recursive call on the left of pivot
        quicksort(array, low, pivot-1);

        // rescursive call on the right of pivot
        quicksort(array, pivot+1, high);
    }
}

const partition = (array, low, high) => {
    const pivot = array[high];

    // pointer for greater element
    let i = low - 1;

    // traverse through all elements
    // compare each element with pivot
    for (let j = low; j < high; j++) {
        
        if (array[j] <= pivot) {
            // if element is smaller than pivot then swap it 
            i++;

            // swap element at i with element at j
            const temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }

    // swap the pivot element with the greater at i
    const temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    // return the position from partition
    return i + 1;
}
