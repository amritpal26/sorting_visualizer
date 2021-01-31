import { Colors } from './colors';

function bubble_sort(numbers, onStep) {
    var n = numbers.length;
    for(var i=0; i<n; i++) {
        for(var j=0; j<n-i-1; j++){
            onStep(j, numbers[j], Colors.BAR_BUBBLE_CURRENT, false);
            onStep(j+1, numbers[j+1], Colors.BAR_BUBBLE_CURRENT, false);
            if (numbers[j] > numbers[j+1]){
                var temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
                onStep(j+1, numbers[j+1], Colors.BAR_BUBBLE_SWAP, false);
            }
            onStep(j, numbers[j], Colors.BAR_NORMAL, false);
        }
        onStep(n-i-1, numbers[n-i-1], Colors.BAR_SORTED, n-i-1 == 0);
    }
}

export default function BubbleSort(numbers, onStep) {
    bubble_sort(numbers, onStep);
}