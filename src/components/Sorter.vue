<template>
    <v-container id="sorter-container">
        <visualizer id="visualizer"
            ref="visualizer"
            :numbersArray="array"/>
        <controls id="controls"
            @sort="startSort"
            @newArray="generateNewArray" />
    </v-container>
</template>

<script>
const MinArrayElement = 20;
const MaxArrayElement = 100;

import Visualizer from './Visualizer';
import Controls from './Controls';
import { AlgorithmTypes, SortingAlgorithms } from '../algorithms/index';

export default {
    name: 'Sorter',
    components: {
        'visualizer': Visualizer,
        'controls': Controls 
    },
    data: () => ({
        array: []
    }),
    methods: {
        startSort: function(sortType) {
            switch (sortType) {
                case AlgorithmTypes.MERGE_SORT:
                    // this.$refs.visualizer.updateBarStyle(10, 50, '#ffff00');
                    SortingAlgorithms.MergeSort(this.array, this.$refs.visualizer.updateBarStyle);
                    break;
                default:
                    break;
            }
        },
        generateNewArray : function (arraySize) {
            var range = MaxArrayElement - MinArrayElement + 1;
            this.array = Array(arraySize).fill().map(() => MinArrayElement + Math.round(Math.random() * range));
        },
    }
}
</script>

<style>
#sorter-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
#visualizer {
    flex: 1 1 0;
}
#controls {
    margin: 20px 0px;
}
</style>