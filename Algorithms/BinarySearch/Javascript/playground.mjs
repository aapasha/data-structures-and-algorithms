import { binarySearchRecursive } from './binarySearchRecursive.mjs';
import { binarySearchIterative } from './binarySearchIterative.mjs';

const arr = [2, 3, 4, 10, 40];

console.log(binarySearchRecursive(arr, 0, arr.length - 1, 10));
console.log(binarySearchRecursive(arr, 0, arr.length - 1, 0));
console.log('\n');
console.log(binarySearchIterative(arr, 10));
console.log(binarySearchIterative(arr, 0));
