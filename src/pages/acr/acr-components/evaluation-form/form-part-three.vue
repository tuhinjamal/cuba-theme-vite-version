<template>
  <div class="p-4 mt-3 m-2">
    <b-row v-if="step == 3 || step == 4" class="bg-white rounded py-4">
      <b-col cols="12">
        <h3 class="text-black">
          ৩য় খন্ড সামগ্রিক মূল্যায়ন ও পদোন্নতির যােগ্যতা
        </h3>
        <hr />
      </b-col>
      <b-col cols="12" md>
        <b-form-group class="text-black">
          <label for=""
            >সমশ্রেণীর অন্যান্য অফিসারের সঙ্গে তুলনাক্রমে নিন্মের সঠিক কলামে
            অনুস্বাক্ষর করিয়া এই অফিসার সম্পর্কে আপনার সাধারণ মূল্যায়ন লিপিবদ্ধ
            করুণঃ-
          </label>

          <div class="d-flex flex-row justify-content-between">
            <b-form-radio-group
              :disabled="step != 3"
              v-model="iroData.evaluation_value"
              :options="evaluations"
              class="mb-3"
              value-field="value"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
          </div>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6">
        <b-form-group class="text-black">
          <label for="">** নিম্নের সঠিক সিদ্ধান্ত নির্বাচন করুন</label>

          <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between">
              <b-form-radio-group
                :disabled="step != 3"
                v-model="iroData.decision"
                :options="decision"
                class="mb-3"
                value-field="value"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-radio-group>
            </div>
          </div>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6" class="text-black">
        <b-form-group class="text-black" label=" অনুস্বাক্ষরকারী  অফিসার">
          <b-form-input
            disabled
            v-model="user.banglaName"
            placeholder=" অনুস্বাক্ষরকারী  অফিসার"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6">
        <b-form-group>
          <label for=""
            >প্রতিবেদনের তারিখ <span class="text-danger">*</span></label
          >

          <flat-pickr
            :disabled="step != 3"
            v-model="iroData.cro_date"
            class="form-control"
            placeholder="YYYYY-MM-DD"
          />
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Datepicker1 from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formThree";
import { getLogedInUser } from "@/utils/auth";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const date = ref(null);
import moment from "moment";

export default {
  mixins: [acrEvaluationFormValidation],
  components: {
    Datepicker1,
    flatPickr,
  },
  props: {
    step: {
      type: Number,
    },
    iroData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loggedInUser: JSON.parse(getLogedInUser()),
      text: "",
      evaluations: [
        { value: "1", name: "অত্যুত্তম" },
        { value: "2", name: "উত্তম" },
        { value: "3", name: "চলতি মান" },
        { value: "4", name: "চলতি মানের নিম্নে" },
        { value: "5", name: "সন্তোষজনক নহেন" },
      ],
      decision: [
        { value: "1", name: "দ্রুত পদোন্নতির যোগ্য" },
        { value: "2", name: "পদোন্নতির যোগ্য" },
        { value: "3", name: "সম্প্রতি পদোন্নিত প্রাপ্ত " },
        { value: "4", name: "এখন পদোন্নতির যোগ্য নন " },
      ],
      form: {
        id: this.$route.params.id,
        user_id: null,
        evaluation_value: "",
        decision: "",
        cro: "",
        cro_date: "",
      },
      data: [],
      userID: null,
      users: [],
      user: [],
    };
  },
  created() {
    this.getNonGazzetedIROEvaluation();
    this.getNonGazzetedACRByID();
    this.iroData.cro_date = new Date();
  },
  methods: {
    nextStep() {
      this.onCustomStyleSubmit();

      if (this.socialServiceError == false && this.addressError == false) {
        this.$emit("next");
      }
    },
    createNonGazzetedCROEvaluation() {
      this.iroData.cro = this.user.idNo;
      this.iroData.user_id = this.form.user_id;

      this.$store
        .dispatch("acrStore/createNonGazzetedIROEvaluation", this.iroData)
        .then((res) => {
          this.acr = res;

          this.$router.push(`/print-non-gazzeted-acr/${this.$route.params.id}`);
        })
        .catch((err) => {});
    },

    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.userID = res.userIdNo;
          this.form.cro = res.iro;
          this.form.user_id = res.userIdNo;
          if (this.form.user_id) {
            this.viewUserList();
          }
        })
        .catch((err) => {});
    },
    getNonGazzetedIROEvaluation() {
      setTimeout(() => {
        this.$store
          .dispatch(
            "acrStore/getNonGazzetedIROEvaluationByID",
            this.$route.params.id
          )
          .then((res) => {
            if (Object.keys(res).length > 0) {
              this.form = res;
            }
          })
          .catch((err) => {});
      }, 2000);
    },
    viewUserList() {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.users = res.data;

          this.user = this.users.find((e) => e.idNo == this.form.cro);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
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
