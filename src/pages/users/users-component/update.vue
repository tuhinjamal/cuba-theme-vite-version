<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <user-form :form="form" mode="edit" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import userForm from "./user-form.vue";
export default {
  components: {
    userForm,
  },
  data() {
    return {
      form: {
        banglaName: "",
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
        profileImage: "",
        signatureImage: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.$route.params.id)
        .then((response) => {
          this.form = response;
          
        });
    },
  },
};
</script>
