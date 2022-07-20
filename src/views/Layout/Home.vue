<template>
    <div class="home-box">
        <div class="demo-tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane
                    v-for="(item,index) in constantHome.homeNav"
                    :key="index"
                    :label="item.name"
                    :name="item.sign"
                ></el-tab-pane>
            </el-tabs>

            <router-view />
        </div>
    </div>
</template>

<script setup>
import constant from '@/constant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// import type { TabsPaneContext } from 'element-plus'
const { home: constantHome } = constant;

const activeName = ref('first');

const handleClick = ({ index }) => {
  const {
    path = '',
  } = constantHome.homeNav[index];
  router.push(path);
  //   console.log(path);
};
</script>

<style lang="scss">
.home-box {
    // padding: 30px;
    // padding: 20px 0;
    width: 100%;

    .demo-tabs {
        margin: auto;
        width: 800px;
    }
}
</style>
