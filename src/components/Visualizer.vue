<template>
    <v-container>
        <div class="visualizer-container">
            <div id="array-container">
                <div class="array-bar" 
                    v-for="(bar, index) in barsArray"  
                    :key="index"
                    :style="bar"/>
            </div>
            <div class="bar-bottom-line"></div>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'Visualizer',
    props: {
        numbersArray: {
            type: Array,
            default: () => {return [] }
        }
    },
    data: () => ({
        barsArray: [],
        baseDelay: 0
    }),
    mounted() {
        this.calculateBarsArray();
    },
    watch: {
        numbersArray: function() {
            this.calculateBarsArray();
            this.baseDelay = 0;
        }
    },
    methods: {
        calculateBarsArray() {
            var barMarginPercent = 0.2;
            var barWidth = this.calculateBarWidth(this.numbersArray.length, barMarginPercent);
            
            var bars = [];
            this.numbersArray.forEach(barHeight => {
                bars.push({
                    height: `${4*barHeight}px`,
                    width: `${barWidth}%`,
                    margin: `0px ${barMarginPercent}%`,
                    backgroundColor: '#9803fc'
                })
            });
            this.barsArray = bars;
        },
        calculateBarWidth: function (length, margin) {
            if (!this.barsArray) {
                return 0;
            }
            return (100/length) - (margin * 2);
        },
        updateBarStyle: function(index, height, color) {
            var me = this;
            setTimeout(() => {
                var bar = {
                    ...me.barsArray[index],
                    height: `${4*height}px`,
                    backgroundColor: color
                };
                Vue.set(me.barsArray, index, bar);
            }, me.baseDelay * 100);
            me.baseDelay++;
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
    margin: 0px auto;
}
#array-container .array-bar {
    display: inline-block;
}
.visualizer-container .bar-bottom-line {
    height: 2px;
    width: 90%;
    margin: 0px auto;
    background-color: blue;
}
</style>