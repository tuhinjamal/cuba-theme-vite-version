<template>
  <div>
    <b-row class="alignment">
      <b-col
        cols="12"
        class="d-flex flex-column flex-md-row justify-content-center border rounded m-0 p-0 mt-5"
      >
        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 1, 'step-done': step > 1 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>১ম খন্ড</h5>
              </div>
              <div v-if="step > 1" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>ব্যক্তিগত তথ্য</p>
            <p>(আবেদনকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex align-items-center m-0 p-0">
          <div
            class="d-block line"
            :class="{ 'step-active': step === 2, 'step-done': step > 1 }"
          ></div>
        </b-row>

        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>২য় খন্ড</h5>
              </div>
              <div v-if="step > 2" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>অনুস্বাক্ষরকারীর প্রতিবেদন</p>
            <p>(অনুস্বাক্ষরকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex align-items-center m-0 p-0">
          <div
            class="d-block line"
            :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
          ></div>
        </b-row>

        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 3, 'step-done': step > 3 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>৩য় খন্ড</h5>
              </div>
              <div v-if="step > 3" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>পদোন্নতির যোগ্যতা</p>
            <p>(অনুস্বাক্ষরকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="m-0 p-0">
      <b-col cols="12" class="m-0 p-0">
        <form-one class="m-0 p-0" />
        <signature-table :mcqForm="mcqForm" class="m-0 p-0" />
        <form-three
          @prev="prev"
          @next="next"
          :iroData="iroData"
          :step="step"
          class="m-0 p-0"
        />
        <form-four @prev="prev" @next="next" :step="step" class="m-0 p-0" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import formOne from "./evaluation-form/form-part-one.vue";
import formTwo from "./evaluation-form/form-part-two.vue";
import formThree from "./evaluation-form/evaluated-iro.vue";
import formFour from "./evaluation-form/form-part-four.vue";
import signatureTable from "./evaluation-form/signature-table.vue";

export default {
  components: {
    formOne,
    formTwo,
    formThree,
    formFour,
    signatureTable,
  },
  data() {
    return {
      text: "",
      selected: "A",
      form: {
        formA: { name: "" },
        formB: { address: "" },
        formC: { phone: "" },
      },
      steps: {},
      step: 1,
      hasSeenCongrats: false,
      mcqForm: {
        id: this.$route.params.id,
        assesmentForm: [
          {
            questionId: "1",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "2",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "3",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "4",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "5",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "6",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "7",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "8",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "9",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "10",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "11",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "12",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "13",
            value: null,
            comment: "",
            questionTitle: null,
          },
          {
            questionId: "14",
            value: null,
            comment: "",
            questionTitle: "",
          },
          {
            questionId: "15",
            value: null,
            comment: "",
            questionTitle: "",
          },
          {
            questionId: "16",
            value: null,
            comment: "",
            questionTitle: "",
          },
          {
            questionId: "17",
            value: null,
            comment: "",
            questionTitle: "",
          },
        ],
      },
      iroData: {
        id: this.$route.params.id,
        user_id: null,
        evaluation_value: "",
        decision: "",
        cro: "",
        cro_date: "",
      },
    };
  },
  created() {
    this.getNonGazzetedACRAssesment();
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    getNonGazzetedACRAssesment() {
      this.$store
        .dispatch("acrStore/getNonGazzetedACRAssesment", this.$route.params.id)
        .then((res) => {
          if (res.length > 0) {
            this.nullChecker = res;
            this.mcqForm.assesmentForm = res;
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.alignment {
  margin-left: 20px !important;
  margin-right: 20px !important;
}
.line {
  width: 120px;
  height: 2px;
  background-color: #2f334933;
}
.prev {
  background-color: #f54b4b1a;
  border: 2px solid #f54b4b;
  color: #f54b4b;
}
.next {
  background-color: #2f3349;
  color: white;
}
.step {
  border: 2px solid gray;
}

.step-active {
  background-color: #2f3349;
  color: white;
}
.step-done {
  border: 2px solid green;
  color: green;
}
</style>
