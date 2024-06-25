<template>
  <div id="detail">
    <b-row v-if="$route.name == 'detail-non-gazzeted-acr'" class="mx-3">
      <b-col cols="12" class="bg-white my-3 card">
        <div class="d-flex flex-row justify-content-between btn-area mt-2">
          <router-link class="button-section border-danger bg-danger" to="/"
            ><b class="text-white p-1">back</b></router-link
          >
          <router-link
            @click="printContent"
            class="button-section border-primary bg-primary"
            :to="`/print-non-gazzeted-acr/${$route.params.id}`"
          >
            <b class="text-white p-1">print</b></router-link
          >
        </div>
        <h3 class="mt-3 text-black">ব্যক্তিগত তথ্য</h3>

        <b-row class="p-2 bg-white m-2">
          <b-col cols="12" class="">
            <table class="table border-muted">
              <tbody>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    কর্মকর্তা / কর্মচারী
                  </td>
                  <td class="border-muted border-start">
                    {{ acrReport.name }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">পদবী</td>
                  <td class="border-muted border-start">
                    {{ user.designation }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">জন্ম তারিখ</td>
                  <td class="border-muted border-start">
                    {{ getHumanDate(user.dateOfBirth) }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    বর্তমান বেতন ও বেতনক্রম
                  </td>
                  <td class="border-muted border-start">
                    {{ acrReport.salary }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    সরকারী চাকুরীতে যোগাদানের তারিখ
                  </td>
                  <td class="border-muted border-start">
                    {{ getHumanDate(user.dateOfJoin) }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td
                    v-if="acrReport.departmentExamPass === true"
                    class="question-title"
                    scope="row"
                  >
                    বিভাগীয় পরীক্ষায় উত্তীর্ণ হইয়াছেন কিনা
                  </td>
                  <td
                    class="border-muted border-start"
                    v-if="acrReport && acrReport.departmentExamPass === true"
                  >
                    <span v-if="acrReport.departmentExamPass === true"
                      >হ্যাঁ
                    </span>
                    ,<span v-if="acrReport && acrReport.departmentExamDate">
                      {{ getHumanDate(acrReport.departmentExamDate) }}</span
                    >
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    চাকুরী তে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না
                  </td>
                  <td class="border-muted border-start">
                    <span v-if="acrReport.jobStatus == 'Permanent'"
                      >স্থায়ী</span
                    >
                    <span v-if="acrReport.jobStatus == 'Temporary'"
                      >অস্থায়ী
                    </span>
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    বর্তমান পদে যোগদানের তারিখ
                  </td>
                  <td class="border-muted border-start">
                    {{ getHumanDate(acrReport.joiningDate) }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">শিক্ষাগত যােগ্যতা</td>
                  <td class="border-muted border-start">
                    {{ user.highestEducationLevel }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">ভাষাজ্ঞান</td>
                  <td class="border-muted border-start">
                    {{ acrReport.language }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    প্রশিক্ষণ/বিশেষ প্রশিক্ষণ (যদি থাকে )
                  </td>
                  <td class="border-muted border-start">
                    {{ acrReport.specialTraining }}
                  </td>
                </tr>
                <tr
                  class="border-muted border-top border-bottom border-start border-end"
                >
                  <td class="question-title" scope="row">
                    জি আরপি প্রশিক্ষণ প্রতিবেদনকারী অফিসারের অধীনে চাকুরীর সঠিক
                    মেয়াদ
                  </td>
                  <td class="border-muted border-start">
                    {{ getHumanDate(acrReport.acrStart) }} হইতে
                    {{ getHumanDate(acrReport.acrEnd) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="card p-2">
        <b-row class="p-2 bg-white m-2 pt-4">
          <b-col cols="12" class="">
            <print-table :items="form.assesmentForm" class="h-25" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="bg-white card">
        <print-iro class="my-2" />
      </b-col>
      <b-col cols="12" class="card bg-white">
        <print-cro class="my-2" />
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
