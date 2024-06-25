<template>
  <div class="header-wrapper row m-0 p-2">
    <div
      class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto"
    >
      <ul class="nav-menus">
        <li>
          <Notifications />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import Language from "./language";
import Notifications from "./notifications.vue";
// import Mode from "./mode";
import Profile from "./profile.vue";

import Logo from "./logo.vue";
export default {
  components: {
    // Language,
    Notifications,
    // Mode,
    Profile,
    Logo,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      megamenuItems: (state) => state.menu.megamenu,
    }),
  },

  setup() {
    return {};
  },
};
</script>
