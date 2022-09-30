<template>
  <Chart :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";
import { getGrowth } from "../api/api";

export default {
  name: "Demo0",
  components: { Chart },
  data() {
    return {
      chartData: {},
      chartConfig: {},
    };
  },
  computed: {
    chartOptions() {
      return {
        ...this.chartConfig,
        series: [{ name: "Total Employees", data: this.chartData }],
      };
    },
  },
  beforeMount() {
    getGrowth().then((newHiresPerMonth) => {
      this.chartData = newHiresPerMonth;
    });
  },
};
</script>
