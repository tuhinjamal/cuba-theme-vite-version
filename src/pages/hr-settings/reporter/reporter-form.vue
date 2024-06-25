<template>
  <b-form class="needs-validation" novalidate="">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black">
          প্রতিবেদনকারী ও প্রতিস্বাক্ষরকারী নির্বাচন করুন
        </h3>
      </b-col>
    </b-row>
    <div v-if="reporterForm.length > 0">
      <div v-for="(form, index) in reporterForm" :key="index">
        <b-row class="mx-2 p-1 rounded border bg-white alignment">
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black" label="কর্মকর্তা / কর্মচারী ">
              <multiselect
                v-model="user"
                deselect-label="Can't remove this value"
                track-by="id"
                label="banglaName"
                placeholder="Select user"
                :options="users"
                :searchable="true"
                :allow-empty="false"
                @select="getUserInfo"
              >
              </multiselect>
            </b-form-group>
            <p v-if="errors[0] && !errors[0].message" class="text-danger">
              প্রতিবেদনের জন্য ইউজার সিলেক্ট করুন
            </p>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for="">
                ইউজার আইডি<span class="text-danger">*</span></label
              >
              <b-form-input
                disabled
                v-model="user.idNo"
                placeholder="ইউজার  আইডি "
                :class="
                  formSubmitted ? (userIdError ? 'is-invalid' : 'is-valid') : ''
                "
              ></b-form-input>
            </b-form-group>
            <p v-if="errors[0] && !errors[0].message" class="text-danger">
              প্রতিবেদনের জন্য ইউজার সিলেক্ট করুন
            </p>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for=""> গ্রেড<span class="text-danger">*</span></label>
              <b-form-input
                disabled
                v-model="form.gread"
                placeholder="গ্রেড"
                :class="
                  formSubmitted ? (greadError ? 'is-invalid' : 'is-valid') : ''
                "
              ></b-form-input>
            </b-form-group>
            <p v-if="errors[1] && !errors[1].message" class="text-danger">
              প্রতিবেদনের জন্য ইউজার সিলেক্ট করুন
            </p>
          </b-col>

          <b-col cols="12" md="6" class="mt-3">
            <b-form-group
              class="text-black"
              label="আবেদনকারীর এ সি আর কালীন পদবী  "
            >
              <multiselect
                v-model="selectedDesignation"
                deselect-label="Can't remove this value"
                track-by="id"
                label="name_bn"
                placeholder="Select one"
                :options="options"
                :searchable="true"
                :allow-empty="false"
              >
              </multiselect>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for="">
                অনুস্বাক্ষরকারী <span class="text-danger">*</span></label
              >
              <multiselect
                v-model="iro"
                deselect-label="Can't remove this value"
                track-by="id"
                label="banglaName"
                placeholder="অনুস্বাক্ষরকারী"
                :options="users"
                :searchable="true"
                :allow-empty="false"
                @select="getIRO"
                :class="
                  formSubmitted ? (iroError ? 'is-invalid' : 'is-valid') : ''
                "
              >
              </multiselect>
              <b-form-input
                v-if="iro.idNo"
                disabled
                v-model="iro.idNo"
                placeholder=" আইডি "
                class="mt-1"
              ></b-form-input>
              <b-form-input
                v-if="iro.designation"
                disabled
                v-model="iro.designation"
                placeholder="পদবী"
                class="mt-1"
              ></b-form-input>
            </b-form-group>
            <p v-if="errors[2] && !errors[2].message" class="text-danger">
              অনুস্বাক্ষরকারী নির্বাচন করুন
            </p>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for="">
                প্রতিস্বাক্ষরকারী <span class="text-danger">*</span></label
              >
              <multiselect
                v-model="cro"
                deselect-label="Can't remove this value"
                track-by="id"
                label="banglaName"
                placeholder="সি আর ও"
                :options="users"
                :searchable="true"
                :allow-empty="false"
                @select="getCRO"
                :class="
                  formSubmitted ? (croError ? 'is-invalid' : 'is-valid') : ''
                "
              >
              </multiselect>
              <b-form-input
                v-if="cro.idNo"
                disabled
                v-model="cro.idNo"
                placeholder=" আইডি "
                class="mt-1"
              ></b-form-input>
              <b-form-input
                v-if="cro.designation"
                disabled
                v-model="cro.designation"
                placeholder="পদবী"
                class="mt-1"
              ></b-form-input>
            </b-form-group>
            <p v-if="errors[3] && !errors[3].message" class="text-danger">
              প্রতিস্বাক্ষরকারী নির্বাচন করুন
            </p>
          </b-col>
          <b-col cols="12" md="12" class="mt-3">
            <b-form-group
              class="text-black"
              label="বর্তমান পদে যোগদানের  তারিখ  "
            >
              <flat-pickr
                :disabled="mode == 'view'"
                v-model="form.joining_date_current_position"
                class="form-control"
                placeholder="YYYYY-MM-DD"
                :class="
                  formSubmitted ? (joinError ? 'is-invalid' : 'is-valid') : ''
                "
              />
            </b-form-group>
            <p v-if="joinError == true" class="text-danger">
              যোগদানের তারিখ প্রদান করুন !
            </p>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for="">
                শুরুর তারিখ <span class="text-danger">*</span></label
              >
              <flat-pickr
                :disabled="mode == 'view'"
                v-model="form.start_date"
                class="form-control"
                placeholder="YYYYY-MM-DD"
                :class="
                  formSubmitted ? (startError ? 'is-invalid' : 'is-valid') : ''
                "
              />
            </b-form-group>

            <p v-if="startError == true" class="text-danger">
              শুরুর তারিখ শূন্য কিংবা শেষের তারিখের চেয়ে বড় তারিখ নেয়া যাবেনা !
            </p>
          </b-col>
          <b-col cols="12" md="6" class="mt-3">
            <b-form-group class="text-black">
              <label for="">
                শেষের তারিখ <span class="text-danger">*</span></label
              >
              <flat-pickr
                :disabled="mode == 'view'"
                v-model="form.end_date"
                class="form-control"
                placeholder="YYYYY-MM-DD"
                :class="
                  formSubmitted ? (endError ? 'is-invalid' : 'is-valid') : ''
                "
              />
            </b-form-group>
            <p v-if="endError == true" class="text-danger">
              শেষের তারিখ শূন্য কিংবা শুরুর তারিখের চেয়ে ছোট তারিখ নেয়া যাবেনা !
            </p>
          </b-col>
        </b-row>
        <p class="text-danger" v-if="errorMSG !== ''">
          {{ errorMSG }}
        </p>
      </div>
    </div>
    <b-row>
      <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
        <button
          v-if="mode == 'create'"
          class="btn btn-success"
          @click="createReporter"
        >
          সেভ করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-success"
          @click="updateReporter"
        >
          আপডেট করুন
        </button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
const date = ref(null);
import reporterFormValidation from "@/mixins/commen/reporter-validation";
export default {
  mixins: [reporterFormValidation],
  components: {
    flatPickr,
  },
  props: {
    reporterForm: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      // default: "view",
    },
    idx: {
      type: Number,
    },
  },
  data() {
    return {
      selectedDesignation: [],
      options: [],
      users: [],
      user: [],
      iro: [],
      cro: [],
      errorMSG: "",
    };
  },
  created() {
    this.getDesignation();
    this.getUsers();
  },

  methods: {
    getDesignation() {
      this.$store
        .dispatch("designation/getDesignation")
        .then((res) => {
          this.options = res.data;
          if (this.$route.params.id && this.reporterForm.length > 0) {
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

          if (this.$route.params.id && this.reporterForm.length > 0) {
            this.iro = this.users.find(
              (e) => e.idNo == this.reporterForm[0].iro
            );
            this.cro = this.users.find(
              (e) => e.idNo == this.reporterForm[0].cro
            );
            this.user = this.users.find((e) => e.idNo == this.$route.params.id);
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
    createReporter() {
      this.reporterForm[0].designation = this.selectedDesignation.name;
      this.reporterForm[0].cro = this.cro.idNo;
      this.reporterForm[0].iro = this.iro.idNo;
      this.onCustomStyleSubmit(this.reporterForm[0]);
    },

    updateReporter() {
      this.reporterForm[0].designation = this.selectedDesignation.id;
      this.reporterForm[0].cro = this.cro.idNo;
      this.reporterForm[0].iro = this.iro.idNo;
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
.file {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.file > input[type="file"] {
  display: none;
}

.file > label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@keyframes pulse {
  0% {
    color: hsl(48, 100%, 67%);
  }

  50% {
    color: hsl(48, 100%, 38%);
  }

  100% {
    color: hsl(48, 100%, 67%);
  }
}

.hide {
  display: none;
  position: absolute;
  margin-top: -100px;
}

.myDIV:hover + .hide {
  display: block;
  color: red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
@/mixins/commen/acr-validation/evaluation-form/formOne
