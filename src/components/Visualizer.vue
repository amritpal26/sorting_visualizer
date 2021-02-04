<template>
    <v-container>
        <div class="visualizer-container">
            <div id="array-container" ref="barsContainer">
                <div class="array-bar" 
                    v-for="(bar, index) in barsArray"  
                    :key="index"
                    :style="bar.style">
                    <span v-if="showBarNumber">{{bar.height}}</span>
                </div>
            </div>
            <div class="bar-bottom-line"
                :style="{backgroundColor: bottomBarColor}"></div>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue';
import { Colors, Configs } from '../sorting/index';

export default {
    name: 'Visualizer',
    props: {
        numbersArray: {
            type: Array,
            default: () => {return [] }
        },
        animationInterval: {
            type: Number,
            default: Configs.DefaultAnimationInterval
        }
    },
    data: () => ({
        maxHeight: -1,
        barsArray: [],
        animationCount: -1,
        bottomBarColor: Colors.BAR_BASE,
        barsMargin: 0,
        barsWidth: 0,
        showBarNumber: false
    }),
    mounted() {
        this.calculateBarsDimensions();
        this.calculateBarsArray();
        window.addEventListener('resize', this.couldShowBarNumber)
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.couldShowBarNumber);
    },
    watch: {
        numbersArray: function() {
            this.calculateBarsDimensions();
            this.calculateBarsArray();
            this.animationCount = -1;
        }
    },
    methods: {
        calculateBarsDimensions: function() {
            this.barsMargin = 0.2;
            this.barsWidth = (100/this.numbersArray.length) - (this.barsMargin * 2);
            this.maxHeight = Math.max(...this.numbersArray);
            this.couldShowBarNumber();
        },
        couldShowBarNumber() {
            var containerWidth = this.$refs.barsContainer.clientWidth;
            this.showBarNumber = (containerWidth * (this.barsWidth/100)) > 16;
        },
        calculateBarsArray() {
            var bars = [];
            this.numbersArray.forEach(barHeight => {
                var heightPercent = (barHeight / this.maxHeight) * 100;
                bars.push({
                    height: barHeight,
                    style: {
                        height: `${heightPercent}%`,
                        width: `${this.barsWidth}%`,
                        margin: `0px ${this.barsMargin}%`,
                        backgroundColor: Colors.BAR_NORMAL
                    }
                })
            });
            this.barsArray = bars;
        },
        updateBarStyle: function(index, height, color, isSortingFinished, shouldDelay) {
            var me = this;
            if (shouldDelay || me.animationCount == -1) {
                me.animationCount++;
            }
            setTimeout(() => {
                var heightPercent = (height / this.maxHeight) * 100;
                var bar = {
                    height: height,
                    style: {
                        ...me.barsArray[index].style,
                        height: `${heightPercent}%`,
                        backgroundColor: color
                    }
                };
                Vue.set(me.barsArray, index, bar);
                if (isSortingFinished) {
                    this.$emit('animationFinished')
                    this.animationCount = -1;
                }
            }, me.animationCount * this.animationInterval);
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
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 90%;
    margin: 0px auto 5px;
}
#array-container .array-bar {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    color: white;
}
.array-bar span {
    margin-top: auto;
    align-self: center;
    font-size: 12px;
    font-weight: 600;
}
.visualizer-container .bar-bottom-line {
    height: 4px;
    width: 90%;
    margin: 0px auto;
}
</style>