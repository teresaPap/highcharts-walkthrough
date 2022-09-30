<template>
  <div>
    <div class="container">
      <div class="panel panel-1">
        <Chart :options="countriesOptions" :constructor-type="'mapChart'" />
      </div>
      <div class="panel panel-2">
        <Chart :options="growthOptions" />
      </div>
      <div class="panel panel-3">
        <Chart :options="genderOptions" />
      </div>
      <div class="panel panel-4">
        <Chart :options="departmentOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import {
  getGrowth,
  getGenders,
  getDepartments,
  getCountries,
} from "../../api/api";
import {
  growthConfig,
  gendersConfig,
  departmentConfig,
  countriesConfig,
} from "./chartsConfig";

import HighchartsMapModule from "highcharts/modules/map";
import worldMap from "@/assets/worldMap";
import accessibility from "highcharts/modules/accessibility";
import Highcharts from "highcharts";
import chartTheme from "../../htbChartTheme.js";

accessibility(Highcharts);
HighchartsMapModule(Highcharts);

Highcharts.maps["myMapName"] = worldMap;
Highcharts.theme = { ...chartTheme };
Highcharts.setOptions(Highcharts.theme);

export default {
  name: "Demo6",
  components: { Chart },
  data() {
    return {
      growthData: null,
      genderData: null,
      departmentData: null,
      countriesData: null,
    };
  },
  computed: {
    growthOptions() {
      return {
        ...growthConfig,
        series: [{ name: "Total Employees", data: this.growthData }],
      };
    },
    genderOptions() {
      return {
        ...gendersConfig,
        series: [{ name: "Gender Ratio", data: this.genderData }],
      };
    },
    departmentOptions() {
      return {
        ...departmentConfig,
        series: this.departmentData,
      };
    },
    countriesOptions() {
      return {
        ...countriesConfig,
        series: [
          {
            mapData: worldMap,
            type: "map",
            name: "Countries",
            data: this.countriesData,
          },
        ],
      };
    },
  },
  beforeMount() {
    getGrowth().then((newHiresPerMonth) => {
      this.growthData = newHiresPerMonth;
    });
    getGenders().then((genders) => {
      this.genderData = genders;
    });
    getDepartments().then((departments) => {
      this.departmentData = departments;
    });
    getCountries().then((countries) => {
      this.countriesData = countries;
    });
  },
};
</script>

<style scoped>
.panel {
  border-radius: 4px;
  padding: 1em;
  background-color: #1a2332;
}
.panel-1 {
  grid-area: panel-1;
}
.panel-2 {
  grid-area: panel-2;
}
.panel-3 {
  grid-area: panel-3;
}
.panel-4 {
  grid-area: panel-4;
}
.container {
  margin: 0 auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 33%);
  grid-template-areas:
    "panel-1 panel-1 panel-1"
    "panel-2 panel-2 panel-3"
    "panel-4 panel-4 panel-4";
}

@media (max-width: 1300px) {
  .container {
    grid-template-columns: repeat(3, 33%);
    grid-template-areas:
      "panel-1 panel-1 panel-1"
      "panel-2 panel-2 panel-3"
      "panel-4 panel-4 panel-4";
  }
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: repeat(2, 50%);
    grid-template-areas:
      "panel-1 panel-1"
      "panel-2 panel-2"
      "panel-3 panel-3"
      "panel-4 panel-4";
  }
}
</style>
