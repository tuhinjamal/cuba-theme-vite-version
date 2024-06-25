<template>
  <div>
    <div class="logo-wrapper text-center">
      <Logo />
      <!-- <div class="back-btn" @click="toggle_sidebar">
        <i class="fa fa-angle-left"></i>
      </div> -->
      <!-- <div class="toggle-sidebar" @click="toggle_sidebar">
        <vue-feather
          class="status_toggle middle sidebar-toggle"
          type="grid"
          id="sidebar-toggle"
        ></vue-feather>
      </div> -->
    </div>
    <div class="logo-icon-wrapper">
      <router-link to="/">
        <img
          class="img-fluid"
          height="28"
          width="28"
          src="../../../assets/images/ict-acr-images/dashboard/logo.png"
          alt=""
        />
      </router-link>
    </div>
    <Nav />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Logo from "./logo.vue";
import Nav from "./nav.vue";

export default {
  name: "Sidebar",
  components: {
    Logo,
    Nav,
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      activeoverlay: (state) => state.menu.activeoverlay,
    }),
  },
  methods: {
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar");
      this.$store.state.menu.activeoverlay = false;
    },
  },
};
</script>
