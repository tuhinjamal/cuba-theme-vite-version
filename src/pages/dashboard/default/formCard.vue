<template>
  <div class="" id="form-card">
    <div class="row">
      <div
        v-for="(user, index) in user_information"
        :key="index"
        class="col-12 col-md-4"
      >
        <div
          v-if="
            logedInUserRole?.applicant === true ||
            (logedInUserRole?.Admin === true && user.submited == 0)
          "
          :class="{ 'd-none': user.submited == 1 }"
          cols="12"
        >
          <b-link :to="`/non-gazzeted-form/${user.id}`" class="link">
            <b-card
              :class="`text-center p-3 ${
                user.gread === 11
                  ? 'classTwo'
                  : user.gread === 10
                  ? 'classThree'
                  : 'classOne'
              }`"
            >
              <b-card-text>
                <div class="row">
                  <div class="col-1">
                    <svg
                      class="mt-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.30903 1C6.30395 1 5.47569 1.82826 5.47569 2.83333V3.44444H4.86458C3.85951 3.44444 3.03125 4.2727 3.03125 5.27778V21.1667C3.03125 22.1717 3.85951 23 4.86458 23H16.6794C17.6845 23 18.5127 22.1717 18.5127 21.1667V20.5556H19.1238C20.1289 20.5556 20.9572 19.7273 20.9572 18.7222V2.83333C20.9572 1.82826 20.1289 1 19.1238 1H7.30903ZM7.30903 2.22222H19.1238C19.473 2.22222 19.735 2.48419 19.735 2.83333V18.7222C19.735 19.0714 19.473 19.3333 19.1238 19.3333H17.9016C17.7395 19.3333 17.5841 19.3977 17.4695 19.5123C17.3549 19.6269 17.2905 19.7824 17.2905 19.9444V21.1667C17.2905 21.5158 17.0285 21.7778 16.6794 21.7778H4.86458C4.51544 21.7778 4.25347 21.5158 4.25347 21.1667V5.27778C4.25347 4.92863 4.51544 4.66667 4.86458 4.66667H6.08681C6.24888 4.66667 6.40432 4.60228 6.51893 4.48768C6.63353 4.37307 6.69792 4.21763 6.69792 4.05556V2.83333C6.69792 2.48419 6.95988 2.22222 7.30903 2.22222ZM8.12384 3.44444C8.04359 3.44444 7.96412 3.46025 7.88998 3.49096C7.81584 3.52167 7.74847 3.56669 7.69172 3.62343C7.63497 3.68018 7.58996 3.74755 7.55925 3.82169C7.52854 3.89584 7.51273 3.9753 7.51273 4.05556C7.51273 4.13581 7.52854 4.21527 7.55925 4.28942C7.58996 4.36356 7.63497 4.43093 7.69172 4.48768C7.74847 4.54442 7.81584 4.58944 7.88998 4.62015C7.96412 4.65086 8.04359 4.66667 8.12384 4.66667H16.6794C17.0285 4.66667 17.2905 4.92863 17.2905 5.27778V17.9074C17.2905 18.0695 17.3549 18.2249 17.4695 18.3395C17.5841 18.4541 17.7395 18.5185 17.9016 18.5185C18.0637 18.5185 18.2191 18.4541 18.3337 18.3395C18.4483 18.2249 18.5127 18.0695 18.5127 17.9074V5.27778C18.5127 4.2727 17.6845 3.44444 16.6794 3.44444H8.12384Z"
                        fill="white"
                      />
                      <path
                        d="M10.776 8.33337C9.39126 8.33337 8.3316 9.57271 8.3316 11.0072V12H8.12789C7.57382 12 7.10938 12.4645 7.10938 13.0186V16.6852C7.10938 17.2393 7.57382 17.7037 8.12789 17.7037H13.4242C13.9783 17.7037 14.4427 17.2393 14.4427 16.6852V13.0186C14.4427 12.4645 13.9783 12 13.4242 12H13.2205V11.0068C13.2205 9.57311 12.1608 8.33337 10.776 8.33337ZM10.776 9.5556C11.4226 9.5556 11.9983 10.1557 11.9983 11.0072V12H9.55382V11.0068C9.55382 10.1561 10.1295 9.5556 10.776 9.5556ZM8.3316 13.2223H13.2205V16.4815H8.3316V13.2223Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div class="text-start col-11">
                    <u class="title ms-2">গোপন আবেদন ফর্ম </u>

                    <p v-if="user.gread === 11" class="sub-title ms-2 m-0 p-0">
                      নন-গেজেটেড অফিসার
                    </p>
                    <p
                      v-else-if="user.gread === 10"
                      class="sub-title ms-2 m-0 p-0"
                    >
                      অফিসার্স রিপোর্ট
                    </p>
                    <p v-else class="sub-title ms-2 m-0 p-0">
                      গেজেটেড অফিসার্স
                    </p>
                    <span
                      v-if="user.submited == 11"
                      class="text-warning m-0 p-0"
                    >
                      edit
                    </span>
                    <small v-if="user && user.start_date" class="ms-2 m-0 p-0">
                      তারিখসীমাঃ {{ getHumanDate(user?.start_date) }}-
                      {{ getHumanDate(user?.end_date) }}
                    </small>
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-link>
        </div>
      </div>
    </div>

    <b-row>
      <b-col
        cols="12"
        class="mt-0"
        md="4"
        v-for="(summery, index) in summeryCards"
        :key="index"
      >
        <b-row
          v-if="
            (index == 0 &&
              (logedInUserRole?.IRO === true ||
                logedInUserRole?.Admin === true)) ||
            (index == 1 &&
              (logedInUserRole?.CRO === true ||
                logedInUserRole?.Admin === true)) ||
            (index == 2 && logedInUserRole?.CRO === true) ||
            logedInUserRole?.Admin === true
          "
        >
          <b-col class="mx-2 p-0" cols="12" md>
            <b-link :to="summery.link" class="link">
              <b-card class="text-center m-0">
                <div class="row me-2 p-2">
                  <div class="col-8 text-start p-2">
                    <p class="summery-title ms-1 mt-0 mb-0 p-0">
                      {{ summery.title }}
                    </p>

                    <p class="sub-text ms-1 mt-0 mb-0 p-0">
                      {{ summery.subTitle }}
                    </p>
                    <svg
                      class="mt-3 ms-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3550_6260)">
                        <path
                          d="M15.2748 0H9.45665C9.05499 0 8.72937 0.325625 8.72937 0.727281C8.72937 1.12894 9.05499 1.45456 9.45665 1.45456H13.5191L6.03334 8.94031C5.7493 9.22434 5.7493 9.68478 6.03334 9.96881C6.1753 10.1108 6.36143 10.1818 6.54755 10.1818C6.73368 10.1818 6.91984 10.1108 7.06184 9.96878L14.5476 2.48306V6.54547C14.5476 6.94713 14.8732 7.27275 15.2749 7.27275C15.6765 7.27275 16.0021 6.94713 16.0021 6.54547V0.727281C16.0021 0.325625 15.6765 0 15.2748 0Z"
                          fill="#79747E"
                        />
                        <path
                          d="M12.3636 7.27268C11.962 7.27268 11.6363 7.59831 11.6363 7.99996V14.5454H1.45453V4.36359H8C8.40166 4.36359 8.72728 4.03796 8.72728 3.63631C8.72728 3.23465 8.40166 2.90906 8 2.90906H0.727281C0.325625 2.90906 0 3.23468 0 3.63634V15.2727C0 15.6743 0.325625 16 0.727281 16H12.3637C12.7653 16 13.0909 15.6743 13.0909 15.2727V7.99996C13.0909 7.59831 12.7653 7.27268 12.3636 7.27268Z"
                          fill="#79747E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3550_6260">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="col-4 d-flex flex-row p-2">
                    <img
                      v-if="index == 0"
                      src="../../../assets/images/ict-acr-images/dashboard/ringHeadTwo.png
                      "
                      alt="head"
                      class="ring"
                      height="25"
                      width="25"
                    />
                    <img
                      v-if="index == 1"
                      src="../../../assets/images/ict-acr-images/dashboard/ringHeadOne.png
                      "
                      alt="head"
                      class="ring"
                      height="25"
                      width="25"
                    />
                    <img
                      v-if="index == 2"
                      src="../../../assets/images/ict-acr-images/dashboard/ringHeadThree.png
                      "
                      alt="head"
                      class="ring"
                      height="25"
                      width="25"
                    />

                    <div class=" ">
                      <div class="circle-wrap">
                        <div class="circle">
                          <div class="mask full">
                            <div
                              class="fill"
                              :style="{ backgroundColor: summery.colorProps }"
                            ></div>
                          </div>
                          <div class="mask half">
                            <div
                              class="fill"
                              :style="{ backgroundColor: summery.colorProps }"
                            ></div>
                          </div>
                          <div
                            class="inside-circle"
                            :style="{ color: summery.colorProps }"
                          >
                            {{ summery.series.toLocaleString("bn-BN") }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </b-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { getLogedInUser, getLogedInUserInfo, getUserRole } from "@/utils/auth";
import ring from "./ring.vue";
import moment from "moment";
import radialBarChart from "./radialBarChart.vue";
var primary = localStorage.getItem("primary_color") || "#24695c";
var secondary = localStorage.getItem("secondary_color") || "#ba895d";
export default {
  components: {
    radialBarChart,
    ring,
  },
  data() {
    return {
      logedInUserRole: JSON.parse(getUserRole()),
      user: JSON.parse(getLogedInUser()),
      LogedInUserInfo: JSON.parse(getLogedInUserInfo()),
      user_information: [
        {
          cro: null,
          designation: null,
          end_date: "",
          gread: null,
          id: null,
          iro: null,
          joining_date_current_position: "",
          start_date: "",
          submited: 1,
          user_id: null,
        },
      ],

      summeryCards: [
        {
          id: 1,
          title: "মূল্যায়ন বাকি",
          subTitle: "(অনুস্বাক্ষরকারী)",
          count: "0",
          series: [],
          colorProps: "#E18A16",

          link: "/iro",
          role: "acr_request",
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
                    fontSize: "25px",
                    show: true,
                  },
                },
              },
            },
            // labels: ["Apples", "Oranges", "Bananas", "Berries"],
            colors: ["#E18A16"],
          },
          ringHead: "ringHeadTwo.png",
        },
        {
          id: 2,
          title: "মূল্যায়ন বাকি",
          subTitle: "(প্রতিস্বাক্ষরকারী)",
          count: "0",
          series: [],
          colorProps: "#22AFB8",
          link: "/cro",
          role: "acr_request",
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
                    fontSize: "25px",
                    show: true,
                  },
                },
              },
            },
            // labels: ["Apples", "Oranges", "Bananas", "Berries"],
            colors: ["#22AFB8"],
          },
          ringHead: "ringHeadOne.png",
        },
        {
          id: 3,
          title: "মোট মূল্যায়িত ",
          subTitle: "(অনুস্বাক্ষরকারী এবং প্রতিস্বাক্ষরকারী)",
          count: "0",
          series: [],
          colorProps: "#6958D3",
          link: "/acr",
          role: "acr_request",
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
                    fontSize: "25px",
                    show: true,
                  },
                },
              },
            },
            colors: ["#6958D3"],
          },
          ringHead: "ringHeadThree.png",
        },
      ],

      iro: "",
      cro: "",
      done: "",
      acrListNonGazzeted: [],
      // chart data
    };
  },
  created() {
    this.getReporterById();

    this.viewAllNonGazzetedAcr();
  },

  methods: {
    getReporterById() {
      this.user_information.forEach((e) => {
        e.start_date = new Date().toDateString();
      });

      this.$store
        .dispatch("reporter/getReporterById", this.user.user_id)
        .then((res) => {
          this.user_information = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },

    viewAllNonGazzetedAcr() {
      this.$store
        .dispatch("acrStore/viewAllNonGazzetedAcr")
        .then((res) => {
          if (res.status == 200) {
            this.acrListNonGazzeted = res.data;

            // new
            if (this.acrListNonGazzeted && this.acrListNonGazzeted.length > 0) {
              this.LogedInUserInfo.Roles.forEach((role) => {
                if (role.name == "Admin") {
                  this.iro = this.acrListNonGazzeted.filter(
                    (element) => element.status == "iro"
                  );
                  if (this.iro.length > 0) {
                    this.summeryCards[0].series[0] = this.iro.length;
                  }
                  //  cro
                  this.cro = this.acrListNonGazzeted.filter(
                    (element) => element.status == "cro"
                  );
                  if (this.cro.length > 0) {
                    this.summeryCards[1].series[0] = this.cro.length;
                  }
                  // done
                  this.done = this.acrListNonGazzeted.filter(
                    (element) => element.status == "done"
                  );
                  if (this.done.length > 0) {
                    this.summeryCards[2].series[0] = this.done.length;
                  }
                } else {
                  this.iro = this.acrListNonGazzeted.filter(
                    (element) =>
                      element.status == "iro" &&
                      element.iro == this.user.user_id
                  );
                  if (this.iro.length > 0) {
                    this.summeryCards[0].series[0] = this.iro.length;
                  } else {
                    this.summeryCards[0].series[0] = 0;
                  }
                  this.cro = this.acrListNonGazzeted.filter(
                    (element) =>
                      element.status == "cro" &&
                      element.cro == this.user.user_id
                  );
                  if (this.cro.length > 0) {
                    this.summeryCards[1].series[0] = this.iro.length;
                  } else {
                    this.summeryCards[1].series[0] = 0;
                  }
                  this.done = this.acrListNonGazzeted.filter(
                    (element) =>
                      element.status == "done" &&
                      (element.iro == this.user.user_id ||
                        element.cro == this.user.user_id)
                  );
                  if (this.done.length > 0) {
                    this.summeryCards[2].series[0] = this.done.length;
                  } else {
                    this.summeryCards[2].series[0] = 0;
                  }
                }
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.title {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}

.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: white !important;
}
.classOne {
  background: linear-gradient(
    45deg,
    rgba(222, 154, 22, 1),
    rgba(139, 109, 0, 1)
  );

  color: white;
}
.classTwo {
  background: linear-gradient(
    45deg,
    rgba(172, 72, 222, 1),
    rgba(93, 8, 135, 1)
  );
  color: white;
}
.classThree {
  background: linear-gradient(
    45deg,
    rgba(62, 164, 221, 1),
    rgba(54, 65, 101, 1)
  );

  color: white;
}
.classFour {
  background: #333339;
  color: white;
}
a {
  text-decoration: none !important;
}
/* 2nd card section */
.summery-title {
  font-size: 19px;
  font-weight: 700;
}
.sub-text {
  font-size: 12px;
  font-weight: 400;
}
.summery-sub-title {
  font-size: 32px;
}
.underline {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #eeac49;
}
@media only screen and (max-width: 1500px) {
  .summery-title {
    font-size: 15px;
  }
  .summery-sub-title {
    font-size: 25px;
  }
  .title {
    font-size: 10px !important;
  }
  .sub-title {
    font-size: 13px !important;
    color: white !important;
  }
}

/* circle */
.circle-wrap {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  border: 1px solid rgb(218, 213, 213);
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
}

.mask .fill {
  clip: rect(0px, 60px, 60px, 0px);
  /* background-color: #227ded; */
}
.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(125deg);
}
@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(125deg);
  }
}
.circle-wrap .inside-circle {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: white;
  text-align: center;
  margin-top: 7px;
  margin-left: 7px;
  color: #1e51dc;
  position: absolute;
  z-index: 3;
  line-height: 60px;
  font-size: 2em;
  border: 1px solid rgb(218, 213, 213);
}
</style>
