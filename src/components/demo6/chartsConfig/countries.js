import chartTheme from "../../../htbChartTheme.js";

export default {
  title: {
    text: "Employees Around the World",
  },
  credits: {
    enabled: false,
  },
  mapNavigation: {
    enabled: true,
    enableButtons: false,
  },
  colorAxis: {
    min: 0,
    maxColor: chartTheme.colors[1],
    minColor: chartTheme.colors[7],
  },
  chart: {
    height: 700,
  },
};
