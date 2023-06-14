export const mergesortArray = (array) => {
    
    if (array.length <= 1) {
        return;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);

    // recursive call on each half
    mergesortArray(left);
    mergesortArray(right);

    // pointers for traversing the two halves
    let i = 0;
    let j = 0;

    // pointer for the main list
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        k++;
    }

    // get any remaining values from either half
    while (i < left.length) {
        array[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        array[k] = right[j];
        j++;
        k++;
    }
}
