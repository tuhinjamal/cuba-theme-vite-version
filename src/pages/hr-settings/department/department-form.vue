<template>
  <b-form class="needs-validation" novalidate="">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black">নতুন বিভাগ সংযোজন</h3>
      </b-col>
    </b-row>

    <b-row class="mx-2 p-1 rounded border bg-white alignment">
      <b-col v-if="mode == 'view'" cols="12" class="text-end">
        <b-link
          :to="`/user-edit/${$route.params.id}`"
          class="btn btn-sm bg-success shadow-lg text-white rounded border-light my-1 ms-1"
        >
          এডিট করুন
        </b-link>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="বিভাগের  নাম (বাংলা)*">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.name_bn"
            placeholder="বিভাগের  পুরো নাম বাংলায় লিখুন"
            required
          ></b-form-input>
          <p class="text-danger" v-if="bnNameValidation !== ''">
            {{ bnNameValidation }}
          </p>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="বিভাগের  নাম (ইংরেজী)*">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.name"
            placeholder="বিভাগের  পুরো নাম ইংরেজীতে লিখুন"
            required
          ></b-form-input>
          <p class="text-danger" v-if="nameValdation !== ''">
            {{ nameValdation }}
          </p>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="বিভাগের কোড ">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.code"
            placeholder="বিভাগের কোড  লিখুন"
            required
          ></b-form-input>
        </b-form-group>
        <p class="text-danger" v-if="codeValidation !== ''">
          {{ codeValidation }}
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
        <button
          v-if="mode == 'create'"
          class="btn btn-success"
          @click="createUser"
        >
          সেভ করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-success"
          @click="updateDepartment"
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
// import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formOne";
export default {
  // mixins: [acrEvaluationFormValidation],
  components: {
    flatPickr,
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
      // default: "view",
    },
  },
  data() {
    return {
      nameValdation: "",
      bnNameValidation: "",
      codeValidation: "",
    };
  },

  methods: {
    createUser() {
      if (
        this.form.name == null ||
        this.form.name == "" ||
        this.form.name_bn == null ||
        this.form.name_bn == "" ||
        this.form.code == null ||
        this.form.code == ""
      ) {
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "বিভাগের ইংরেজি নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
        if (this.form.name_bn == null || this.form.name_bn == "") {
          this.bnNameValidation = "বিভাগের বাংলা নাম লিখুন ";
        } else {
          this.bnNameValidation = "";
        }
        if (this.form.code == null || this.form.code == "") {
          this.codeValidation = " বিভাগের কোড লিখুন  ";
        } else {
          this.codeValidation = "";
        }
      } else {
        this.nameValdation = "";
        this.bnNameValidation = "";
        this.codeValidation = "";
        if (
          this.form.name !== null ||
          (this.form.name == "" && this.form.name_bn !== null) ||
          (this.form.name_bn !== "" && this.form.code !== null) ||
          this.form.code !== ""
        ) {
          this.$store
            .dispatch("department/createDepartment", this.form)
            .then((res) => {
              this.$router.push("/departments");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    updateDepartment() {
      if (
        this.form.name == null ||
        this.form.name == "" ||
        this.form.name_bn == null ||
        this.form.name_bn == "" ||
        this.form.code == null ||
        this.form.code == ""
      ) {
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "বিভাগের ইংরেজি নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
        if (this.form.name_bn == null || this.form.name_bn == "") {
          this.bnNameValidation = "বিভাগের বাংলা নাম লিখুন ";
        } else {
          this.bnNameValidation = "";
        }
        if (this.form.code == null || this.form.code == "") {
          this.codeValidation = " বিভাগের কোড লিখুন  ";
        } else {
          this.codeValidation = "";
        }
      } else {
        this.nameValdation = "";
        this.bnNameValidation = "";
        this.codeValidation = "";
        if (
          this.form.name !== null ||
          (this.form.name !== "" && this.form.name_bn !== null) ||
          (this.form.name_bn !== "" && this.form.code !== null) ||
          this.form.code !== ""
        ) {
          this.$store
            .dispatch("department/updateDepartment", this.form)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push("/departments");
              }
            })
            .catch((err) => {
              console.log(err);
            });
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
