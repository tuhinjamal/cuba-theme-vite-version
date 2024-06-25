<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <department-form :form="form" mode="edit" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import departmentForm from "./designation-form.vue";

export default {
  components: {
    departmentForm,
  },
  data() {
    return {
      form: {
        id: this.$route.params.id,
        name: "",
        name_bn: "",
        code: "",
      },
    };
  },
  created() {
    this.getDepartmentById();
  },
  methods: {
    getDepartmentById() {
      this.$store
        .dispatch("designation/getDesignationById", this.$route.params.id)
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
