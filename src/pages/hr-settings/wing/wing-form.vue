<template>
  <b-form class="needs-validation" novalidate="">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black">নতুন অনুবিভাগ সংযোজন</h3>
      </b-col>
    </b-row>

    <b-row class="mx-2 p-1 rounded border bg-white alignment">
      <b-col v-if="mode == 'view'" cols="12" class="text-end">
        <b-link
          :to="`/zone-edit/${$route.params.id}`"
          class="btn btn-sm bg-success shadow-lg text-white rounded border-light my-1 ms-1"
        >
          এডিট করুন
        </b-link>
      </b-col>

      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="অনুবিভাগের   নাম (ইংরেজী)">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.name"
            placeholder="অনুবিভাগ   পুরো নাম ইংরেজীতে লিখুন"
            required
          ></b-form-input>
        </b-form-group>
        <p class="text-danger" v-if="nameValdation !== ''">
          {{ nameValdation }}
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
        <button
          v-if="mode == 'create'"
          class="btn btn-success"
          @click="createSection"
        >
          সেভ করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-success"
          @click="updateSection"
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
    },
  },
  data() {
    return {
      nameValdation: "",
    };
  },

  methods: {
    createSection() {
      if (this.form.name == null || this.form.name == "") {
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "অনুবিভাগের  নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
      } else {
        this.nameValdation = "";

        if (this.form.name !== null || this.form.name == "") {
          this.$store
            .dispatch("wing/createWing", this.form)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push(`/wings`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    updateSection() {
      if (this.form.name == null || this.form.name == "") {
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "অনুবিভাগের  নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
      } else {
        this.nameValdation = "";

        if (this.form.name !== null || this.form.name == "") {
          this.$store
            .dispatch("wing/updateWing", this.form)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push(`/wings`);
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
