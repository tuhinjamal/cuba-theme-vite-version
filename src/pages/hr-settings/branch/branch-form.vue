<template>
  <b-form class="needs-validation" novalidate="">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black">নতুন ব্রাঞ্চ সংযোজন</h3>
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
        <b-form-group class="text-black" label="অনুবিভাগ">
          <multiselect
            v-model="selectedWing"
            deselect-label="Can't remove this value"
            track-by="id"
            label="name"
            placeholder="Select wing"
            :options="wings"
            :searchable="true"
            :allow-empty="false"
          >
          </multiselect>
        </b-form-group>

        <p class="text-danger" v-if="selectedWingError !== ''">
          {{ selectedWingError }}
        </p>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="ব্রাঞ্চের   নাম (ইংরেজী)">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.name"
            placeholder="ব্রাঞ্চের   পুরো নাম ইংরেজীতে লিখুন"
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
          @click="createBranch"
        >
          সেভ করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-success"
          @click="updateBranch"
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
      selectedWing: [],
      wings: [],
      selectedWingError: "",
      nameValdation: "",
    };
  },
  mounted() {
    this.getWings();
  },

  methods: {
    createBranch() {
      if (
        this.selectedWing == null ||
        this.selectedWing == "" ||
        this.selectedWing == undefined ||
        this.form.name == "" ||
        this.form.name == null
      ) {
        if (
          this.selectedWing == null ||
          this.selectedWing == "" ||
          this.selectedWing == undefined
        ) {
          this.selectedWingError = "অনুবিভাগ সিলেক্ট করুন";
        } else {
          this.selectedWingError = "";
        }
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "ব্রাঞ্চের নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
      } else {
        this.nameValdation = "";
        this.bnNameValidation = "";

        if (this.nameValdation === "" && this.bnNameValidation === "") {
          // this.form.WingId = this.selectedWing.id;
          this.form.wingId = this.selectedWing.id;
          this.$store
            .dispatch("branch/createBranch", this.form)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push(`/branches`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    async updateBranch() {
      if (
        this.selectedWing == null ||
        this.selectedWing == "" ||
        this.selectedWing == undefined ||
        this.form.name == "" ||
        this.form.name == null
      ) {
        if (
          this.selectedWing == null ||
          this.selectedWing == "" ||
          this.selectedWing == undefined
        ) {
          this.selectedWingError = "অনুবিভাগ সিলেক্ট করুন";
        } else {
          this.selectedWingError = "";
        }
        if (this.form.name == null || this.form.name == "") {
          this.nameValdation = "ব্রাঞ্চের নাম লিখুন ";
        } else {
          this.nameValdation = "";
        }
      } else {
        this.nameValdation = "";
        this.bnNameValidation = "";

        if (this.nameValdation === "" && this.bnNameValidation === "") {
          // this.form.WingId = this.selectedWing.id;
          this.form.wingId = this.selectedWing.id;
          let res = await this.$store.dispatch(
            "branch/updateBranch",
            this.form
          );
          if (res.status === 200) {
            console.log("get back res", res);
            this.$router.push(`/branches`);
          }
        }
      }
    },
    async getWings() {
      let wingRes = await this.$store.dispatch("wing/getWing");
      this.wings = await wingRes.data;

      this.selectedWing = await wingRes.data.find(
        (e) => e.id === this.form.WingId
      );
      console.log("check wing data", this.selectedWing);
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
