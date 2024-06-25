<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <department-form :reporterForm="reporterForm" mode="create" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import departmentForm from "./reporter-form.vue";

export default {
  components: {
    departmentForm,
  },
  data() {
    return {
      reporterForm: [
        {
          iro: "",
          user_id: "",
          gread: null,
          designation: null,
          cro: "",
          joining_date_current_position: "",
          start_date: "",
          end_date: "",
        },
      ],
    };
  },
};
</script>
