<template>
  <div>
    <b-form class="needs-validation" novalidate="">
      <b-row class="alignment">
        <b-col cols="12">
          <b-col cols="12" class="border rounded mt-3 card">
            <b-row class="alignment py-4">
              <b-col cols="12" md="2" class="text-center text-md-start">
                <img
                  :src="
                    form.profileImage
                      ? $store.state.appConfig.imageBaseUrl + form.profileImage
                      : $store.state.appConfig.imageBaseUrl + form.profileImage
                  "
                  height="100"
                  widht="100"
                  alt="userImage"
                  class="user-img"
                />
              </b-col>

              <b-col
                cols="12"
                md="10"
                class="text-center mt-3 mt-md-0 px-0 px-md-5 px-lg-0 text-md-start"
              >
                <p>{{ form.banglaName }} ({{ form.idNo }})</p>
                <p class="text-muted">
                  <!-- {{ selectedSection }}, {{ selectedDepartment }} -->
                  {{ form.personalMail }}
                </p>
                <!-- <p class="text-muted">
                {{ form.officialNumber }}
              </p> -->
                <p class="text-muted">
                  {{ acr.designation }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-col>
        <b-col
          cols="12"
          class="bg-light"
          v-if="acr.comment && acr.comment !== ''"
        >
          <div class="border rounded card">
            <p
              v-if="acr.comment && acr.comment !== ''"
              class="ms-2 text-danger m-0 p-0"
            >
              <span>**অনুরোধ ফেরতের কারণ </span>: <span>{{ acr.comment }}</span>
            </p>
          </div>
        </b-col>
        <b-col cols="12" class="bg-light">
          <div class="border rounded card">
            <h3 class="mt-3 ms-2 text-black">ব্যক্তিগত তথ্য</h3>

            <b-row class="p-2 bg-white m-2 py-4">
              <b-col cols="12" class="">
                <table class="table border border-muted">
                  <tbody>
                    <tr>
                      <td>কর্মকর্তা / কর্মচারী</td>
                      <td class="border-start">{{ acr.name }}</td>
                    </tr>
                    <tr>
                      <td>পদবী</td>
                      <td class="border-start">{{ acr.designation }}</td>
                    </tr>
                    <tr>
                      <td>জন্ম তারিখ</td>
                      <td class="border-start">
                        {{ getHumanDate(form.dateOfBirth) }}
                      </td>
                    </tr>
                    <tr>
                      <td>বর্তমান বেতন ও বেতনক্রম</td>
                      <td class="border-start">{{ acr.salary }}</td>
                    </tr>
                    <tr>
                      <td>সরকারী চাকুরীতে যোগাদানের তারিখ</td>
                      <td class="border-start">
                        {{ getHumanDate(form.dateOfJoin) }}
                      </td>
                    </tr>
                    <tr>
                      <td v-if="acr.departmentExamPass === true">
                        বিভাগীয় পরীক্ষায় উত্তীর্ণ হইয়াছেন কিনা
                      </td>
                      <td
                        class="border-start"
                        v-if="acr && acr.departmentExamPass === true"
                      >
                        <span v-if="acr.departmentExamPass === true"
                          >হ্যাঁ
                        </span>
                        ,<span v-if="acr && acr.departmentExamDate">
                          {{ getHumanDate(acr.departmentExamDate) }}</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>চাকুরী তে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না</td>
                      <td class="border-start">
                        <span v-if="acr.jobStatus == 'Permanent'">স্থায়ী</span>
                        <span v-if="acr.jobStatus == 'Temporary'"
                          >অস্থায়ী
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>বর্তমান পদে যোগদানের তারিখ</td>
                      <td class="border-start">
                        {{ getHumanDate(acr.joiningDate) }}
                      </td>
                    </tr>
                    <tr>
                      <td>শিক্ষাগত যােগ্যতা</td>
                      <td class="border-start">
                        {{ form.highestEducationLevel }}
                      </td>
                    </tr>
                    <tr>
                      <td>ভাষাজ্ঞান</td>
                      <td class="border-start">
                        {{ acr.language }}
                      </td>
                    </tr>
                    <tr>
                      <td>প্রশিক্ষণ/বিশেষ প্রশিক্ষণ (যদি থাকে )</td>
                      <td class="border-start">
                        {{ acr.specialTraining }}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        জি আরপি প্রশিক্ষণ প্রতিবেদনকারী অফিসারের অধীনে চাকুরীর
                        সঠিক মেয়াদ
                      </td>
                      <td class="border-start">
                        {{ getHumanDate(acr.acrStart) }} হইতে
                        {{ getHumanDate(acr.acrEnd) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="step == 1">
        <b-col cols="12" class="text-center py-4">
          <button
            :disabled="step === 1"
            v-if="step !== 1"
            class="mx-1 btn prev"
            @click="prev"
          >
            ফেরত পাঠান
          </button>
          <!-- @click="cancelIRO(acr)" -->
          <button
            :disabled="step === 4"
            class="mx-1 btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#return_to_user"
          >
            Return
          </button>

          <button
            :disabled="step === 4"
            class="mx-1 btn next"
            @click="toggleDetails"
          >
            মূল্যায়ন করুন
          </button>
        </b-col>
      </b-row>
    </b-form>

    <!-- modal area -->
    <div
      class="modal fade"
      id="return_to_user"
      tabindex="-1"
      role="dialog"
      aria-labelledby="return_to_user"
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
                id="reason-one"
                label="অনুরোধ ফেরতের কারণ উল্লেখ করুন"
                label-for="reason-one"
              >
                <b-form-textarea
                  id="textarea-1"
                  v-model="reason"
                  type="text"
                  placeholder="অনুরোধ ফেরতের কারণ উল্লেখ করুন"
                  required
                ></b-form-textarea>
              </b-form-group>
              <div class="col-12 text-end">
                <button
                  class="btn btn-sm btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="cancelIRO(acr)"
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
import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formOne";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import moment from "moment";
import { getLogedInUser } from "@/utils/auth";
const date = ref(null);
export default {
  mixins: [acrEvaluationFormValidation],
  props: {
    step: {
      type: Number,
    },
  },
  data() {
    return {
      reason: "",

      acr: {
        name: "",
        userIdNo: "",
        highestEducationLevel: "",
        dateOfBirth: "",
        joiningDate: "",
        departmentExamPass: 0,
        departmentExamDate: "",
        jobStatus: "",
        acrStart: "",
        acrEnd: "",
        language: "",
        specialTraining: " ",
        designation: "",
        salary: "",
        iro: "",
        cro: "",
        userId: "",
      },
      form: {
        banglaName: "",
        englishName: "",
        grade: "",
        class: "",
        idNo: "",
        batchNo: "",
        nid: "",
        cadre: "",
        workingArea: "",
        section: "",
        fatherName: "",
        motherName: "",
        dateOfJoin: "",
        dateOfBirth: "",
        prlStartDate: "",
        branch: "",
        maritalStatus: "",
        highestEducationLevel: "",
        gender: "",
        bloodGroup: "",
        personalMail: "",
        officialMail: "",
        personalNumber: "",
        officialNumber: "",
        status: "",
        designation: "",
        telephone: "",
        role: "",
        profileImage: "",
        signatureImage: "",
      },
      users: [],
      iro: {},
      cro: {},
      selectedSection: [],
      selectedDepartment: [],
      userID: JSON.parse(getLogedInUser()),
    };
  },
  components: {
    flatPickr,
  },
  created() {
    this.getNonGazzetedACRByID();
    this.viewUserList();
    this.getSections();
    this.getDepartments();
  },
  methods: {
    toggleDetails() {
      this.onCustomStyleSubmit();

      if (this.nameError == false && this.addressError == false) {
        this.$emit("next");
      }
    },
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.acr = res;

          this.getUser();
        })
        .catch((err) => {});
    },
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.acr.userIdNo)
        .then((response) => {
          this.form = response;
        });
    },
    viewUserList() {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.users = res.data;

          setTimeout(() => {
            this.iro = this.users.find((e) => e.idNo == this.acr.iro);
            this.cro = this.users.find((e) => e.idNo == this.acr.cro);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSections() {
      this.$store
        .dispatch("section/getSection")
        .then((res) => {
          this.sections = res.data;
          this.selectedSection = this.sections.find(
            (e) => e.id == this.form.section
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDepartments() {
      this.$store
        .dispatch("department/getDepartment")
        .then((res) => {
          this.departments = res.data;
          this.selectedDepartment = this.departments.find(
            (e) => e.id == this.form.branch
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },
    async cancelIRO(item) {
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
          if (result.isConfirmed) {
            this.$swal.fire(
              "স্বাগতম!",
              "এ সি আর অনুরোধটি  বাতিল হয়েছে ",
              "success"
            );
            let form = {
              id: item.reporter_id,
              user_id: item.userIdNo,
              iro: item.iro,
              cro: item.cro,
              route: "IRO to user",
              comment: this.reason,
              submited: 11,
            };

            let res = this.$store.dispatch("reporter/updateReporter", form);
            console.log("ksdjlkfj", res);
            this.$router.push("/");
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
@/mixins/commen/acr-validation/evaluation-form/formOne
