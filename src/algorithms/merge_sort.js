const YELLOW = "#FFFF00";
const RED = "#FF0000";
const GREEN = "#00FF00";

function merge(numbers, start, mid, end, onStep) {
    var p = start, q = mid+1;
    var array = [];

    for(var i=start; i<=end; i++) {
        if(p > mid) {
            array.push(numbers[q++]);
            onStep(q-1, numbers[q-1], RED);
        } else if(q > end) {
            array.push(numbers[p++]);
            onStep(p-1, numbers[p-1], RED);
        } else if(numbers[p] < numbers[q]) {
            array.push(numbers[p++]);
            onStep(p-1, numbers[p-1], RED);
        } else {
            array.push(numbers[q++]);
            onStep(q-1, numbers[q-1], RED);
        }
    }

    i = start;
    for(var t=0; t < array.length; t++) {
        numbers[i++] = array[t];
        var isSortingFinished = start == 0 && end == numbers.length-1 && i == end;
        onStep(i-1, numbers[i-1], GREEN, isSortingFinished);
    }
}

function merge_sort(numbers, start, end, onStep) {
    if (start >= end) {
        return;
    }

    var mid = Math.floor((start+end) / 2);
    onStep(mid, numbers[mid], YELLOW);
    merge_sort(numbers, start, mid, onStep);
    merge_sort(numbers, mid+1, end, onStep);
    merge(numbers, start, mid, end, onStep);
}

export default function mergeSort(numbers, onStep) {
    merge_sort(numbers, 0, numbers.length-1, onStep);
}