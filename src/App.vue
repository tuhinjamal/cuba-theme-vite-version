<template>
  <div class="m-0 p-0">
    <div class="loader-wrapper" v-if="loading">
      <img
        class="loader-index"
        height="150"
        width="300"
        src="./assets/images/ict-acr-images/loader/loader.png"
      />
    </div>

    <router-view class="px-2 px-md-0" v-else />
  </div>
</template>

<script>
import {
  getLogedInUser,
  setLogedInUserInfo,
  setNotification,
  setUserRole,
} from "./utils/auth";
export default {
  name: "App",
  data() {
    return {
      loading: true,
      logedInUser: JSON.parse(getLogedInUser()),
      role: {
        Admin: false,
        hr: false,
        User: false,
        IRO: false,
        CRO: false,
        access_log: false,
        applicant: false,
        Reporter_assign: false,
        Role: false,
      },
    };
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.loading = !this.loading;
      }, 1000);
      this.loading = !this.loading;
    },
  },
  mounted() {
    this.loading = false;
    if (
      this.$store.state.userStore.loggedInUser &&
      !this.$store.state.userStore.loggedInUser.id
    ) {
      this.getUser();
    }
  },
  methods: {
    async getUser() {
      const userDetail = await this.$store.dispatch(
        "userStore/getUserById",
        this.logedInUser.user_id
      );

      userDetail.Roles.forEach((e) => {
        if (e.name === "Admin") {
          return (this.role.Admin = true);
        }
        if (e.name === "hr") {
          return (this.role.hr = true);
        }
        if (e.name === "User") {
          return (this.role.User = true);
        }
        if (e.name === "IRO") {
          return (this.role.IRO = true);
        }
        if (e.name === "CRO") {
          return (this.role.CRO = true);
        }

        if (e.name === "access_log") {
          return (this.role.access_log = true);
        }
        if (e.name === "applicant") {
          return (this.role.applicant = true);
        }
        if (e.name === "Reporter_assign") {
          return (this.role.Reporter_assign = true);
        }
        if (e.name === "Role") {
          return (this.role.Role = true);
        }
      });
      let newROle = {};

      if (this.role.Admin === true) {
        newROle.Admin = this.role.Admin;
      }
      if (this.role.hr === true) {
        newROle.hr = this.role.hr;
      }
      if (this.role.User === true) {
        newROle.User = this.role.User;
      }
      if (this.role.IRO === true) {
        newROle.IRO = this.role.IRO;
      }
      if (this.role.CRO === true) {
        newROle.CRO = this.role.CRO;
      }
      if (this.role.access_log === true) {
        newROle.access_log = this.role.access_log;
      }
      if (this.role.applicant === true) {
        newROle.applicant = this.role.applicant;
      }
      if (this.role.Reporter_assign === true) {
        newROle.Reporter_assign = this.role.Reporter_assign;
      }
      if (this.role.Role === true) {
        newROle.Role = this.role.Role;
      }

      this.$store.state.userStore.loggedInUser = userDetail;
      if (userDetail.id) {
        setUserRole(JSON.stringify(newROle));
        setLogedInUserInfo(JSON.stringify(userDetail));
      }
    },
  },
};
</script>
