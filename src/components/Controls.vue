<template>
    <v-container>
        <v-card class="controls-container"
            elevation="6">
            <div class="controls">
                <v-btn class="controls-item" 
                    outlined
                    elevation="2"
                    color="primary"
                    :disabled="isSorting"
                    @click="generateNewArray">Generate New Array</v-btn>
                <v-slider class="controls-item grow" 
                    hide-details 
                    thumb-label
                    label="Array Size" 
                    v-model="arraySize"
                    :disabled="isSorting"
                    :min="configs.MinArraySize"
                    :max="configs.MaxArraySize" 
                    @change="generateNewArray" />
                <v-slider class="controls-item grow" 
                    hide-details
                    ticks
                    label="Sorting Speed"
                    step="25"
                    :value="defaultSpeed"
                    :disabled="isSorting"
                    :min="configs.MinAnimationInterval"
                    :max="configs.MaxAnimationInterval"
                    @change="animationIntervalChange"/>
                <v-select class="controls-item grow last-item" 
                    hide-details
                    label="Sorting Algorithm" 
                    v-model="sortingAlgorithm" 
                    item-text="name"
                    :disabled="isSorting"
                    :items="sortingAlgorithms" />
            </div>
            <v-btn class="sort-button" 
                elevation="2"
                color="primary"
                :disabled="!canSort" 
                @click="sort">Sort!</v-btn>
        </v-card>
    </v-container>
</template>

<script>
import { AlgorithmTypes, Configs } from '../sorting/index';

export default {
    name: 'Controls',
    props: {
        isSorting: Boolean
    },
    data: () => ({
        configs: Configs,
        arraySize: Configs.MinArraySize,
        animationInterval: Configs.DefaultAnimationInterval,
        sortingAlgorithm: Configs.DefaultAlgorithmType,
        array: null,
        sortingAlgorithms: [
            { name: 'Merge Sort', value: AlgorithmTypes.MERGE_SORT },
            { name: 'Bubble Sort', value: AlgorithmTypes.BUBBLE_SORT },
            { name: 'Quick Sort', value: AlgorithmTypes.QUICK_SORT },
            { name: 'Heap Sort', value: AlgorithmTypes.HEAP_SORT },
            { name: 'Selection Sort', value: AlgorithmTypes.SELECTION_SORT },
        ]
    }),
    mounted() {
        this.generateNewArray();
    },
    computed: {
        canSort : function() {
            return !this.isSorting && this.sortingAlgorithm;
        },
        defaultSpeed() {
            return Configs.MinAnimationInterval + Configs.MaxAnimationInterval - Configs.DefaultAnimationInterval;
        }
    },
    methods: {
        generateNewArray: function () {
            this.$emit('newArray', this.arraySize);
        },
        animationIntervalChange(val) {
            this.animationInterval = Configs.MinAnimationInterval + Configs.MaxAnimationInterval - val;
            this.$emit('animationInterval', this.animationInterval);
        },
        sort: function () {
            this.$emit('sort', this.sortingAlgorithm);
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