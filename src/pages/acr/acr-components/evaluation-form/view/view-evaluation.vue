<template>
  <div id="printable-content" class="p-4 mt-3 m-2">
    <b-form class="needs-validation" novalidate="">
      <b-row class="bg-white rounded py-4">
        <b-col cols="12" class="d-flex flex-row justify-content-between">
          <h3 class="text-black">২য় খন্ড (অনুস্বাক্ষরকারী অফিসার)</h3>
          <!-- <button class="btn btn-info" @click="printContent">print</button> -->
          <b-link
            :to="`/print-non-gazzeted-acr/${$route.params.id}`"
            class="btn btn-info shadow-lg border-light"
          >
            প্রিন্ট করুন
          </b-link>
        </b-col>
        <b-col cols="12">
          <hr />
        </b-col>
        <b-col
          cols="12"
          md="6"
          v-for="(data, index) in form.assesmentForm"
          :key="index"
        >
          <b-form-group class="text-black">
            <label for="" class="d-block">
              <span>
                {{ index + 1 }}
                {{
                  data.questionTitle ? data.questionTitle : questions[index]
                }}</span
              >
            </label>
            <div class="d-flex flex-row justify-content-between">
              <b-form-radio-group
                v-model="data.value"
                :options="options"
                class="mb-3"
                value-field="value"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-radio-group>
            </div>
            <b-form-input
              :disabled="step != 2"
              v-model="data.comment"
              placeholder="মন্তব্য"
              class="shadow-sm bg-light"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="bg-white rounded py-4">
        <b-col cols="12">
          <h3 class="text-black">কেবলমাত্র প্রযোজ্য ক্ষেত্রেই</h3>
          <hr />
        </b-col>
        <b-col cols="12" md>
          <b-form-group class="text-black">
            <label for="">*১৮। সমাজকল্যাণ আগ্রহ</label>
            <div class="d-flex flex-column">
              <b-form-radio
                :disabled="step != 2"
                v-model="form.socialService"
                class=""
                value="A"
                required
                :class="
                  formSubmitted
                    ? socialServiceError
                      ? 'is-invalid'
                      : 'is-valid'
                    : ''
                "
                >অত্যুত্তম
              </b-form-radio>
              <b-form-radio
                :disabled="step != 2"
                v-model="form.socialService"
                class=""
                value="B"
                required
                :class="
                  formSubmitted
                    ? socialServiceError
                      ? 'is-invalid'
                      : 'is-valid'
                    : ''
                "
                >উত্তম</b-form-radio
              >
            </div>
            <!-- <div class="valid-feedback" v-if="errors[0]">
              {{ errors[0].message }}
            </div> -->
          </b-form-group>
        </b-col>
        <b-col cols="12" md>
          <b-form-group class="text-black">
            <label for="">*১৮। সমাজকল্যাণ আগ্রহ</label>
            <div class="d-flex flex-column">
              <b-form-radio
                :disabled="step != 2"
                v-model="form.address"
                class=""
                value="A"
                required
                :class="
                  formSubmitted
                    ? addressError
                      ? 'is-invalid'
                      : 'is-valid'
                    : ''
                "
                >অত্যুত্তম
              </b-form-radio>
              <b-form-radio
                :disabled="step != 2"
                v-model="form.address"
                class=""
                value="B"
                required
                :class="
                  formSubmitted
                    ? addressError
                      ? 'is-invalid'
                      : 'is-valid'
                    : ''
                "
                >উত্তম
              </b-form-radio>
            </div>
            <!-- <div class="valid-feedback" v-if="errors[1]">
              {{ errors[1].message }}
            </div> -->
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="step == 2">
        <b-col cols="12" class="text-center py-4">
          <button
            :disabled="step === 1"
            class="mx-1 btn prev"
            @click="$emit('prev')"
          >
            ফেরত পাঠান
          </button>
          <!--   nextStep(); -->
          <button
            :disabled="step === 4"
            class="mx-1 btn next"
            @click="createNonGazzetedACRAssesment()"
          >
            সেভ করুন এবং অগ্রসর হউন
          </button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>
<script>
// import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formTwo";

export default {
  // mixins: [acrEvaluationFormValidation],
  props: {
    step: {
      type: Number,
    },
  },
  data() {
    return {
      text: "",
      selected: "A",
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
        "প্রকাশ ক্ষমতা  (ক) লিখন ",
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
    };
  },
  created() {
    this.getNonGazzetedACRAssesment();
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
</style>
