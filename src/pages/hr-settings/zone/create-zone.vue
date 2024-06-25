<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <department-form :form="form" mode="create" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import departmentForm from "./zone-form.vue";

export default {
  components: {
    departmentForm,
  },
  data() {
    return {
      form: {
        name: "",
        name_bn: "",
        code: "",
      },
    };
  },
};
</script>
