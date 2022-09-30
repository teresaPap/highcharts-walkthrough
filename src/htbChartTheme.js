// Highcharts theming docs: https://www.highcharts.com/docs/chart-design-and-style/themes

export default {
  colors: [
    "#9fef00",
    "#9f00ff",
    "#ff9a61",
    "#0086ff",
    "#ff2f3e",
    "#c35fff",
    "#42f7a8",
    "#a4b1cd",
    "#8fffce",
    "#ff78d1",
    "#77beff",
    "#ff6772",
    "#d3ff7a",
    "#ff00a8",
    "#5200ff",
    "#ffaf00",
  ],
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
    spacing: 10,
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
    pie: {
      borderWidth: 5,
      borderColor: "#1a2332",
      dataLabels: {
        style: {
          color: "#a4b1cd",
        },
      },
    },
    column: {
      borderColor: "1a2332",
    },
    bar: {
      borderColor: "1a2332",
    },
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  subtitle: {
    style: {
      color: "#a4b1cd",
    },
  },
  title: {
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
    gridLineColor: "#121926",
    tickAmount: 5,
    labels: {
      style: {
        color: "#a4b1cd",
      },
    },
  },
};
