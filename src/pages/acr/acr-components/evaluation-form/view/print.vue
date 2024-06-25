<template>
  <div id="print" class="p-2">
    <b-row v-if="$route.name == 'print-non-gazzeted-acr'" class="mx-1">
      <div class="d-flex flex-row justify-content-between btn-area mt-2">
        <router-link class="button-section border-danger bg-danger" to="/"
          ><b class="text-white p-1">back</b></router-link
        >
        <router-link
          @click="printContent"
          class="button-section border-primary bg-primary"
          to=""
        >
          <b class="text-white p-1">print</b></router-link
        >
      </div>

      <div class="row m-0 p-0">
        <div class="col-5 m-0 p-0">
          <small class="ms-2 mb-0 p-0">বাংলাদেশ ফরম নং ২৯০-খ (সংশোধিত)</small
          ><br />
          <small class="ms-2 mb-0 p-0"
            >নন-গেজেটেড অফিসার/কর্মচারীদের জন্য বার্ষিক</small
          ><br />
          <small class="ms-2 mb-0 p-0">গোপন রিপোর্ট ফরম।</small>
        </div>
        <div class="col-2 m-0 p-0 text-center">
          <h5><b>গোপনীয়</b></h5>
        </div>
        <div class="col-5 m-0 p-0 text-end">
          <vue-qrcode class="h-50 m-0 p-0" :value="qrValue" />
        </div>
        <div class="col-12 m-0 p-0 text-center">
          <h2 class="m-0 p-0"><b>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</b></h2>
          <p class="m-0 p-0">
            অফিসের নাম : বাংলাদেশ কম্পিউটার কাউন্সিল (বি সি সি )
            <br />
            <u>{{ getHumanDate(acrReport.acrStart) }}</u> হইতে
            <u>{{ getHumanDate(acrReport.acrEnd) }}</u>
            পর্যন্ত সময়ের বার্ষিক/বিশেষ প্রতিবেদন ।
          </p>
        </div>
      </div>

      <div class="d-flex flex-row m-0 p-0">
        <p class="m-0 p-0">অ</p>

        <p class="ms-1 m-0 p-0">১। নাম (মোটা অক্ষরে) : {{ acrReport.name }}</p>
      </div>
      <div class="ms-2 m-0 p-0">
        <p class="ms-2 m-0 p-0">২। পদবী : {{ acrReport.designation }}</p>
        <p class="ms-2 m-0 p-0">
          ৩। জন্ম তারিখ : {{ getHumanDate(acrReport.dateOfBirth) }}
        </p>
        <p class="ms-2 m-0 p-0">
          ৪। বর্তমান বেতন ও বেতনক্রম : {{ acrReport.salary }}
        </p>
      </div>

      <div class="d-flex flex-row ms-3">
        <p class="m-0 p-0">৫।</p>

        <p class="ms-2 m-0 p-0">
          (ক) সরকারী চাকুরীতে যোগদানের তারিখ :
          {{ getHumanDate(user.dateOfJoin) }}
        </p>
      </div>

      <p class="ms-5 m-0 p-0">
        (খ) বিভাগীয় পরীক্ষায় উত্তীর্ণ হইয়াছেন কিনা
        <span v-if="acrReport.departmentExamPass === true">হ্যাঁ </span> , হইয়া
        থাকিলে তারিখ : {{ getHumanDate(acrReport.departmentExamDate) }}
      </p>
      <p class="ms-5 m-0 p-0" v-if="acrReport.jobStatus == 'Permanent'">
        (গ) চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না : স্থায়ী
      </p>
      <p class="ms-5 m-0 p-0" v-else>
        (গ) চাকুরী তে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না : অস্থায়ী
      </p>

      <p class="ms-3 m-0 p-0">
        ৬। বর্তমান পদে যোগদানের তারিখ :
        {{ getHumanDate(acrReport.joiningDate) }}
      </p>
      <p class="ms-3 m-0 p-0">
        ৭। শিক্ষাগত যােগ্যতা : {{ acrReport.highestEducationLevel }}
      </p>
      <p class="ms-3 m-0 p-0">৮।ভাষাজ্ঞান : {{ acrReport.language }}</p>
      <p class="ms-3 m-0 p-0">
        ৯। প্রশিক্ষণ/বিশেষ প্রশিক্ষণ (যদি থাকে) :
        {{ acrReport.specialTraining }}
      </p>
      <p class="ms-3 m-0 p-0">
        ১০। জি আরপি প্রশিক্ষণ প্রতিবেদনকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদ :
        {{ getHumanDate(acrReport.acrStart) }} হইতে
        {{ getHumanDate(acrReport.acrEnd) }}
      </p>
      <hr class="mb-0 p-0" />
      <p class="m-0 p-0" v-if="$route.name == 'print-non-gazzeted-acr'">
        সঠিক ঘরে অনুস্বা কষর দ্বারা মূল্যায়ন লিপিবদ্ধ করিতে হইবে । অক্ষর দ্বারা
        যে মূল্যায়ন প্রকাশ করা হইল তাহা এইরূপ : <br />
        'ক ১' =অতি উত্তম, ‘ক’=উত্তম, ‘খ’=চলতি মান, ‘গ’=চলতি মানের নিম্নে এবং
        ‘ঘ’=সন্তোষজনক নহে ।
      </p>
      <print-table :items="form.assesmentForm" />

      <b-col cols="12" class="mt-5">
        <print-iro />
      </b-col>
      <b-col cols="12">
        <print-cro />
      </b-col>

      <b-col cols="12">
        <print-instruction />
      </b-col>
    </b-row>
    <b-row v-if="$route.name == 'detail-non-gazzeted-acr'" class="mx-3">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black">ব্যক্তিগত তথ্য</h3>

        <b-row class="p-2 bg-white m-2 pt-4">
          <b-col cols="12" class="">
            <table class="table table-bordered border-light">
              <tbody>
                <tr>
                  <td scope="row">কর্মকর্তা / কর্মচারী</td>
                  <td>{{ acrReport.name }}</td>
                </tr>
                <tr>
                  <td scope="row">পদবী</td>
                  <td>{{ user.designation }}</td>
                </tr>
                <tr>
                  <td scope="row">জন্ম তারিখ</td>
                  <td>{{ getHumanDate(user.dateOfBirth) }}</td>
                </tr>
                <tr>
                  <td scope="row">বর্তমান বেতন ও বেতনক্রম</td>
                  <td>{{ acrReport.salary }}</td>
                </tr>
                <tr>
                  <td scope="row">সরকারী চাকুরীতে যোগাদানের তারিখ</td>
                  <td>{{ getHumanDate(user.dateOfJoin) }}</td>
                </tr>
                <tr>
                  <td v-if="acrReport.departmentExamPass === true" scope="row">
                    বিভাগীয় পরীক্ষায় উত্তীর্ণ হইয়াছেন কিনা
                  </td>
                  <td v-if="acrReport && acrReport.departmentExamPass === true">
                    <span v-if="acrReport.departmentExamPass === true"
                      >হ্যাঁ
                    </span>
                    ,<span v-if="acrReport && acrReport.departmentExamDate">
                      {{ getHumanDate(acrReport.departmentExamDate) }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    চাকুরী তে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না
                  </td>
                  <td>
                    <span v-if="acrReport.jobStatus == 'Permanent'"
                      >স্থায়ী</span
                    >
                    <span v-if="acrReport.jobStatus == 'Temporary'"
                      >অস্থায়ী
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row">বর্তমান পদে যোগদানের তারিখ</td>
                  <td>
                    {{ getHumanDate(acrReport.joiningDate) }}
                  </td>
                </tr>
                <tr>
                  <td scope="row">শিক্ষাগত যােগ্যতা</td>
                  <td>
                    {{ user.highestEducationLevel }}
                  </td>
                </tr>
                <tr>
                  <td scope="row">ভাষাজ্ঞান</td>
                  <td>
                    {{ acrReport.language }}
                  </td>
                </tr>
                <tr>
                  <td scope="row">প্রশিক্ষণ/বিশেষ প্রশিক্ষণ (যদি থাকে )</td>
                  <td>
                    {{ acrReport.specialTraining }}
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    জি আরপি প্রশিক্ষণ প্রতিবেদনকারী অফিসারের অধীনে চাকুরীর সঠিক
                    মেয়াদ
                  </td>
                  <td>
                    {{ getHumanDate(acrReport.acrStart) }} হইতে
                    {{ getHumanDate(acrReport.acrEnd) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="m-0 p-0">
        <print-table :items="form.assesmentForm" class="h-25" />
      </b-col>
      <b-col cols="12" class="m-0 p-0">
        <print-iro />
      </b-col>
      <b-col cols="12" class="m-0 p-0">
        <print-cro />
      </b-col>

      <b-col
        v-if="$route.name == 'print-non-gazzeted-acr'"
        cols="12"
        class="m-0 p-0"
      >
        <print-instruction />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import printTable from "./print-table.vue";
import printIro from "./print-iro.vue";
import printCro from "./print-cro.vue";
import VueQrcode from "vue-qrcode";
import printInstruction from "./print-instruction.vue";
import moment from "moment";
export default {
  components: {
    printTable,
    printIro,
    printCro,
    VueQrcode,
    printInstruction,
  },
  data() {
    return {
      qrValue: "",

      text: "",
      selected: "A",
      options: [
        { value: "1", name: "অত্যুত্তম" },
        { value: "2", name: "উত্তম" },
        { value: "3", name: "চলতি মান" },
        { value: "4", name: "চলতি মানের নিম্নে" },
        { value: "5", name: "নিকৃষ্ট" },
      ],
      questions: ["Question 1", "Question 2", "Question 3"],
      form: {
        id: this.$route.params.id,
        assesmentForm: [
          {
            questionId: "1",
            value: 1,
            comment: "bla bla bla",
            questionTitle: "১।  ধীশক্তি ও মানসিক তৎপরতা*",
          },
          {
            questionId: "2",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "3",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "4",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "5",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "6",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "7",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "8",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "9",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "10",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "11",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "12",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "13",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "14",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "15",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "16",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "17",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
          {
            questionId: "18",
            value: 2,
            comment: "good",
            questionTitle: "Is it?",
          },
        ],
      },
      qrCode: {},
      acrReport: {},
      user: {},
    };
  },

  created() {
    this.getNonGazzetedACRAssesment();
    this.getNonGazzetedIROEvaluation();
    this.getNonGazzetedACRByID();
  },

  methods: {
    nextStep() {
      this.onCustomStyleSubmit();
      if (this.socialServiceError == false && this.addressError == false) {
        this.$emit("next");
      }
    },
    // getNonGazzetedACRAssesment
    getNonGazzetedACRAssesment() {
      this.$store
        .dispatch("acrStore/getNonGazzetedACRAssesment", this.$route.params.id)
        .then((res) => {
          this.form.assesmentForm = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNonGazzetedIROEvaluation() {
      setTimeout(() => {
        this.$store
          .dispatch(
            "acrStore/getNonGazzetedIROEvaluationByID",
            this.$route.params.id
          )
          .then((res) => {
            this.qrCode = res;

            this.qrValue = this.qrCode.user_id;
          })
          .catch((err) => {});
      }, 1000);
    },
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.acrReport = res;
          this.getUser();
        })
        .catch((err) => {});
    },
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.acrReport.userIdNo)
        .then((response) => {
          this.user = response;
        });
    },

    printContent() {
      setTimeout(() => {
        window.print();
      }, 2000);
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
u {
  border-bottom: 1px dotted #000;
  text-decoration: none;
}
.button-section {
  border: #0956fc 2px solid;
  border-radius: 5px;
  padding: 2px;
}
</style>
