<template>
  <Chart :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";
import { getGrowth } from "../api/api";
import highchartsDebugger from "highcharts/modules/debugger";
import accessibility from "highcharts/modules/accessibility";
import Highcharts from "highcharts";

highchartsDebugger(Highcharts);
accessibility(Highcharts);

export default {
  name: "Demo2",
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
          accessibility: {
            rangeDescription: "Representing new hires",
          },
        },
        xAxis: {
          type: "datetime",
          accessibility: {
            rangeDescription: "Representing months from 2019 to 2022",
          },
        },
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        ...this.chartConfig,
        series: [
          { name: "Total Employees", data: this.chartData },
          // {
          //   name: "Intentionally corrupted data",
          //   data: [
          //     { x: 1554066000000, y: 10 },
          //     { x: 1651352400000, y: 110 },
          //     { x: 1606773600000, y: 180 },
          //   ],
          // },
        ],
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
