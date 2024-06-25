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
              v-model="form.name"
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
            <label for=""
              >সর্বোচ্চ শিক্ষাগত যোগ্যতা
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.education"
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

        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >সরকারী চাকুরীতে যোগদানের তারিখ {{ formSubmitted }}
              {{ appoinmentDateError }}
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.appoinmentDate"
              placeholder="সরকারী চাকুরীতে যোগদানের তারিখ"
              required
              :class="
                formSubmitted
                  ? appoinmentDateError
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
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >বিভাগীয় পরীক্ষায় উত্তীর্ণ হয়েছেন?
              <span class="text-danger"></span
            ></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="বিভাগীয় পরীক্ষায় উত্তীর্ণ হয়েছেন?"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >বিভাগীয় পরীক্ষায় উত্তীর্ণ হবার তারিখ
              <span class="text-danger"></span
            ></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="বিভাগীয় পরীক্ষায় উত্তীর্ণ হবার তারিখ"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.employmentType"
              placeholder="চাকুরীতে প্রবেশক, অস্থায়ী অথবা স্থায়ী কি না"
              required
              :class="
                formSubmitted
                  ? employmentTypeError
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
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >বর্তমান পদে যোগদানের তারিখ
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.currentAppoinmentDate"
              placeholder="বর্তমান পদে যোগদানের তারিখ"
              required
              :class="
                formSubmitted
                  ? currentAppoinmentDateError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[9]">
              {{ errors[9].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >বেতন ও বেতন স্কেল <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.payScale"
              placeholder="বেতন ও বেতন স্কেল"
              required
              :class="
                formSubmitted ? (payScaleError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[10]">
              {{ errors[10].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শুরু
              <span class="text-danger"></span
            ></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শুরু"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'nonGazzeted'" cols="12" md="6">
          <b-form-group>
            <label for=""
              >রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শেষ
              <span class="text-danger"></span
            ></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরী শেষ"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">জন্মতারিখ <span class="text-danger">*</span></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.birthday"
              placeholder="জন্মতারিখ"
              required
              :class="
                formSubmitted ? (brithdayError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[3]">
              {{ errors[3].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >মোট চাকুরীর মেয়াদ
              <span class="text-danger">*</span>
            </label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.jobValidity"
              placeholder="মোট চাকুরীর মেয়াদ"
              required
              :class="
                formSubmitted
                  ? jobValidityError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <div class="valid-feedback" v-if="errors[4]">
              {{ errors[4].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদ</label
            >
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদ"
              required
            ></b-form-input>
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
            <div class="valid-feedback" v-if="errors[5]">
              {{ errors[5].message }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for=""
              >বিশেষ প্রশিক্ষণ <span class="text-danger">*</span>
            </label>
            <b-form-textarea
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
            ></b-form-textarea>
            <div class="valid-feedback" v-if="errors[6]">
              {{ errors[6].message }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="formType !== 'nonGazzeted'">
        <b-col cols="12">
          <p class="title mt-4">আলোচ্য সময় যে পদে বহাল ছিলেন</p>
          <hr />
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">পদের নাম <span class="text-danger">*</span></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="পদের নাম"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">সময়কাল <span class="text-danger"></span></label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="কত(দিন, মাস, সাল) থেকে কত(দিন, মাস, সাল)"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group>
            <label for="">বেতন ও বেতন স্কেল</label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="মূল বেতন, কত - কত(অংকে)"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col v-if="formType == 'report'" cols="12" md="6">
          <b-form-group>
            <label for="">মন্তব্য*</label>
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="মন্তব্য লিখুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <p class="title mt-4">প্রতিবেদনকারী অফিসার</p>
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
              v-model="form.name"
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
            <b-form-input
              :disabled="mode == 'view'"
              v-model="form.name"
              placeholder="প্রতিস্বাক্ষরকারী অফিসার"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center py-3">
          <b-button
            @click.prevent="onCustomStyleSubmit(), validationBypass()"
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
import formValidation from "@/mixins/commen/acr-validation/acrFormValidation";
export default {
  mixins: [formValidation],
  props: {
    formType: {
      type: String,
      default: "gazzeted",
    },
    mode: {
      type: String,
      default: "view",
    },
  },
  data() {
    return {
      form: {
        name: "",
        designation: "",
        jobValidity: "",
        education: "",
        birthday: "",
        language: "",
        specialTraining: "",
        //  non gazzeted field
        appoinmentDate: "",
        employmentType: "",
        currentAppoinmentDate: "",
        payScale: "",
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
    validationBypass() {
      if (this.$route.name == "gazzeted-form") {
        this.appoinmentDateError = false;
        (this.employmentTypeError = false),
          (this.currentAppoinmentDate = false),
          (this.payScaleError = false),
          console.log("====================================");
      }
      console.log(this.appoinmentDateError);
      console.log(this.$route.name);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 28px;
}
</style>
