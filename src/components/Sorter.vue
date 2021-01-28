<template>
    <v-container id="sorter-container">
        <visualizer id="visualizer"
            :barsArray="array"/>
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
        startSort: function() {
            console.log("startSort");
        },
        generateNewArray : function (arraySize) {
            console.log('generateNewArray', arraySize);
            var range = MaxArrayElement - MinArrayElement +1;
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