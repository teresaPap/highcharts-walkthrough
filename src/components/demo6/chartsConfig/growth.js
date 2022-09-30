export default {
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
    text: "Company Growth",
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
};
