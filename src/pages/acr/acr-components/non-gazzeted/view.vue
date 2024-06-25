<template>
  <b-row>
    <b-col cols="12" class="text-end mt-5">
      <b-link
        :to="`/edit-non-gazzeted-acr/${$route.params.id}`"
        class="btn btn-success"
        @click="changeMode"
        >edit</b-link
      >
    </b-col>
    <b-col cols="12">
      <non-gazzeted-form-vue :form="form" mode="view" />
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
        iro: "2",
        cro: "3",
        userId: "1",
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
