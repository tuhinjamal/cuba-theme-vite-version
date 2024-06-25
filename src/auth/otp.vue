<template>
  <div class="bg">
    <b-row
      class="d-flex flex-column flex-lg-row align-items-center justify-content-center py-3 py-md-5 custom"
    >
      <b-col class="left">
        <b-row class="logo-section rounded">
          <b-col cols="12" class="text-center">
            <!-- <img
              src="../assets/images/ict-acr-images/auth-section/IctDivisionLogo.png"
              alt="ICT Logo"
              class="img-fluid"
            /> -->
            <logo-svg />

            <!-- <img
              src="../assets/images/ict-acr-images/auth-section/BCC_AUTH_LOGO.png"
              alt="ICT Logo"
              class="img-fluid"
            /> -->
          </b-col>
          <b-col cols="12" class="text-white text-center d-none d-lg-block">
            <h3 class="mt-2">Welcome To</h3>
            <h2 class="title mt-1">
              Annual Confidential Report (ACR) Application System
            </h2>
            <h1 class="ict-text">বাংলাদেশ কম্পিউটার কাউন্সিল (বিসিসি)</h1>
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
              <p class="sign-in-title mt-5">ও টি পি</p>
            </b-col>
            <b-col cols="12" class="text-start px-4">
              <b-form>
                <b-form-group
                  id="otp"
                  label="মোবাইল অথবা ইমেইলে আসা ওটিপি প্রদান করুন"
                  label-for="otp"
                >
                  <b-form-input
                    id="otp"
                    v-model="user.otp"
                    type="otp"
                    placeholder=" ex:-0000"
                    required
                  >
                  </b-form-input>
                  <p
                    v-if="message !== ''"
                    class="validate-error text-danger pb-2"
                  >
                    {{ message }}
                  </p>
                </b-form-group>
                <b-form-group class="text-center custom-padding">
                  <b-button
                    @click.prevent="login"
                    type="submit"
                    class="btn btn-lg submit-btn-color w-md-50"
                  >
                    নিশ্চিত করুন
                  </b-button>
                </b-form-group>
              </b-form>
              <b-col v-if="countdown !== 0" cols="12" class="text-center">
                <p v-if="countdown !== 0" class="text-danger m-0 p-0">
                  <span class="countdown">{{ countdown }} </span> সেকেন্ডের
                  মধ্যে আপনার মোবাইলে অথবা ইমেইলে ও টি পি পৌঁছে যাবে
                </p>
              </b-col>
              <b-col v-if="countdown == 0" cols="12" class="text-center">
                <b-link @click="resendOTP">পুনরায় ওটিপি পাঠান</b-link>
              </b-col>
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
import { getLogedInUser, setLogedInUserInfo, setUserRole } from "../utils/auth";
import { useToast } from "vue-toastification";
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
      result: { otp: "" },
      user: {
        user_id: "",
        otp: "",
      },
      message: "",
      logedInUser: JSON.parse(getLogedInUser()),
      toast: useToast(),

      countdown: 120,
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
  created() {
    window.setInterval(() => {
      if (this.countdown !== 0) {
        this.countdown--;
      }
    }, 1000);
  },
  methods: {
    async login() {
      this.user.user_id = this.logedInUser.user_id;
      if (this.user.otp.length > 0) {
        try {
          const resO = await this.$store.dispatch("auth/verifyOTP", this.user);

          if (resO.status == 200) {
            await this.getUser();
          }
          if (resO.data.token == "User not found") {
            this.$router.push("/auth/login");
          } else {
            this.toast.success("welcome ");
            // socket notification
            // this.$socket.emit(
            //   "user-connected",
            //   this.logedInUser.user_id,
            //   this.$socket_id,
            //   (data) => {
            //     setNotification(JSON.stringify(data));
            //   }
            // );
            this.$router.push("/");
          }

          if (resO.response.status == 404) {
            this.message = "invalid otp ";
          }
        } catch (error) {
          console.log(error);
          if (error?.response?.status == 404) {
            this.message = "invalid otp ";
          }
        }
      }
    },
    async resendOTP() {
      this.user.user_id = this.logedInUser.user_id;
      let form = {
        user_id: this.logedInUser.user_id,
        email: true,
      };
      try {
        const res = await this.$store.dispatch("auth/login", form);
        if (res.status === 200) {
          localStorage.setItem(
            "User",
            JSON.stringify({
              user_id: this.form.user_id,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
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
<style scoped>
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
.countdown {
  font-size: 20px !important;
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
    width: 100% !important;
    position: absolute !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  .left {
    display: none !important;
  }
  .custom {
    margin-top: 0px !important;
  }
}
</style>
