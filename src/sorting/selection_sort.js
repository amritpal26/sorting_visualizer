import { Colors } from './colors';

export default function SelectionSort(numbers, onStep) {
    var n = numbers.length;
    for(var i=0; i<n; i++) {
        var maxIndex = 0;
        for(var j=0; j<n-i; j++){
            if (numbers[j] > numbers[maxIndex]){
                maxIndex = j;
            }
        
            // animation for selection.
            onStep(j, numbers[j], Colors.BAR_SELECTION_CURRENT, false, true);
            if (j>0){
                onStep(j-1, numbers[j-1], Colors.BAR_NORMAL, false, false);
            }
        }
        
        var temp = numbers[maxIndex];
        numbers[maxIndex] = numbers[n-i-1];
        numbers[n-i-1] = temp;

        // max element and last element animation.
        onStep(maxIndex, numbers[maxIndex], Colors.BAR_SELECTION_SWAP, n-i-1 == 0, true);
        onStep(n-i-1, numbers[n-i-1], Colors.BAR_SELECTION_SWAP, n-i-1 == 0, false);

        // swap animation.
        onStep(maxIndex, numbers[maxIndex], Colors.BAR_NORMAL, n-i-1 == 0, false);
        onStep(n-i-1, numbers[n-i-1], Colors.BAR_SORTED, n-i-1 == 0, true);
    }
}