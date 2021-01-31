import mergeSort from './merge_sort';
import bubbleSort from './bubble_sort';
import selectionSort from './selection_sort';
import insertionSort from './insertion_sort';
import { Colors } from './colors';

export const AlgorithmTypes = {
    MERGE_SORT: "merge_sort",
    BUBBLE_SORT: "bubble_sort",
    SELECTION_SORT: "selection_sort",
    INSERTION_SORT: "insertion_sort",
    QUICK_SORT: "quick_sort",
    HEAP_SORT: "heap_sort",
}

export const Configs = {
    MinArraySize: 20,
    MaxArraySize: 100,
    
    MinAnimationInterval: 25,
    MaxAnimationInterval: 500,
    DefaultAnimationInterval: 100,
    DefaultAlgorithmType: AlgorithmTypes.INSERTION_SORT
}

export { Colors }; 

export const SortingAlgorithms = {
    MergeSort: mergeSort,
    BubbleSort: bubbleSort,
    SelectionSort: selectionSort,
    InsertionSort: insertionSort
}