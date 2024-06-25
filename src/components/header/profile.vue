<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        v-if="userinfo.profileImage !== null"
        class="rounded border"
        :src="
          userinfo.profileImage
            ? $store.state.appConfig.imageBaseUrl + userinfo.profileImage
            : `https://ui-avatars.com/api/?name=${user.englishName}`
        "
        height="30"
        width="30"
        alt="profile image"
      />
      <img
        v-else
        src="../../assets/images/ict-acr-images/avatar/avatar.png"
        alt="upload-img"
        height="30"
        width="30"
      />
      <div class="media-body">
        <span>
          {{ userinfo.englishName }}<i class="ms-1 middle fa fa-angle-down"></i
        ></span>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <router-link :to="`/user-print/${user.user_id}`"
          ><vue-feather type="user"></vue-feather
          ><span>Account </span></router-link
        >
      </li>
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span>Log out</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>
import { getLogedInUser } from "@/utils/auth";
export default {
  name: "Profile",
  data() {
    return {
      user: JSON.parse(getLogedInUser()),
      userinfo: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.user.user_id)
        .then((response) => {
          this.userinfo = response;
        });
    },
    logout: function () {
      localStorage.removeItem("User");
      localStorage.removeItem("UserInfo");
      localStorage.removeItem("Admin-Token");
      localStorage.removeItem("Notification");
      localStorage.removeItem("userROle");

      this.$router.replace("/auth/login");
    },
  },
};
</script>
