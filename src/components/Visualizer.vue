<template>
    <v-container>
    </v-container>
</template>

<script>
    export default {
        name: 'Visualizer',
        props: {
            array: {
                type: Array,
                default: () => {return [36, 66, 72, 100, 94, 39, 48, 71, 40, 38, 51, 52, 44, 60, 67, 86, 44, 53, 22, 94] }
            }
        },
        data: () => ({
        
        }),
    }
</script>
