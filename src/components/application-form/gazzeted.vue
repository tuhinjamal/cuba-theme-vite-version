<template>
  <div class="px-2 px-md-0">
    <b-form class="needs-validation" novalidate="">
      <b-row>
        <b-col cols="12">
          <p class="title mt-4">অনুরোধ তথ্য</p>
          <hr />
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >অনুরোধকারীর নাম <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              placeholder="অনুরোধকারীর নাম"
              required
              :class="
                formSubmitted ? (nameError ? 'is-invalid' : 'is-valid') : ''
              "
              v-model="form.name"
            ></b-form-input>

            <div class="valid-feedback" v-if="errors[0]">
              {{ errors[0].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >অনুরোধকারীর পদবী <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.designation"
              placeholder="অনুরোধকারীর পদবী"
              required
              :class="
                formSubmitted
                  ? designationError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[1]">
              {{ errors[1].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">আইডি নং</label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.userIdNo"
              placeholder="আইডি নং"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="title mt-4">ব্যক্তিগত তথ্য</p>
          <hr />
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">জন্মতারিখ <span class="text-danger">*</span></label>
            <Datepicker1
              :disabled="mode == 'view'"
              v-model="form.dateOfBirth"
              position="center"
              data-language="en"
            ></Datepicker1>
            <div class="valid-feedback" v-if="errors[4]">
              {{ errors[4].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >সরকারী চাকুরীতে যোগদানের তারিখ
              <span class="text-danger">*</span></label
            >
            <Datepicker1
              :disabled="mode == 'view'"
              v-model="form.joiningDate"
              position="center"
              data-language="en"
            ></Datepicker1>
            <div class="valid-feedback" v-if="errors[3]">
              {{ errors[3].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">বিভাগীয় পরীক্ষায় উত্তীর্ণ হয়েছেন?</label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.departmentExamPass"
              placeholder="অপশন নির্বাচন করুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">বিভাগীয় পরীক্ষায় উত্তীর্ণ হবার তারিখ</label>
            <Datepicker1
              :disabled="mode == 'view'"
              v-model="form.departmentExamDate"
              position="center"
              data-language="en"
            ></Datepicker1>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না*
              <span class="text-danger">*</span>
            </label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.jobStatus"
              placeholder="অপশন নির্বাচন করুন"
              required
              :class="
                formSubmitted
                  ? jobStatusError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[8]">
              {{ errors[8].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >বেতন ও বেতন স্কেল
              <span class="text-danger">*</span>
            </label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.salary"
              placeholder="মূল বেতন, কত - কত(অংকে)"
              required
              :class="
                formSubmitted ? (salaryError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[5]">
              {{ errors[5].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">
              শিক্ষাগত যোগ্যতা <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.highestEducationLevel"
              placeholder="সর্বোচ্চ শিক্ষাগত যোগ্যতা"
              required
              :class="
                formSubmitted
                  ? educationError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[2]">
              {{ errors[2].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >কোন কোন ভাষা জানেন <span class="text-danger">*</span>
            </label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.language"
              placeholder="কোন কোন ভাষা জানেন"
              required
              :class="
                formSubmitted ? (languageError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[6]">
              {{ errors[6].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >বিশেষ প্রশিক্ষণ <span class="text-danger">*</span>
            </label>
            <b-form-input
              type="text"
              :disabled="mode == 'view'"
              v-model="form.specialTraining"
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
            <div class="valid-feedback" v-if="errors[7]">
              {{ errors[7].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শুরু</label>
            <Datepicker1
              :disabled="mode == 'view'"
              v-model="form.acrStart"
              position="center"
              data-language="en"
            ></Datepicker1>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শেষ</label>
            <Datepicker1
              :disabled="mode == 'view'"
              v-model="form.acrEnd"
              position="center"
              data-language="en"
            ></Datepicker1>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row v-for="(report, index) in form.reporter" :key="index">
        <b-col cols="12">
          <p class="title mt-4">{{ index + 1 }}| প্রতিবেদনকারী অফিসার</p>
          <hr />
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >রিপোর্ট প্রদানকারী / অনুস্বাক্ষরকারী অফিসার
              <span class="text-danger"></span
            ></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="report.iro"
              placeholder="রিপোর্ট প্রদানকারী / অনুস্বাক্ষরকারী অফিসার"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >প্রতিস্বাক্ষরকারী অফিসার <span class="text-danger"></span
            ></label>
            <div class="d-flex flex-row justify-content-between">
              <b-form-input
                :disabled="mode == 'view'"
                v-model="report.cro"
                placeholder="প্রতিস্বাক্ষরকারী অফিসার"
                required
              ></b-form-input>
              <button
                v-if="form.reporter.length > 1"
                type="button"
                @click="deleteRow"
                class="ms-1 btn btn-sm btn-outline-secondary"
              >
                X
              </button>
            </div>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6">
          <multiselect
            v-model="value"
            :options="options"
            :searchable="true"
            group-values="libs"
            group-label="language"
            :group-select="true"
            :close-on-select="true"
            track-by="name"
            label="name"
            placeholder="Pick a value"
            @select="
              getValue(value);
              getIROByID();
            "
          >
          </multiselect>
        </b-col>
      </b-row>
      <hr />
      <b-row class="mt-2">
        <b-col cols="12">
          <button type="button" @click="addRow" class="btn add-report">
            <p class="m-0 p-0">
              আরো যোগ করুন
              <span
                ><img
                  src="../../assets/images//ict-acr-images/acr-section/plus-circle.png"
                  alt=""
              /></span>
            </p>
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center py-3">
          <b-button
            @click.prevent="onCustomStyleSubmit"
            type="submit"
            class="mx-1"
            variant="primary"
            >Submit</b-button
          >
          <b-button type="reset" @reset.prevent="onReset" variant="danger"
            >Reset</b-button
          >
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
import { ref } from "vue";
export default {
  mixins: [formValidation],
  components: {
    Datepicker,
    Datepicker1,
  },
  data() {
    return {
      date6: new Date(),

      options: [
        {
          language: "Developer",
          libs: [
            { name: "Alabama", category: "Front-end" },
            { name: "Wyoming", category: "Backend" },
          ],
        },
        {
          language: "Designer",
          libs: [
            { name: "Peter", category: "Backend" },
            { name: "Hanry Die", category: "Backend" },
            { name: "John Doe", category: "Backend" },
          ],
        },
      ],
      value: [{ name: "Alabama", category: "Front-end" }],
      form: {
        name: "",
        userIdNo: "",
        highestEducationLevel: "",
        dateOfBirth: "2023-07-09 10:57:53",
        joiningDate: "2023-07-09 10:57:53",
        departmentExamPass: 0,
        departmentExamDate: "2023-07-09 10:57:53",
        jobStatus: "Entering",
        acrStart: "2023-07-01 15:30:45",
        acrEnd: "2023-07-01 15:30:45",
        language: "Bangla",
        specialTraining: "Web development",
        designation: "",
        salary: "12000",
        reporter: [{ iro: "2", cro: "3" }],

        userId: "1",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    requestNonGazzetedACR() {
      this.onCustomStyleSubmit();
      console.log("check", this.formSubmitted);
      // this.$store
      //   .dispatch("acrStore/requestNonGazzetedACR", this.form)
      //   .then((res) => {
      //     console.log("wjat");
      //     console.log("checkkkkk", res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    getIROByID() {
      this.$store
        .dispatch("acrStore/getIROByID", 101010)
        .then((res) => {
          console.log("wjat");
          console.log("checkkkkk", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getValue(value) {
      console.log("hello", value);
    },
    // add more iro cro field
    addRow() {
      console.log("push");
      this.form.reporter.push({
        iro: "",
        cro: "",
      });
    },
    deleteRow(index) {
      this.form.reporter.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 28px;
}
</style>
