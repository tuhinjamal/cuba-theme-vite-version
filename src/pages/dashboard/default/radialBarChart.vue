<template>
  <div class="col-12">
    
    <apexchart
      height="120"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
var primary = localStorage.getItem("primary_color") || "#24695c";
var secondary = localStorage.getItem("secondary_color") || "#ba895d";
export default {
  props: {
    count: Number,
  },
  data() {
    return {
      userData: 120,
      series: [],
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                show: false,
                fontSize: "0px",
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },

        labels: ["", "", "", ""],
        colors: [primary, secondary, "#222222", "#717171"],
      },
    };
  },
};
</script>
