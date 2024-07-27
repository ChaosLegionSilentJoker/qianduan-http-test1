<template>
  <el-container class="line-chart-container">
    <el-main>
      <LineChart :url="url" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import LineChart from './components/LineChart.vue'
const url = 'ws://127.0.0.1:8000/ws'
</script>

<style scoped>
.line-chart-container {
  height: 100%;
  background-color: #E5EAF3;
  border-radius: 5px;
}
</style>
