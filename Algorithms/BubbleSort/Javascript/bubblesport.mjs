export const bubblesort = (array) => {

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length - i - 1; j++) {

            // compare two adjacent elements
            // change > to < to sort in descending order
            if (array[j] > array[j + 1]) {

                //swapping elements
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
