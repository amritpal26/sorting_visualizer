import mergeSort from './merge_sort';
import bubbleSort from './bubble_sort';
import selectionSort from './selection_sort';
import insertionSort from './insertion_sort';
import heapSort from './heap_sort';
import quickSort from './quick_sort';
import { Colors } from './colors';

var animationIntervals = [10, 20, 30, 40, 50, 75, 100];
for (var i = 125; i <=500; i += 25){
    animationIntervals.push(i);
}
animationIntervals.reverse();

export const AlgorithmTypes = {
    MERGE_SORT: "merge_sort",
    BUBBLE_SORT: "bubble_sort",
    SELECTION_SORT: "selection_sort",
    INSERTION_SORT: "insertion_sort",
    HEAP_SORT: "heap_sort",
    QUICK_SORT: "quick_sort",
}

export const Configs = {
    MinArraySize: 20,
    MaxArraySize: 200,

    MinArrayElement: 5,
    MaxArrayElement: 100,

    DefaultAnimationInterval: 100,
    DefaultAlgorithmType: AlgorithmTypes.MERGE_SORT,

    AnimationIntervals: animationIntervals
}

export { Colors }; 

export const SortingAlgorithms = {
    MergeSort: mergeSort,
    BubbleSort: bubbleSort,
    SelectionSort: selectionSort,
    InsertionSort: insertionSort,
    HeapSort: heapSort,
    QuickSort: quickSort
}