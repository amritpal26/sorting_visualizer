import { Colors } from './colors';

function swap(numbers, i, j, onStep) {
    onStep(i, numbers[i], Colors.BAR_HEAP_SWAP, false, true);
    onStep(j, numbers[j], Colors.BAR_HEAP_SWAP, false, false);

    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;

    onStep(i, numbers[i], Colors.BAR_HEAP_SWAP, false, true);
    onStep(j, numbers[j], Colors.BAR_HEAP_SWAP, false, false);

    onStep(i, numbers[i], Colors.BAR_NORMAL, false, true);
    onStep(j, numbers[j], Colors.BAR_NORMAL, false, false);
}

function heapify(numbers, n, i, onStep) {
    var largest = i;
    var left = (2*i) + 1
    var right = (2*i) + 2
 
    if (i != largest) {
        onStep(largest, numbers[largest], Colors.BAR_NORMAL, false, true);
    }

    // See if left child of root exists and is greater than root
    if (left < n && numbers[largest] < numbers[left]) {
        largest = left;
    }
 
    // See if right child of root exists and is greater than root
    if (right < n && numbers[largest] < numbers[right]) {
        largest = right;
    }
 
    onStep(largest, numbers[largest], Colors.BAR_HEAP_CURRENT, false, true);

    // Change root, if needed
    if (largest != i){
        swap(numbers, i, largest, onStep);
        heapify(numbers, n, largest, onStep);
    }
}

export default function HeapSort(numbers, onStep) {
    var n = numbers.length;
 
    // Build a maxheap.
    var i = Math.floor(n/2)-1;
    for( ; i >= 0; i--) {
        heapify(numbers, n, i, onStep)
    }
        
    for (i=n-1; i>0; i--) {
        swap(numbers, i, 0, onStep);

        onStep(i, numbers[i], Colors.BAR_SORTED, false, true);
        heapify(numbers, i, 0, onStep);

        onStep(i, numbers[i], Colors.BAR_NORMAL, false, true);
        onStep(i, numbers[i], Colors.BAR_SORTED, false, true);

    }
    onStep(i, numbers[i], Colors.BAR_SORTED, true, true);
}