<template>
    <v-container id="sorter-container">
        <visualizer id="visualizer"
            ref="visualizer"
            :numbersArray="array"
            :animationInterval="animationInterval"
            @animationFinished="onFinishSorting" />
        <controls id="controls"
            :isSorting="isSorting"
            @sort="startSort"
            @newArray="generateNewArray"
            @animationInterval="onAnimationIntervalChange" />
    </v-container>
</template>

<script>
const MinArrayElement = 20;
const MaxArrayElement = 100;

import Visualizer from './Visualizer';
import Controls from './Controls';
import { AlgorithmTypes, SortingAlgorithms, Configs } from '../sorting/index';

export default {
    name: 'Sorter',
    components: {
        'visualizer': Visualizer,
        'controls': Controls 
    },
    data: () => ({
        array: [],
        isSorting: false,
        animationInterval: Configs.DefaultAnimationInterval
    }),
    methods: {
        onFinishSorting: function() {
            this.isSorting = false;
        },
        startSort: function(sortType) {
            switch (sortType) {
                case AlgorithmTypes.MERGE_SORT:
                    this.isSorting = true;
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
        onAnimationIntervalChange: function(animationInterval) {
            this.animationInterval = animationInterval;
        }
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