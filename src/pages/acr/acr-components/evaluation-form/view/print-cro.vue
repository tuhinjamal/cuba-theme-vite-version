<template>
  <div class="mx-2">
    <b-row v-if="$route.name == 'print-non-gazzeted-acr'" class="m-0 p-0">
      <b-col cols="12" class="m-0 p-0">
        <div class="d-flex flex-row m-0 p-0">
          <b>ঈ </b>

          <b class="ms-1 m-0 p-0">প্রতিস্বাক্ষরকারী অফিসারের মন্তব্য </b>
        </div>
        <div class="d-flex flex row ms-3 m-0 p-0">
          <p class="m-0 p-0">
            আমি মনে করি যে , প্রতিবেদনকারী অফিসারের মূল্যায়ন :
            <span v-if="form.evaluation && form.evaluation === 1" class="mx-1">
              অত্যুত্তম
            </span>
            <s v-if="form.evaluation && form.evaluation !== 1" class="mx-1">
              অত্যুত্তম
            </s>
            <span v-if="form.evaluation && form.evaluation === 2" class="mx-1"
              >/ যুক্তি সঙ্গতভাবে উত্তম</span
            >
            <s v-if="form.evaluation && form.evaluation !== 2" class="mx-1"
              >/ যুক্তি সঙ্গতভাবে উত্তম</s
            >
            <span v-if="form.evaluation && form.evaluation === 3" class="mx-1"
              >/ কঠোর /</span
            >
            <s v-if="form.evaluation && form.evaluation !== 3" class="mx-1"
              >/ কঠোর /</s
            >
            <span v-if="form.evaluation && form.evaluation === 4" class="mx-1"
              >/ নমনীয়
            </span>
            <s v-if="form.evaluation && form.evaluation !== 4" class="mx-1"
              >/ নমনীয়
            </s>
            <span v-if="form.evaluation && form.evaluation === 5" class="mx-1"
              >/ পক্ষপাতদুষ্ট ।
            </span>
            <s v-if="form.evaluation && form.evaluation !== 5" class="mx-1"
              >/ পক্ষপাতদুষ্ট ।
            </s>
            অধিকন্তু নিম্নে আমার মন্তব্য যােগ করিতেছি : {{ form.comment }}
          </p>
        </div>
        <div class="row m-0 p-0">
          <div class="col-8 m-0 p-0"></div>
          <div class="col-4 text-center m-0 p-0">
            <img
              v-if="user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              height="50"
              widht="50"
              alt="userImage"
              class="signature m-0 p-0"
            />
          </div>
        </div>
        <div class="row m-0 p-0">
          <div class="col-8 text-start m-0 p-0">
            তারিখঃ {{ getHumanDate(form.cro_date) }}
          </div>

          <div class="col-4 text-center m-0 p-0">
            <p class="mt-1 m-0 p-0">
              <b>প্রতিস্বাক্ষরকারী অফিসারের স্বাক্ষর।</b>
            </p>
            <p class="m-0 p-0">{{ user.banglaName }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="$route.name == 'detail-non-gazzeted-acr'" class="m-0 p-0">
      <b-col cols="12">
        <div class="d-flex flex-row m-0 p-0">
          <h3 class="">প্রতিস্বাক্ষরকারী অফিসারের মন্তব্য</h3>
        </div>
        <b-col cols="12" class="">
          <table class="table table-border">
            <tbody>
              <tr>
                <td class="border">
                  আমি মনে করি যে , রিপোর্ট প্রদানকারী কর্মকর্তার মূল্যায়ন
                </td>
                <td class="border">
                  <span v-if="form.evaluation == 1" class="mx-1">
                    অত্যুত্তম
                  </span>
                  <span v-if="form.evaluation == 2" class="mx-1">
                    যুক্তি সঙ্গতভাবে উত্তম</span
                  >
                  <span v-if="form.evaluation == 3" class="mx-1"> কঠোর </span>
                  <span v-if="form.evaluation == 4" class="mx-1"> নমনীয় </span>
                  <span v-if="form.evaluation == 5" class="mx-1"
                    >পক্ষপাতদুষ্ট ।
                  </span>
                </td>
                <td class="border">{{ getHumanDate(form.cro_date) }}</td>
                <td class="border">
                  <img
                    :src="
                      user.signatureImage
                        ? $store.state.appConfig.imageBaseUrl +
                          user.signatureImage
                        : demoImage
                    "
                    height="50"
                    widht="50"
                    alt="userImage"
                    class="signature m-0 p-0"
                  />
                </td>
              </tr>
              <tr>
                <td class="border">
                  অধিকন্তু নিম্নে আমার মন্তব্য যােগ করিতেছিঃ
                </td>
                <td class="border">{{ form.comment }}</td>
                <td class="border">{{ getHumanDate(form.cro_date) }}</td>
                <td class="border">
                  <img
                    :src="
                      user.signatureImage
                        ? $store.state.appConfig.imageBaseUrl +
                          user.signatureImage
                        : demoImage
                    "
                    height="50"
                    widht="50"
                    alt="userImage"
                    class="signature m-0 p-0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {},
      users: [],
      user: [],

      demoImage:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png.jpg",
    };
  },
  created() {
    this.getNonGazzetedIROEvaluation();
  },
  methods: {
    getNonGazzetedIROEvaluation() {
      setTimeout(() => {
        this.$store
          .dispatch(
            "acrStore/getNonGazzetedCROEvaluationByID",
            this.$route.params.id
          )
          .then((res) => {
            this.form = res;
            this.viewUserList();
          })
          .catch((err) => {});
      }, 1000);
    },
    viewUserList() {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.users = res.data;

          setTimeout(() => {
            this.user = this.users.find((e) => e.idNo == this.form.cro);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").locale("bn-BD").format("DD/MM/YYYY");
    },
  },
};
</script>
<style scoped>
.signature {
  width: 40px;
  height: 30px !important;
  margin: 0;
  padding: 0;
}
</style>
