<template>
    <v-container>
        <div class="visualizer-container">
            <div id="array-container">
                <div class="array-bar" 
                    v-for="(barHeight, index) in barsArray"  
                    :key="index"
                    :style="{height: `${4*barHeight}px`, width: `${barWidth}%`, margin: `${barMarginPercent}%`}"/>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Visualizer',
    props: {
        barsArray: {
            type: Array,
            default: () => {return [36, 66, 72, 100, 94, 39, 48, 71, 40, 38, 51, 52, 44, 60, 67, 86, 44, 53, 22, 94] }
        }
    },
    data: () => ({
        barWidth: 2,
        barMarginPercent: 0.2
    }),
    mounted() {
        this.calculateBarWidth();
    },
    watch: {
        barsArray: function() {
            this.calculateBarWidth();
        }
    },
    methods: {
        calculateBarWidth: function () {
            if (!this.barsArray) return;
            this.barWidth = (100/this.barsArray.length)- (this.barMarginPercent * 2);
        }
    }
}
</script>

<style>
.visualizer-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
#array-container {
    width: 90%;
    margin: 40px auto;
}
#array-container .array-bar {
    display: inline-block;
    margin: 0 2px;
    background-color: brown;
}
</style>