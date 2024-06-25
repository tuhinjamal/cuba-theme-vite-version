<template>
  <div>
    <footer
      class="footer"
      :class="this.footer == 'footer-dark' ? 'footer-dark' : ''"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 footer-copyright text-center">
            <p class="mb-0">
              Copyright {{ year }} ©
              <a href="https://bcc.gov.bd/">
                <span class="text-black">
                  বাংলাদেশ কম্পিউটার কাউন্সিল (বি সি সি )
                </span>
                <span class="text-muted"> All rights reserved.</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "footerpage",
  data() {
    return {
      customizer: false,
      year: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapGetters({
      footer: "layout/footer",
    }),
  },
};
</script>
<style scoped>
.clr {
  color: #f47920;
}
</style>
