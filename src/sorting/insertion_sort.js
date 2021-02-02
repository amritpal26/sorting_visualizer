import { Colors } from './colors';

export default function InsertionSort(numbers, onStep) {
    var n = numbers.length;
    for (var i=0; i<n; i++) {
        onStep(i, numbers[i], Colors.BAR_INSERTION_CURRENT, false, true);

        var key = numbers[i];
        var j = i-1;
        while(j>=0 && key < numbers[j]) {
            if (j < (i-1)) {
                onStep(j, numbers[j], Colors.BAR_INSERTION_SWAP, false, true);
                onStep(j+1, numbers[j+1], Colors.BAR_INSERTION_SWAP, false, true);
            }
            numbers[j+1] = numbers[j];
            j -= 1
        }
        numbers[j+1] = key;
        for(var k=j; k<=i; k++) {
            onStep(k, numbers[k], Colors.BAR_SORTED, k == n-1, true);
        }
    }
}