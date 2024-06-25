<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <role-form :form="form" mode="create" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import roleForm from "./role-form.vue";

export default {
  components: {
    roleForm,
  },
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
};
</script>
