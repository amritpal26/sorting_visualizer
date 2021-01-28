<template>
    <v-container>
        <v-card class="controls-container">
            <div class="controls">
                <v-btn class="controls-item" 
                    dark
                    color="primary" 
                    @click="generateNewArray">Generate New Array</v-btn>
                <v-slider class="controls-item grow" 
                    label="Array Size" 
                    thumb-label="always" 
                    v-model="arraySize" 
                    :hide-details="true" 
                    :min="minArraySize"
                    :max="maxArraySize" 
                    @change="generateNewArray"
                    />
                <v-select class="controls-item grow last-item" 
                    label="Sorting Algorithm" 
                    :hide-details="true" 
                    v-model="sortingAlgorithm" 
                    :items="sortingAlgorithms" 
                    item-text="name" />
            </div>
            <v-btn class="sort-button" 
                dark color="primary" 
                :disabled="!canSort" 
                @click="sort">Sort!</v-btn>
        </v-card>
    </v-container>
</template>

<script>
const MinArraySize = 20;
const MaxArraySize = 100;

import { AlgorithmTypes } from '../algorithms/index';

export default {
    name: 'Controls',
    props: {
        isSorting: Boolean
    },
    data: () => ({
        arraySize: MinArraySize,
        sortingAlgorithm: null,
        array: null,
        minArraySize: MinArraySize,
        maxArraySize: MaxArraySize,
        sortingAlgorithms: [
            { name: 'Merge Sort', value: AlgorithmTypes.MERGE_SORT },
            { name: 'Quick Sort', value: AlgorithmTypes.QUICK_SORT },
            { name: 'Heap Sort', value: AlgorithmTypes.HEAP_SORT },
            { name: 'Bubble Sort', value: AlgorithmTypes.BUBBLE_SORT },
        ]
    }),
    mounted() {
        this.generateNewArray();
    },
    computed: {
        canSort : function() {
            return !this.isSorting && this.sortingAlgorithm;
        }
    },
    methods: {
        generateNewArray: function () {
            this.$emit('newArray', this.arraySize);
        },
        sort: function () {
            console.log(this.sortingAlgorithm);
            this.$emit('sort');
        }
    }
}
</script>

<style>
    .controls-container {
        text-align: center;
        padding: 20px 30px;
    }
    .controls {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
    }
    .controls .controls-item {
        align-self: center;
        margin-right: 20px;
    }
    .controls .controls-item.grow {
        flex: 1 1 0;
    }
    .controls .controls-item.last-item{
        margin-right: 0px;
    }
    .controls-container .sort-button {
        width: 80%;
        align-self: center;
        margin-right: 20px;
    }
</style>
