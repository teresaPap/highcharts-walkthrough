<template>
  <Chart :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";
import { getGrowth } from "../api/api";

import accessibility from "highcharts/modules/accessibility";
import Highcharts from "highcharts";
import chartTheme from "../htbChartTheme";

accessibility(Highcharts);

Highcharts.theme = { ...chartTheme };
Highcharts.setOptions(Highcharts.theme);

export default {
  name: "Demo5",
  components: { Chart },
  data() {
    return {
      chartData: {},
      chartConfig: {
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                credits: {
                  enabled: false,
                },
                legend: {
                  enabled: false,
                },
                yAxis: {
                  labels: {
                    enabled: false,
                  },
                },
              },
            },
            {
              condition: {
                minWidth: 501,
              },
              chartOptions: {
                yAxis: {
                  labels: {
                    enabled: true,
                  },
                },
              },
            },
          ],
        },
        subtitle: {
          text: "New Hires Per Month",
        },
        title: {
          text: "Company growth",
        },
        xAxis: {
          type: "datetime",
          accessibility: {
            rangeDescription: "Representing months from 2019 to 2022",
          },
        },
        yAxis: {
          title: {
            text: null,
          },
          accessibility: {
            rangeDescription: "Representing new hires",
          },
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
