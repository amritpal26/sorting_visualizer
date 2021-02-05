import { Colors } from './colors';

function swap(numbers, i, j, onStep, isPivotSwap) {
    onStep(i, numbers[i], Colors.BAR_QUICK_SWAP, false, true);
    onStep(j, numbers[j], Colors.BAR_QUICK_SWAP, false, false);

    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;

    onStep(i, numbers[i], Colors.BAR_QUICK_SWAP, false, true);
    onStep(j, numbers[j], Colors.BAR_QUICK_SWAP, false, false);

    var color = isPivotSwap ? Colors.BAR_SORTED : Colors.BAR_NORMAL;
    onStep(i, numbers[i], color, false, true);
    onStep(j, numbers[j], color, false, false);
}

// This function takes the last element as the pivot.
function partition(numbers, left, right, onStep) {
    var i = left-1;
    var pivot = numbers[right];
    onStep(right, right, Colors.BAR_QUICK_PIVOT, false, true);

    for(var j=left; j<right; j++) {
        if (numbers[j] < pivot) {
            i++;
            swap(numbers, i, j, onStep);
        }
    }
    
    // Put the pivot element on its place.
    swap(numbers, i+1, right, onStep, true);

    for(var k=left; k<=i+1; k++) {
        onStep(k, numbers[k], Colors.BAR_SORTED);
    }
    return i+1;
}

function quick_sort(numbers, left, right, onStep){
    if (left < right) {
        var partitionIndex = partition(numbers, left, right, onStep);
        quick_sort(numbers, left, partitionIndex-1, onStep);
        quick_sort(numbers, partitionIndex+1, right, onStep);
    }
}

export default function quickSort(numbers, onStep) {
    quick_sort(numbers, 0, numbers.length-1, onStep);
    onStep(0, numbers[0], Colors.BAR_SORTED, true, false);
}