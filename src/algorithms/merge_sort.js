const YELLOW = "#FFFF00";
const RED = "#FF0000";
const GREEN = "#00FF00";

function merge(numbers, start, mid, end, onStep) {
    var p = start, q = mid+1;
    var array = [];

    for(var j=start; j<=end; j++)
    {
        if(p > mid)
        {
            array.push(numbers[q++]);
            onStep(q-1, numbers[q-1], RED);
        }
        else if(q > end)
        {
            array.push(numbers[p++]);
            onStep(p-1, numbers[p-1], RED);
        }
        else if(numbers[p] < numbers[q])
        {
            array.push(numbers[p++]);
            onStep(p-1, numbers[p-1], RED);
        }
        else
        {
            array.push(numbers[q++]);
            onStep(q-1, numbers[q-1], RED);
        }
    }

    for(var t=0; t<array.length; t++)
    {
        numbers[start++] = array[t];
        onStep(start-1, numbers[start-1], GREEN);
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