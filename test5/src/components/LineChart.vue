<script setup lang="ts">
import { defineProps, defineComponent, ref, onMounted } from 'vue'
import { Chart as ChartJS, LineElement, PointElement, Title, Tooltip, Legend, LinearScale, CategoryScale } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const props = defineProps<{ url: string }>()

const data = ref<{
  labels: string[],
  datasets: {
    label: string,
    backgroundColor: string,
    data: number[],
  }[]
}>({
  labels: [],
  datasets: [
    {
      label: 'Data Received',
      backgroundColor: '#f87979',
      data: []
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}

const data_no = ref(0)

const connectWebSocket = () => {
  const ws = new WebSocket(props.url)

  ws.onmessage = (event) => {
    const num: number = event.data
    data.value = {
      labels: [...data.value.labels, `Data${data_no.value++}`],
      datasets: [
        {
          ...data.value.datasets[0],
          data: [...data.value.datasets[0].data, num]
        }
      ]
    }
  }
}

onMounted(() => {
  connectWebSocket()
})
</script>

<template>
  <Line :data="data" :options="options" />
</template>

<style scoped>
</style>


