<template>
  <b-row>
    <b-col cols="12">
      <non-gazzeted-form-vue :form="form" mode="create" />
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
        dateOfBirth: "",
        joiningDate: "",
        departmentExamPass: 0,
        departmentExamDate: "",
        jobStatus: "",
        acrStart: "",
        acrEnd: "",
        language: "",
        specialTraining: "",
        designation: "",
        salary: "",
        iro: "",
        cro: "",
        userId: "",
        reporterId: null,
        reporter: "",
      },
    };
  },
};
</script>
