<template>
  <Chart :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";
import { getGrowth } from "../api/api";

export default {
  name: "Demo1",
  components: { Chart },
  data() {
    return {
      chartData: {},
      chartConfig: {
        title: {
          text: "Company growth",
        },
        subtitle: {
          text: "New Hires Per Month",
        },
        credits: {
          text: "Source: Hack the Box",
          href: "https://www.hackthebox.com/",
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        xAxis: {
          type: "datetime",
        },
      },
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
