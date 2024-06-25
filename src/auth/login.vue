<template>
  <div class="bg">
    <b-row
      class="d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 custom"
    >
      <b-col class="left">
        <b-row class="logo-section rounded">
          <b-col cols="12" class="text-center">
            <!-- <img
              src="../assets/images/ict-acr-images/auth-section/BCC_AUTH_LOGO.png"
              alt="ICT Logo"
              class="img-fluid"
            /> -->
            <logo-svg />
          </b-col>
          <b-col cols="12" class="text-white text-center d-none d-lg-block">
            <h3 class="mt-2">Welcome To</h3>
            <h2 class="title mt-1">
              Annual Confidential Report (ACR) Application System
            </h2>
            <h1 class="ict-text">বাংলাদেশ কম্পিউটার কাউন্সিল (বিসিসি)</h1>
          </b-col>

          <b-col cols="12" class="text-white text-center d-none d-lg-block">
            <b-col cols="12" class="text-center custom-padding">
              <b-row class="d-flex flex-row justify-content-between">
                <b-col class="custom-padding">
                  <b-link>
                    <!-- <img
                      src="../assets/images/ict-acr-images/auth-section/slowganOne.png"
                      alt=""
                  /> -->
                    <monument-svg />
                  </b-link>
                </b-col>
                <b-col class="custom-padding">
                  <b-link>
                    <!-- <img
                      src="../assets/images/ict-acr-images/auth-section/slowganTwo.png"
                      alt=""
                  /> -->
                    <slowgan-svg />
                  </b-link>
                </b-col>
              </b-row>
            </b-col>
          </b-col>
        </b-row>
      </b-col>

      <b-col class="px-md-5 py-2">
        <div class="px-md-4">
          <b-row class="logo-section bg-white rounded">
            <b-col cols="12" class="text-start px-md-4">
              <p class="sign-in-title mt-2">লগইন</p>
            </b-col>
            <b-col cols="12" class="text-start px-4">
              <b-form>
                <b-form-group label="আপনার ডি-নথি আইডি প্রদান করুন ">
                  <b-form-input
                    @input="checkInput"
                    v-model="form.user_id"
                    type="number"
                    placeholder=" ex-123456"
                  />
                  <p
                    v-if="message !== ''"
                    class="validate-error text-danger pb-2"
                  >
                    {{ message }}
                  </p>
                </b-form-group>
                <b-form-group>
                  <span class="text-danger mb-1">ও টি পি মাধ্যম </span>
                  <div class="d-flex flex-row justify-content-start">
                    <b-form-checkbox
                      id="mail-checkbox"
                      class="border-danger text-danger"
                      v-model="form.email"
                      name="email"
                      :value="true"
                      :unchecked-value="false"
                    >
                      <span class="text-danger">ই-মেইল</span>
                    </b-form-checkbox>
                    <b-form-checkbox
                      id="phone-checkbox"
                      class="border-danger ms-1"
                      v-model="form.sms"
                      name="sms"
                      :value="true"
                      :unchecked-value="false"
                    >
                      <span class="text-danger ms-1">মোবাইল</span>
                    </b-form-checkbox>
                  </div>
                  <p
                    v-if="OTPmessage !== ''"
                    class="validate-error text-danger pb-2"
                  >
                    {{ OTPmessage }}
                  </p>
                </b-form-group>

                <b-form-group class="text-center custom-padding">
                  <b-button
                    @click.prevent="login"
                    type="submit"
                    class="btn btn-lg submit-btn-color w-md-50"
                    >লগইন</b-button
                  >
                </b-form-group>
              </b-form>
              <b-col cols="12" class="text-center">
                <b-row class="d-flex flex-row justify-content-between py-4">
                  <b-col class="custom-padding">
                    <b-link>
                      <help-desk />
                    </b-link>
                  </b-col>
                  <b-col class="custom-padding">
                    <b-link>
                      <email />
                    </b-link>
                  </b-col>
                  <b-col class="custom-padding">
                    <b-link><user-menual /> </b-link>
                  </b-col>
                  <b-col class="custom-padding">
                    <b-link>
                      <tutorial />
                    </b-link>
                  </b-col>
                </b-row>
              </b-col>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { setLogedInUserInfo } from "@/utils/auth";
import logoSvg from "./logoSvg.vue";
import monumentSvg from "./monumentSvg.vue";
import slowganSvg from "./slowganSvg.vue";
import helpDesk from "./svg/helpDesk.vue";
import email from "./svg/email.vue";
import userMenual from "./svg/userMenual.vue";
import tutorial from "./svg/tutorial.vue";

export default {
  components: {
    logoSvg,
    monumentSvg,
    slowganSvg,
    helpDesk,
    email,
    userMenual,
    tutorial,
  },
  data() {
    return {
      form: {
        user_id: "",
        email: true,
        sms: true,
      },
      message: "",
      toast: useToast(),
      OTPmessage: "",
    };
  },

  methods: {
    checkInput() {
      var regExp = new RegExp("^\\d+$");
      var isValid = regExp.test(this.form.user_id);

      if (isValid == true) {
        this.message = "";
      } else {
        if (this.form.user_id.length > 0) {
          this.message = "only numaric value acceptable eg:-123 !!!";
        } else {
          this.message = "";
        }
      }
      if (this.form.user_id.length > 6) {
        this.message = "6 digits only !";
      }
    },
    login() {
      if (this.form.user_id == "") {
        this.message = "ইউজার আইডি প্রদান করুন  !";
      } else if (this.form.email == false && this.form.sms == false) {
        this.OTPmessage = "ইমেইল অথবা  মোবাইল সিলেক্ট করুন !";
        return 0;
      } else {
        this.$store
          .dispatch("auth/login", this.form)
          .then((res) => {
            // if (res.status === 200) {
            this.message = res.data.message;
            localStorage.setItem(
              "User",
              JSON.stringify({
                user_id: this.form.user_id,
              })
            );
            this.$router.push("/auth/otp");
            this.toast.success(this.message);
            // }
          })
          .catch((err) => {
            this.message = err.response?.data?.error;
          });
      }
    },
  },
};
</script>
<style scoped>
/* background section starts here */
.bg {
  background-image: url("../assets/images/ict-acr-images/auth-section/loginBackground.jpg");
  height: 100vh !important;
  width: 100% !important;
  position: absolute !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}
.ict-text {
  color: rgba(7, 167, 77, 1) !important;
  font-weight: 700;
}
.title {
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.logo-section {
  margin: 150px;
}

/* right section starts here */
.sign-in-title {
  font-weight: 400;
  font-size: 40px;
  color: #333339;
}
.sign-in-info {
  font-weight: 400;
  font-size: 18px;
  color: rgba(38, 50, 56, 0.6);
}
.submit-btn-color {
  background: #333339;
}
.form-section {
  height: 10px !important;
}
.custom-padding {
  padding-top: 50px;
}

/* media query section */
@media only screen and (max-width: 1600px) {
  .title {
    font-weight: 700;
    font-size: 45px;
    text-align: center;
  }
  .logo-section {
    margin: 30px;
  }
  .custom-padding {
    padding: 0;
  }
  .custom {
    margin-top: 80px !important;
  }
}
@media only screen and (max-width: 1500px) {
  .title {
    font-weight: 700;
    font-size: 45px;
    text-align: center;
  }
  .logo-section {
    margin: 30px;
  }
  .custom-padding {
    padding: 0;
  }
  .custom {
    margin-top: 0px !important;
  }
}
@media only screen and (max-width: 1024px) {
  .bg {
    background-image: url("../assets/images/ict-acr-images/auth-section/loginBackground.jpg");
    /* height: 800px !important; */
    width: 100% !important;
    position: absolute !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  .left {
    display: none !important;
  }
}
@media only screen and (max-width: 500px) {
  .bg {
    background-image: url("../assets/images/ict-acr-images/auth-section/loginBackground.jpg");
    /* height: 700px !important; */
    width: 100% !important;
    position: absolute !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  .left {
    display: none !important;
  }
}
</style>
