<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <user-form mode="view" />
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
    return {};
  },

};
</script>
