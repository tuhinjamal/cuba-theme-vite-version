<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12">
        <role-form :form="form" mode="edit" />
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
        id: this.$route.params.id,
        name: "",
        permissions: [],
      },
    };
  },
  created() {
    this.getRoleById();
  },
  methods: {
    getRoleById() {
      this.$store
        .dispatch("rolePermission/getRoleById", this.$route.params.id)
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
