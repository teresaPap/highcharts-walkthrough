<template>
  <Chart :options="chartOptions" />
</template>

<script>
import { Chart } from "highcharts-vue";
import { getGrowth } from "../api/api";
import accessibility from "highcharts/modules/accessibility";
import Highcharts from "highcharts";

accessibility(Highcharts);

export default {
  name: "Demo3",
  components: { Chart },
  data() {
    return {
      chartData: {},

      chartConfig: {
        colors: ["#9fef00"],
        credits: {
          text: "Source: Hack the Box",
          href: "https://www.hackthebox.com/",
          style: {
            color: "#a4b1cd",
          },
        },

        chart: {
          backgroundColor: "#1a2332",
          plotBackgroundColor: "#1a2332",
          showAxes: false,
        },
        legend: {
          itemStyle: {
            color: "#a4b1cd",
            font: "bold 10px",
          },
          itemHoverStyle: {
            color: "#fff",
          },
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },

        subtitle: {
          text: "New Hires Per Month",
          style: {
            color: "#fff",
          },
        },
        title: {
          text: "Company growth",
          style: {
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.6em",
          },
        },
        tooltip: {
          backgroundColor: "#1a2332",
          borderColor: "#a4b1cd",
          borderRadius: 0,
          borderWidth: 1,
          padding: 18,
          style: {
            color: "#fff",
            fontSize: "1.2em",
            fontWeight: 400,
          },
        },
        xAxis: {
          type: "datetime",
          accessibility: {
            rangeDescription: "Representing months from 2019 to 2022",
          },
          gridLineColor: "#121926",
          gridLineWidth: 1,
          lineColor: "#a4b1cd",
          tickColor: "#a4b1cd",
          labels: {
            style: {
              color: "#a4b1cd",
            },
          },
        },
        yAxis: {
          title: {
            text: null,
          },
          accessibility: {
            rangeDescription: "Representing new hires",
          },
          gridLineColor: "#121926",
          tickAmount: 5,
          labels: {
            style: {
              color: "#a4b1cd",
            },
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
