<template>
  <div class="px-2 px-md-0 mb-5">
    <div
      v-if="step === true"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      ধন্যবাদ! আবেদনটি সফলভাবে &nbsp;&nbsp;<strong>
        {{ getHumanDateWithTime(new Date()) }}
      </strong>
      &nbsp;&nbsp; এ সংরক্ষিত হয়েছে
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <b-form class="needs-validation" novalidate="">
      <b-row class="mx-2 bg-white rounded mt-5">
        <b-col cols="12">
          <p class="title mt-4">ব্যক্তিগত তথ্য</p>
          <p v-if="reporterForm && reporterForm.comment">
            <span>Decline Reason:</span>
            <span class="text-danger">{{ reporterForm.comment }}</span>
          </p>
          <hr />
        </b-col>
        <b-col cols="12">
          <div class="d-flex flex-row">
            <div class="">
              <p>
                <span class="text-center">১|</span>
                <span class="mx-1">নাম (মোটা অক্ষরে)</span>
              </p>
              <p>
                <span class="text-center">২|</span>
                <span class="mx-1"> পদবী </span>
              </p>
              <p>
                <span class="text-center">৩|</span>
                <span class="mx-1">জন্ম তারিখ </span>
              </p>
              <p>
                <span class="text-center">৪|</span>
                <span class="mx-1">সরকারী চাকুরীতে যোগদানের তারিখ </span>
              </p>
              <p>
                <span class="text-center">৫|</span>
                <span class="mx-1">শিক্ষাগত যোগ্যতা</span>
              </p>
            </div>
            <div>
              <p class="text-end mx-1">:</p>
              <p class="text-end mx-1">:</p>
              <p class="text-end mx-1">:</p>
              <p class="text-end mx-1">:</p>
              <p class="text-end mx-1">:</p>
            </div>

            <div class="text-start">
              <p v-if="userInfo && userInfo.banglaName">
                {{ userInfo.banglaName }}
              </p>
              <p v-if="userInfo && userInfo.designation">
                {{ userInfo.designation }}
              </p>
              <p v-if="userInfo && userInfo.dateOfBirth">
                {{ getHumanDate(userInfo.dateOfBirth) }}
              </p>
              <p v-if="userInfo && userInfo.dateOfJoin">
                {{ getHumanDate(userInfo.dateOfJoin) }}
              </p>
              <p v-if="userInfo && userInfo.highestEducationLevel">
                {{ userInfo.highestEducationLevel }}
              </p>
            </div>
          </div>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">বিভাগীয় পরীক্ষায় উত্তীর্ণ হয়েছেন?</label>

            <b-form-checkbox
              :disabled="step === true"
              id="checkbox-1"
              v-model="userInfo.departmentExamPass"
              name="checkbox-1"
              value="1"
              unchecked-value="0"
            >
              বিভাগীয় পরীক্ষায় উত্তীর্ণ হয়েছেন.
            </b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" v-if="userInfo.departmentExamPass == 1">
          <b-form-group>
            <label for="">বিভাগীয় পরীক্ষায় উত্তীর্ণ হবার তারিখ</label>

            <flat-pickr
              :disabled="step === true"
              v-model="userInfo.departmentExamDate"
              class="form-control"
              placeholder="YYYYY-MM-DD"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না
              <span class="text-danger">*</span>
            </label>
            <b-form-select
              :disabled="step === true"
              v-model="userInfo.jobStatus"
              :options="jobRole"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              :class="
                formSubmitted
                  ? jobStatusError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-select>
            <p v-if="errors[0] && !errors[0].message" class="text-danger">
              চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কিনা উল্লেখ করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >বেতন ও বেতন স্কেল
              <span class="text-danger">*</span>
            </label>
            <b-form-input
              :disabled="step === true"
              v-model="userInfo.salary"
              placeholder="মূল বেতন, কত - কত(অংকে)"
              required
              :class="
                formSubmitted ? (salaryError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
            <p v-if="errors[1] && !errors[1].message" class="text-danger">
              আপনার বেতন অথবা পে স্কেল উল্লেখ করুন !!!
            </p>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >কোন কোন ভাষা জানেন <span class="text-danger">*</span>
            </label>

            <multiselect
              :disabled="step === true"
              v-model="userInfo.language"
              :options="language"
              :multiple="true"
              :taggable="true"
              group-label="language"
              :group-select="true"
              :close-on-select="false"
              placeholder="Pick a value"
              :class="
                formSubmitted ? (languageError ? 'is-invalid' : 'is-valid') : ''
              "
            ></multiselect>
            <p v-if="errors[2] && !errors[2].message" class="text-danger">
              কোন কোন ভাষা জানেন উল্লেখ করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >বিশেষ প্রশিক্ষণ <span class="text-danger">*</span>
            </label>
            <b-form-input
              type="text"
              :disabled="step === true"
              v-model="userInfo.specialTraining"
              placeholder="বিশেষ প্রশিক্ষণ"
              required
              :class="
                formSubmitted
                  ? specialTrainingError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <p v-if="errors[3] && !errors[3].message" class="text-danger">
              বিশেষ প্রশিক্ষণ উল্লেখ করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" class="text-center py-3">
          <b-button
            @click.prevent="stepCount()"
            type="submit"
            class="mx-1"
            variant="primary"
          >
            <span v-if="step === false">সংরক্ষন করুন</span>
            <span v-else>রিপোর্ট এডিট করুন </span>
          </b-button>
          <b-button
            v-if="reporterForm.submited === 0 && step === true"
            @click.prevent="requestNonGazzetedACR()"
            type="submit"
            class="mx-1"
            variant="success"
            >সাবমিট করুন
          </b-button>
          <b-button
            v-if="reporterForm.submited === 11 && step === true"
            @click.prevent="updateNonGazzetedACR()"
            type="submit"
            class="mx-1"
            variant="success"
            >আপডেট করুন
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import formValidation from "@/mixins/commen/acr-validation/application-form/nonGazzeted";
import Datepicker from "vue3-datepicker";
import Datepicker1 from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { getLogedInUser } from "@/utils/auth";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const date = ref(null);
import moment from "moment";
export default {
  mixins: [formValidation],
  components: {
    Datepicker,
    Datepicker1,
    flatPickr,
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
    },
  },
  data() {
    return {
      date6: new Date(),
      loggedInUser: JSON.parse(getLogedInUser()),

      language: ["বাংলা", "ইংলিশ", "আরবি"],
      jobRole: [
        { item: "Temporary", name: "অস্থায়ী " },
        { item: "Permanent", name: "স্থায়ী" },
      ],
      show: true,
      // new section
      reporterForm: {
        iro: "",
        user_id: "",
        gread: null,
        designation: null,
        cro: "",
        joining_date_current_position: "",
        start_date: "",
        end_date: "",
      },
      userInfo: {
        designation: "",
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
        departmentExamPass: "",
        departmentExamDate: "",
        jobStatus: "",
        salary: "",
        language: "",
        specialTraining: "",
        profileImage: "",
        signatureImage: "",
      },
      selectedDesignation: [],
      options: [],
      users: [],
      user: [],
      iro: [],
      cro: [],
      step: false,
    };
  },
  created() {
    this.getReporterById();
    this.getDesignation();
    this.getUsers();
    this.getUser();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    stepCount() {
      this.step = !this.step;
    },
    requestNonGazzetedACR(index) {
      this.form.name = this.userInfo.banglaName;
      this.form.userIdNo = this.userInfo.idNo;
      this.form.highestEducationLevel = this.userInfo.highestEducationLevel;
      this.form.dateOfBirth = this.userInfo.dateOfBirth;
      this.form.joiningDate = this.userInfo.dateOfJoin;
      this.form.departmentExamPass = this.userInfo.departmentExamPass;
      this.form.departmentExamDate = this.userInfo.departmentExamDate;
      this.form.jobStatus = this.userInfo.jobStatus;
      this.form.acrStart = this.reporterForm.start_date;
      this.form.acrEnd = this.reporterForm.end_date;
      if (this.userInfo && this.userInfo.language) {
        this.form.language = this.userInfo.language.join(", ");
      }
      this.form.specialTraining = this.userInfo.specialTraining;
      this.form.designation = this.reporterForm.designation;
      this.form.salary = this.userInfo.salary;
      this.form.iro = this.reporterForm.iro;
      this.form.cro = this.reporterForm.cro;
      this.form.userId = this.userInfo.idNo;
      this.form.reporterId = this.reporterForm.id;

      this.onCustomStyleSubmit(this.form);
    },
    updateNonGazzetedACR() {
      this.form.id = this.reporterForm.id;
      this.form.name = this.userInfo.banglaName;
      this.form.userIdNo = this.userInfo.idNo;
      this.form.highestEducationLevel = this.userInfo.highestEducationLevel;
      this.form.dateOfBirth = this.userInfo.dateOfBirth;
      this.form.joiningDate = this.userInfo.dateOfJoin;
      this.form.departmentExamPass = this.userInfo.departmentExamPass;
      this.form.departmentExamDate = this.userInfo.departmentExamDate;
      this.form.jobStatus = this.userInfo.jobStatus;
      this.form.acrStart = this.reporterForm.start_date;
      this.form.acrEnd = this.reporterForm.end_date;
      if (this.userInfo && this.userInfo.language) {
        this.form.language = this.userInfo.language.join(", ");
      }
      this.form.specialTraining = this.userInfo.specialTraining;
      this.form.designation = this.reporterForm.designation;
      this.form.salary = this.userInfo.salary;
      this.form.iro = this.reporterForm.iro;
      this.form.cro = this.reporterForm.cro;
      this.form.userId = this.userInfo.idNo;
      this.form.reporterId = this.reporterForm.id;
      this.form.status = "iro";

      this.onCustomStyleSubmit(this.form);
    },
    // new section
    getReporterById() {
      this.$store
        .dispatch("reporter/getReportInfo", this.$route.params.id)
        .then((res) => {
          this.reporterForm = res[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getDesignation() {
      this.$store
        .dispatch("designation/getDesignation")
        .then((res) => {
          this.options = res.data;
          if (this.reporterForm.length > 0) {
            let data = this.options.find(
              (e) => e.id == this.reporterForm[0].designation
            );
            this.selectedDesignation = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUsers() {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.users = res.data;

          if (this.reporterForm.length > 0) {
            this.iro = this.users.find(
              (e) => e.idNo == this.reporterForm[0].iro
            );
            this.cro = this.users.find(
              (e) => e.idNo == this.reporterForm[0].cro
            );
            this.user = this.users.find(
              (e) => e.idNo == this.loggedInUser.user_id
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getUserInfo() {
      this.reporterForm[0].user_id = this.user.idNo;
      this.reporterForm[0].gread = this.user.grade;
    },
    getIRO() {
      this.reporterForm[0].iro = this.user.idNo;
    },
    getCRO() {
      this.reporterForm[0].cro = this.user.idNo;
    },
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.loggedInUser.user_id)
        .then((response) => {
          this.userInfo = response;
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },
    getHumanDateWithTime: function (date) {
      // return moment(date).locale("bn-BD").format("YYYY-MM-DD HH:mm:ss");
      return moment(date).locale("en-US").format("YYYY-MM-DD hh:mm A");
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 28px;
}
</style>
