<template>
  <div class="pt-3 px-4">
    <div class="p-3">
      <b-row v-if="step == 1" class="bg-white rounded py-4">
        <b-col cols="12">
          <h3 class="text-black">প্রতিস্বাক্ষরকারী কর্মকর্তার মন্তব্য</h3>
          <hr />
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group class="text-black">
            <label for=""
              >আমি মনে করি যে , রিপোর্ট প্রদানকারী কর্মকর্তার মূল্যায়ন
            </label>
            <div class="d-flex flex-row justify-content-between">
              <b-form-radio-group
                v-model="form.evaluation"
                :options="evaluations"
                class="mb-3"
                value-field="value"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-radio-group>
            </div>
            <!-- <div class="valid-feedback" v-if="errors[0]">
            {{ errors[0].message }}
          </div> -->
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            class="text-black"
            label="প্রতিস্বাক্ষরকারী কর্মকর্তার  মন্তব্য"
          >
            <b-form-input
              v-model="form.comment"
              placeholder="প্রতিস্বাক্ষরকারী কর্মকর্তার  মন্তব্য "
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group class="text-black" label="প্রতিস্বাক্ষরকারী অফিসার">
            <b-form-input
              disabled
              v-if="user.banglaName"
              v-model="user.banglaName"
              placeholder="প্রতিস্বাক্ষরকারী অফিসার"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >প্রতিস্বাক্ষরের তারিখ <span class="text-danger">*</span></label
            >

            <flat-pickr
              v-model="form.cro_date"
              class="form-control"
              placeholder="YYYYY-MM-DD"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="step == 2" class="bg-white rounded py-4">
        <b-col cols="12">
          <h3 class="text-black">প্রতিস্বাক্ষরকারী কর্মকর্তার মন্তব্য</h3>
          <hr />
        </b-col>
        <b-col cols="12" class="">
          <table class="table table-border">
            <tbody>
              <tr>
                <td class="border">
                  আমি মনে করি যে , রিপোর্ট প্রদানকারী কর্মকর্তার মূল্যায়ন
                </td>
                <td class="border">
                  <span v-if="form.evaluation == 1" class="mx-1">
                    অত্যুত্তম
                  </span>
                  <span v-if="form.evaluation == 2" class="mx-1">
                    যুক্তি সঙ্গতভাবে উত্তম</span
                  >
                  <span v-if="form.evaluation == 3" class="mx-1"> কঠোর </span>
                  <span v-if="form.evaluation == 4" class="mx-1"> নমনীয় </span>
                  <span v-if="form.evaluation == 5" class="mx-1"
                    >পক্ষপাতদুষ্ট ।
                  </span>
                </td>
                <td class="border">{{ getHumanDate(form.cro_date) }}</td>
                <td class="border">
                  <img
                    :src="
                      user.signatureImage
                        ? $store.state.appConfig.imageBaseUrl +
                          user.signatureImage
                        : demoImage
                    "
                    height="50"
                    widht="50"
                    alt="userImage"
                    class="signature m-0 p-0"
                  />
                </td>
              </tr>
              <tr>
                <td class="border">
                  অধিকন্তু নিম্নে আমার মন্তব্য যােগ করিতেছিঃ
                </td>
                <td class="border">{{ form.comment }}</td>
                <td class="border">{{ getHumanDate(form.cro_date) }}</td>
                <td class="border">
                  <img
                    :src="
                      user.signatureImage
                        ? $store.state.appConfig.imageBaseUrl +
                          user.signatureImage
                        : demoImage
                    "
                    height="50"
                    widht="50"
                    alt="userImage"
                    class="signature m-0 p-0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" class="text-center py-4">
          <button
            :disabled="step === 1"
            v-if="step == 2"
            class="mx-1 btn prev"
            @click="$emit('prev')"
          >
            এডিট করুন
          </button>
          <!-- createNonGazzetedCROEvaluation(); -->
          <button
            class="mx-1 btn btn-warning"
            v-if="step == 1 || step == 2"
            data-bs-toggle="modal"
            data-bs-target="#return_to_iro"
          >
            Return
          </button>
          <button class="mx-1 btn next" v-if="step == 1" @click="nextStep()">
            সেভ করুন
          </button>
          <button
            class="mx-1 btn next"
            v-if="step == 1 || step == 2"
            @click="this.showAlert()"
          >
            অনুমোদন করুন
          </button>
        </b-col>
      </b-row>
    </div>
    <!-- modal area -->
    <div
      class="modal fade"
      id="return_to_iro"
      tabindex="-1"
      role="dialog"
      aria-labelledby="return_to_iro"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="text-end p-2">
            <button
              class="btn btn-close btn-sm"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="row p-2">
            <div class="col-12">
              <b-form-group
                id="reason-two"
                label="অনুরোধ ফেরতের কারণ উল্লেখ করুন"
                label-for="reason-two"
              >
                <b-form-textarea
                  id="textarea-1"
                  v-model="reason"
                  type="email"
                  placeholder="অনুরোধ ফেরতের কারণ উল্লেখ করুন"
                  required
                ></b-form-textarea>
              </b-form-group>
              <div class="col-12 text-end">
                <button
                  class="btn btn-sm btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="returnToIRO(acr)"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    acrData: {
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
        { value: "2", name: "যুক্তি সঙ্গতভাবে উত্তম" },
        { value: "3", name: "কঠোর" },
        { value: "4", name: "নমনীয়" },
        { value: "5", name: "পক্ষপাতদুষ্ট" },
      ],
      decision: [
        { value: "1", name: "দ্রুত পদোন্নতির যোগ্য" },
        { value: "2", name: "পদোন্নতির যোগ্য" },
        { value: "3", name: "সম্প্রতি পদোন্নিত প্রাপ্ত " },
        { value: "4", name: "এখন পদোন্নতির যোগ্য নন " },
      ],
      form: {
        id: this.$route.params.id,
        comment: "",
        evaluation: "",
        cro: "",
        cro_date: "",
      },
      data: [],
      userID: null,
      users: [],
      user: [],
      reason: "",
    };
  },
  created() {
    this.getNonGazzetedCROEvaluation();
    this.getNonGazzetedACRByID();
    this.viewUserList();
    this.form.cro_date = new Date();
  },
  methods: {
    nextStep() {
      this.onCustomStyleSubmit();

      this.$emit("next");
      if (this.step == 2) {
        this.createNonGazzetedCROEvaluation();
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "স্বাগতম !",
          text: "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি কি সাবমিট করতে চান ? ",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "সাবমিট",
          cancelButtonText: "বাতিল  ",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.createNonGazzetedCROEvaluation();
            // this.$swal.fire(
            //   "স্বাগতম !",
            //   "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি কি সাবমিট করতে চান ? ",
            //   "success"
            // );
          }
        });
    },
    createNonGazzetedCROEvaluation() {
      this.form.cro = this.user.idNo;

      this.$store
        .dispatch("acrStore/createNonGazzetedCROEvaluation", this.form)
        .then((res) => {
          this.acr = res;
          if (res.status == 200) {
            this.$swal.fire(
              "স্বাগতম !",
              "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি  সফলভাবে সাবমিট করা হয়েছে !",
              "success"
            );
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          }
        })
        .catch((err) => {});
    },
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.userID = res.userIdNo;
          this.form.cro = res.cro;
          this.form.user_id = res.userIdNo;
        })
        .catch((err) => {});
    },
    getNonGazzetedCROEvaluation() {
      setTimeout(() => {
        this.$store
          .dispatch(
            "acrStore/getNonGazzetedCROEvaluationByID",
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

          setTimeout(() => {
            this.user = this.users.find((e) => e.idNo == this.form.cro);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },
    async returnToIRO(item) {
      await this.$swal
        .fire({
          title: "আপনি কি নিশ্চিত ?",
          text: "আপনি এ সি আর অনুরোধ টি বাতিল করবেন !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "বাতিল করুন ",
          cancelButtonText: "বন্ধ করুন ",
        })
        .then((result) => {
          this.form.status = "iro";
          let form = {
            id: this.$route.params.id,
            status: "iro",
            route: "CRO to IRO",
            comment: this.reason,
          };

          let res = this.$store.dispatch("acrStore/getCroReturnByID", form);

          if (result.isConfirmed) {
            this.$router.push("/");
            this.$swal.fire(
              "স্বাগতম!",
              "এ সি আর অনুরোধটি  বাতিল হয়েছে ",
              "success"
            );
          }
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
