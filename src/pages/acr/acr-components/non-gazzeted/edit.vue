<template>
  <b-row>
    <b-col cols="12">
      <non-gazzeted-form-vue :form="form" mode="edit" />
    </b-col>
  </b-row>
</template>

<script>
import nonGazzetedFormVue from "./nonGazzetedForm.vue";
export default {
  components: {
    nonGazzetedFormVue,
  },
  data() {
    return {
      form: {
        // name: "",
        // userIdNo: "",
        // highestEducationLevel: "",
        // dateOfBirth: "",
        // joiningDate: "",
        // departmentExamPass: true,
        // departmentExamDate: "",
        // jobStatus: "",
        // acrStart: "",
        // acrEnd: "",
        // language: "",
        // specialTraining: " ",
        // designation: "",
        // salary: "",
        // iro: "",
        // cro: "",
        // userId: "",
      },
    };
  },
  created() {
    this.getNonGazzetedACRByID();
  },

  methods: {
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.form = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
