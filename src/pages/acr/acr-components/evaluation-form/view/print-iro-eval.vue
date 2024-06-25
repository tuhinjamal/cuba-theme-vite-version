<template>
  <b-row id="print" class="mx-3">
    <div class="d-flex flex-row justify-content-between btn-area mt-2">
      <router-link class="button-section" to="/cro">back</router-link>
      <router-link @click="printContent" class="button-section" to=""
        >print</router-link
      >
    </div>
    <b-col cols="12" class="m-0 p-0 text-center">
      <h5><b>গোপনীয়</b></h5>
    </b-col>
    <b-col
      cols="12"
      md="12"
      class="d-flex flex-row justify-content-between m-0 p-0"
    >
      <div class="m-0 p-0">
        <small class="m-0 p-0">বাংলাদেশ ফরম নং ২৯০-খ (সংশোধিত)</small><br />
        <small class="m-0 p-0">নন-গেজেটেড অফিসার/কর্মচারীদের জন্য বার্ষিক</small
        ><br />
        <small class="m-0 p-0">গোপন রিপোর্ট ফরম।</small>
      </div>
      <vue-qrcode class="h-50 m-0 p-0" :value="qrValue" />
    </b-col>

    <b-col cols="12" class="text-center m-0 p-0">
      <h2 class="m-0 p-0"><b>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</b></h2>
      <p class="m-0 p-0">
        অফিসেরনাম : ডাক, টেলিযোগাযোগ ও তথ্য প্রযুক্তি মন্ত্রণালয় , তথ্য ও
        যোগাযোগ প্রযুক্তি বিভাগ , প্রোগ্রাম শাখা <br />
        <u>{{ getHumanDate(acrReport.acrStart) }}</u> হইতে
        <u>{{ getHumanDate(acrReport.acrEnd) }}</u>
        পর্যন্ত সময়ের বার্ষিক/বিশেষ প্রতিবেদন ।
      </p>
    </b-col>
    <b-col cols="12" class="text-start m-0 p-0">
      <div class="d-flex flex-row">
        <p class="m-0 p-0">অ</p>

        <p class="ms-1 m-0 p-0">১। নাম (মোটা অক্ষরে ) :{{ acrReport.name }}</p>
      </div>
      <div class="ms-2">
        <p class="ms-2 m-0 p-0">২। পদবীঃ {{ acrReport.designation }}</p>
        <p class="ms-2 m-0 p-0">
          ৩। জন্ম তারিখঃ {{ getHumanDate(acrReport.dateOfBirth) }}
        </p>
        <p class="ms-2 m-0 p-0">
          ৪।বর্তমান বেতন ও বেতনক্রমঃ {{ acrReport.salary }}
        </p>
      </div>

      <div class="d-flex flex-row ms-3">
        <p class="m-0 p-0">৫।</p>

        <p class="ms-3 m-0 p-0">
          (ক) সরকারী চাকুরীতে যোগাদানের তারিখঃ
          {{ getHumanDate(user.dateOfJoin) }}
        </p>
      </div>

      <p class="ms-5 m-0 p-0">
        (খ) বিভাগীয় পরীক্ষায় উত্তীর্ণ হইয়াছেন কিনা
        <span v-if="acrReport.departmentExamPass === true">হ্যাঁ </span> , হইয়া
        থাকিলে তারিখঃ{{ getHumanDate(acrReport.departmentExamDate) }}
        প্রযোজ্য নহে ,
      </p>
      <p class="ms-5 m-0 p-0">
        (গ) চাকুরী তে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি নাঃ
        {{ acrReport.jobStatus }}
      </p>

      <p class="ms-2 m-0 p-0">
        ৬। বর্তমান পদে যোগদানের তারিখঃ {{ getHumanDate(acrReport.joiningDate) }}
      </p>
      <p class="ms-2 m-0 p-0">
        ৭। শিক্ষাগত যােগ্যতাঃ {{ acrReport.highestEducationLevel }}
      </p>
      <p class="ms-2 m-0 p-0">৮।ভাষাজ্ঞানঃ {{ acrReport.language }}</p>
      <p class="ms-2 m-0 p-0">
        ৯।প্রশিক্ষণ/বিশেষ প্রশিক্ষণ (যদি থাকে ) :{{ acrReport.specialTraining }}
      </p>
      <p class="ms-2 m-0 p-0">
        ১০।জি আরপি প্রশিক্ষণ প্রতিবেদনকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদঃ
        {{ getHumanDate(acrReport.acrStart) }} হইতে
        {{ getHumanDate(acrReport.acrEnd) }}
      </p>
      <hr />
    </b-col>
    <b-col cols="12" class="m-0 p-0">
      <print-table :items="form.assesmentForm" class="h-25" />
    </b-col>
    <b-col cols="12" class="m-0 p-0">
      <print-iro />
    </b-col>
    <b-col cols="12" class="m-0 p-0">
      <print-instruction />
    </b-col>
  </b-row>
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

  // mounted() {
  //   setTimeout(() => {
  //     window.print();
  //   }, 5000);
  // },
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
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
