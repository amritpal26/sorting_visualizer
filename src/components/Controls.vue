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
                    :hide-details="true" 
                    :v-model="arraySize" 
                    thumb-label="always" 
                    :min="minArraySize" 
                    @change="generateNewArray" 
                    :max="maxArraySize" />
                <v-select class="controls-item grow last-item" 
                    return-object
                    label="Sorting Algorithm" 
                    :hide-details="true" 
                    v-model="sortingAlgorithm" 
                    :items="sortingAlgorithms" 
                    item-text="name" />
            </div>
            <v-btn class="sort-button" 
                dark color="primary" 
                :disabled="canSort" 
                @click="sort">Sort!</v-btn>
        </v-card>
    </v-container>
</template>

<script>
const MinArraySize = 20;
const MaxArraySize = 100;
const MinArrayElement = 20;
const MaxArrayElement = 100;

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
            {name: 'Merge Sort'},
            {name: 'Quick Sort'},
            {name: 'Heap Sort'},
            {name: 'Bubble Sort'},
        ]
    }),
    mounted() {
        this.generateNewArray();
    },
    computed: {
        canSort : function() {
            return !this.isSorting && this.sortingAlgorithm && this.array && this.array.length === this.arraySize;
        }
    },
    methods: {
        generateNewArray : function () {
            var range = MaxArrayElement - MinArrayElement +1;
            this.array = Array(this.arraySize).fill().map(() => MinArrayElement + Math.round(Math.random() * range));
        },
        sort : function () {
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
