<template>
  <div class="p-4 mt-3 m-2" id="mcq">
    <b-form class="needs-validation" novalidate="">
      <b-row class="bg-white rounded py-4">
        <b-col cols="12">
          <h3 class="text-black">২য় খন্ড (অনুস্বাক্ষরকারী অফিসার)</h3>
          <hr />
        </b-col>
        <b-col
          cols="12"
          md="6"
          v-for="(data, index) in mcqForm.assesmentForm"
          :key="index"
        >
          <b-form-group class="text-black mb-5">
            <label for="" class="d-block m-0 p-0">
              <div class="row m-0 p-0">
                <div
                  v-if="data.questionTitle == null"
                  class="col-1 text-center m-0 p-0 question-title"
                >
                  {{ serial[index] }}
                </div>
                <div v-else class="col-1 text-center p-1">
                  {{ serial[index] }}
                </div>
                <div class="col-11 text-start m-0 p-0">
                  <p
                    class="m-0 p-0"
                    :ref="`question${index}`"
                    v-if="data.questionTitle == null"
                  >
                    <span
                      class="question-title"
                      v-html="
                        data.questionTitle
                          ? data.questionTitle
                          : questions[index]
                      "
                    ></span>
                  </p>

                  <b-form-input
                    v-if="data.questionTitle !== null"
                    :disabled="step != 2"
                    v-model="data.questionTitle"
                    placeholder="Special"
                    required
                  ></b-form-input>
                </div>
              </div>
            </label>
            <b-form-radio-group
              :disabled="data.questionTitle == '' || step != 2"
              v-model="data.value"
              :options="options"
              value-field="value"
              text-field="name"
              disabled-field="notEnabled"
              class="ms-4 mt-3"
              :required="data.questionId == 12 ? true : false"
            ></b-form-radio-group>

            <b-form-input
              :disabled="data.questionTitle == ''"
              v-model="data.comment"
              placeholder="মন্তব্য"
              class="shadow-sm bg-light w-75 ms-4"
            ></b-form-input>
            <p v-if="data.valdiationMsg" class="text-danger ms-3 mt-1">
              {{ data.valdiationMsg }}
            </p>
          </b-form-group>
          <br v-if="index == 16" />
          <br v-if="index == 17" />
          <!-- <hr v-if="index == 16" />
          <hr v-if="index == 17" /> -->
        </b-col>
      </b-row>

      <b-row v-if="step == 2">
        <b-col cols="12" class="text-center py-4">
          <button
            :disabled="step === 1"
            class="mx-1 btn prev"
            @click="$emit('prev')"
          >
            পূর্বের পেজ
          </button>
          <!--   createNonGazzetedACRAssesment(); -->
          <button
            :disabled="step === 5"
            class="mx-1 btn next"
            @click="createNonGazzetedACRAssesment()"
          >
            ২য় অংশ মূল্যায়ন দেখুন ও ৩য় অংশ
          </button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>
<script>
import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formTwo";
export default {
  mixins: [acrEvaluationFormValidation],
  props: {
    step: {
      type: Number,
    },
    mcqForm: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
    },
  },
  data() {
    return {
      options: [
        { value: "1", name: "অত্যুত্তম" },
        { value: "2", name: "উত্তম" },
        { value: "3", name: "চলতি মান" },
        { value: "4", name: "চলতি মানের নিম্নে" },
        { value: "5", name: "নিকৃষ্ট" },
      ],
      questions: [
        " বুদ্ধিমত্তা ও মানসিক তৎপরতা ",
        "পেশাগত জ্ঞান  ",
        "প্রকাশ ক্ষমতা (ক) লিখন ",
        "(খ) বচন",

        " উদ্যোগ",
        "কাজের মান ও পরিমান",
        "সহযোগিতা ও বিচক্ষনতা ",
        "আগ্রহ ও পরিশ্রম ",
        "অধীনস্থদিগকে পরিচালনা ও প্রশিক্ষণ দানের ক্ষমতা",
        "সততা (ক) সাধারণ",
        "(খ) আর্থিক বিষয়ে",
        " সততা ও  সুনাম ",
        " ব্যক্তিত্ব ও চরিত্রবল",

        "স্বাস্থ্য  ",
        "সময়ানুবর্তিতা   ",
        "শৃঙ্খলাবোধ  ",
        "শৃঙ্খলাবোধ  বাংলা ভাষা ব্যবহারে  আগ্রহ ও দক্ষতা ",
      ],
      serial: [
        "১ । ",
        "২ । ",
        "৩ । ",
        " ",
        "৪ । ",
        "৫ । ",
        "৬ । ",
        "৭ । ",
        "৮ । ",
        "৯ । ",
        " ",
        "১০। ",
        "১১।",
        "১২। ",
        "১৩। ",
        "১৪। ",
        "১৫। ",
        "১৬। ",
        "১৭। ",
        "১৮। ",
        "১৯। ",
        "২০। ",
        "২১। ",
      ],
      nullChecker: [],
    };
  },
  created() {
    this.getNonGazzetedACRAssesment();
    window.scrollTo(0, 0);
  },
  methods: {
    validateForm(items) {
      const ele = this.$refs.question0;
      let hasError = false;
      items.forEach((item, index) => {
        if (item.questionId <= 17) {
          if (item.value === null) {
            hasError = true;
            return hasError;
          }
        }
      });

      return hasError;
    },
    nextStep() {
      // this.onCustomStyleSubmit(this.mcqForm);
      // this.onCustomStyleSubmit();
      if (this.socialServiceError == false && this.addressError == false) {
        this.$emit("next");
      }
    },
    getNonGazzetedACRAssesment() {
      this.$store
        .dispatch("acrStore/getNonGazzetedACRAssesment", this.$route.params.id)
        .then((res) => {
          this.nullChecker = res.length;

          if (res.length > 0) {
            this.mcqForm.assesmentForm = res;
          }
        })
        .catch((err) => {});
    },
    createNonGazzetedACRAssesment() {
      this.onCustomStyleSubmit(this.mcqForm);
      const checkError = this.validateForm(this.mcqForm.assesmentForm);
      if (this.mcqForm.blockSubmit == false && checkError !== true) {
        if (this.nullChecker > 0) {
          this.$store
            .dispatch("acrStore/updateNonGazzetedACRAssesment", this.mcqForm)
            .then((res) => {
              this.acr = res;
            })
            .catch((err) => {});
        } else {
          this.$store
            .dispatch("acrStore/createNonGazzetedACRAssesment", this.mcqForm)
            .then((res) => {
              this.acr = res;
            })
            .catch((err) => {});
        }

        if (checkError !== true) {
          this.nextStep();
        }
      }
    },
  },
};
</script>

<style scoped>
.alignment {
  margin-left: 10px !important;
  margin-right: 10px !important;
}
.next {
  background-color: #2f3349;
  color: white;
}
.prev {
  background-color: #f54b4b1a;
  border: 2px solid #f54b4b;
  color: #f54b4b;
}
.question-title {
  font-size: 17px !important;
}
</style>
