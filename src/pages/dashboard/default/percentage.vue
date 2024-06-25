<template>
  <b-row class="text-center mt-3">
    <b-col cols="12" md="4" v-for="(card, index) in formCards" :key="index">
      <b-link class="link text-center card" :class="card.cardClass">
        <p class="m-0 p-0 pt-2 title">মোট</p>
        <p class="title m-0 p-0">{{ card.title }}</p>
        <p class="title m-0 p-0">{{ card.constant }}</p>

        <apexchart
          height="150"
          type="radialBar"
          :options="chartOptions"
          :series="card.series"
        ></apexchart>

        <b class="m-0 p-0 pb-2">&nbsp;</b>
      </b-link>
    </b-col>
  </b-row>
</template>

<script>
var primary = localStorage.getItem("primary_color") || "#24695c";
var secondary = localStorage.getItem("secondary_color") || "#ba895d";
export default {
  data() {
    return {
      formCards: [
        {
          id: 1,
          title: "গেজেটেড ",
          constant: "অফিসার",
          series: [],
          parcentage: "৩৫%",
          underline: "২৩,৫২০ জন",
          cardClass: "classOne",
        },
        {
          id: 2,
          title: "নন-গেজেটেড ",
          constant: "অফিসার",
          series: [],
          parcentage: "৩৫%",
          underline: "২৩,৫২০ জন",
          cardClass: "classTwo",
        },
        {
          id: 3,
          title: "গেজেটেড ক্যাডার ",
          constant: "অফিসার",
          series: [],
          parcentage: "৩৫%",
          underline: "২৩,৫২০ জন",
          cardClass: "classThree",
        },
      ],
      userList: [],
      // chart
      // chartOptions: {
      //   chart: {
      //     type: "radialBar",
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       dataLabels: {
      //         name: {
      //           show: false,
      //           fontSize: "0px",
      //         },
      //         value: {
      //           formatter: function (val) {
      //             return parseInt(val);
      //           },
      //           color: "#111",
      //           fontSize: "36px",
      //           show: true,
      //         },
      //       },
      //     },
      //   },

      //   labels: ["Apples", "Oranges", "Bananas", "Berries"],
      //   colors: [primary, secondary, "#222222", "#717171"],
      // },

      series: [75],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",

              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: -20,
                show: false,
                color: "#888",
                fontSize: "0px",
              },
              value: {
                formatter: function (val) {
                  return parseFloat(val).toFixed(1) + "%";
                },
                color: "#111",
                fontSize: "25px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: [""],
      },
    };
  },
  created() {
    this.viewUserList();
  },
  methods: {
    viewUserList(item) {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.userList = res.data.length;

          this.formCards[0].series[0] = (res.data.length * 100) / 2350;
          this.formCards[1].series[0] = res.data.length;
          this.formCards[2].series[0] = res.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
.title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
}
.classOne {
  background: linear-gradient(rgba(59, 214, 204, 1), rgba(59, 214, 204, 0));
  color: #2f3349;
}
.classTwo {
  background: linear-gradient(rgb(229, 243, 147), rgba(250, 237, 37, 0));

  color: #2f3349;
}
.classThree {
  background: linear-gradient(rgba(59, 214, 204, 1), rgba(59, 214, 204, 0));

  color: #2f3349;
}
.link {
  text-decoration: none;
}
/* 2nd card section */
.summery-title {
  font-style: normal;
  font-weight: 580;
  font-size: 19px;
}
.summery-sub-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
}
.underline {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #eeac49;
}
.parcentage {
  height: 100px;
  width: 100px;
  background: #389a94;
}
.percentage-number {
  padding: 25px;
}
@media only screen and (max-width: 1440px) {
  /* .title {
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
  } */

  /* .sub-title {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  } */
}
</style>
