<template>
  <router-link to="/">
    <!-- <img
      class="img-fluid for-light"
      src="../../../assets/images/ict-acr-images/auth-section/IctDivisionLogo.png"
      alt=""
    /><img
      class="img-fluid for-dark"
      src="../../../assets/images/ict-acr-images/auth-section/IctDivisionLogo.png"
      alt=""
    /> -->
    <side-bar-logo class="img-fluid for-light" />
  </router-link>
</template>
<script>
import sideBarLogo from "./sidebarLogoSvg.vue";
export default {
  components: {
    sideBarLogo,
  },
  name: "Logo",
};
</script>
