<template>
    <div class="timer-box">
        <el-date-picker
            v-model="timerValue"
            :shortcuts="shortcuts"
            end-placeholder="结束日期"
            range-separator="To"
            start-placeholder="开始日期"
            type="datetimerange"
            value-format="YYYY-MM-DD HH:mm:ss"
            @change="handleTimerChange"
        />

        <div class="btns-box">
            <el-button>导出日志</el-button>
            <el-button>导出呼损回访</el-button>
            <el-button>发送邮件</el-button>
        </div>

        <RecodeChart :chartData="chartData"/>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import RecodeChart from './components/RecodeChart';

// defineEmits
// const emits = defineEmits(['handleTimerChange']);
const timerValue = ref([]);

const shortcuts = [
  {
    text: '上周',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: '上月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: '上三月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

let chartData = [];
chartData = ['1', '2'];

// };
// 使用刚指定的配置项和数据显示图表。
// let begintime = new Date().Format("yyyy-MM-dd HH-mm-ss")

const handleTimerChange = (val) => {
  console.log(val, timerValue);
  //   emits('handleTimerChange');
};

console.log(timerValue, '===');

</script>

<style scoped lang="scss">
.timer-box {
    width: 100%;
    text-align: center;
    padding-top: 30px;
    .btns-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
    }
}
</style>
