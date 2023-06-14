export const selectionsort = (array, size) => {

    for (let step = 0; step < size; step++) {

        let min_idx = step;

        for (let i = step+1; i < size; i++) {

            // to sort in descending order, change > to < in this line
            // select the minimum element in each loop
            if (array[i] < array[min_idx]) {
                min_idx = i;
            }
        }

        // put min at the correct position
        const temp = array[min_idx];
        array[min_idx] = array[step];
        array[step] = temp;
    }
}
