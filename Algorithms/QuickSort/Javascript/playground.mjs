import { quicksort } from "./quicksort.mjs"

let array = [9, 2, 5, 1, 3, 8, 7, 6, 0, 4];
quicksort(array, 0, array.length-1);
console.log(array);
