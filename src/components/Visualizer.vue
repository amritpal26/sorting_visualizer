<template>
    <v-container>
        <div class="visualizer-container">
            <div id="array-container">
                <div class="array-bar" 
                    v-for="(bar, index) in barsArray"  
                    :key="index"
                    :style="bar.style"/>
            </div>
            <div class="bar-bottom-line"></div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Visualizer',
    props: {
        numbersArray: {
            type: Array,
            default: () => {return [] }
        }
    },
    data: () => ({
        barsArray: []
    }),
    mounted() {
        this.calculateBarsArray();
    },
    watch: {
        numbersArray: function() {
            this.calculateBarsArray();
        }
    },
    methods: {
        calculateBarsArray() {
            var barMarginPercent = 0.2;
            var barWidth = this.calculateBarWidth(this.numbersArray.length, barMarginPercent);
            
            var bars = [];
            this.numbersArray.forEach(barHeight => {
                bars.push({
                    height: barHeight,
                    style: {
                        height: `${4*barHeight}px`,
                        width: `${barWidth}%`,
                        margin: `0px ${barMarginPercent}%`,
                        backgroundColor: '#9803fc'
                    }
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