<template>
    <div>
        {{chartData}}
        <div ref="recodeDom" style="width: 100%; height: 400px;padding-top: 50px"></div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  chartData: Array,
});
const recodeDom = ref(null);

const myChart = echarts.init(recodeDom);
console.log(props.chartData, myChart);
</script>
