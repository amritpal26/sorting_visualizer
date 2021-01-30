import mergeSort from './merge_sort';
import { Colors } from './colors';

export const AlgorithmTypes = {
    MERGE_SORT: "merge_sort",
    QUICK_SORT: "quick_sort",
    HEAP_SORT: "heap_sort",
    BUBBLE_SORT: "bubble_sort",
}

export { Colors }; 

export const SortingAlgorithms = {
    MergeSort: mergeSort
}