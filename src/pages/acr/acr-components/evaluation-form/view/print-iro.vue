<template>
  <div>
    <b-row v-if="$route.name == 'print-non-gazzeted-acr'" class="m-0 p-0">
      <b-col cols="12">
        <div class="d-flex flex-row m-0 p-0 mt-3">
          <b>ই</b>

          <b class="ms-1">সামগ্রিক মূল্যায়ন ও পদোন্নতির যােগ্যতা</b>
        </div>
        <p class="ms-2 m-0 p-0">(একটি বাদে অন্য গুলি কাটিয়া দিন)</p>
        <div class="d-flex flex row ms-3 m-0 p-0">
          <p class="m-0 p-0">
            ১।
            <span v-if="form.evaluation_value === 1" class="mx-1"
              >অতি উত্তম</span
            >
            <s v-if="form.evaluation_value !== 1" class="mx-1">অতি উত্তম</s>
            <span v-if="form.evaluation_value === 2" class="mx-1">/ উত্তম</span>
            <s v-if="form.evaluation_value !== 2" class="mx-1">/ উত্তম</s>
            <span v-if="form.evaluation_value === 3" class="mx-1"
              >/ চলতি মান</span
            >
            <s v-if="form.evaluation_value !== 3" class="mx-1">/ চলতি মান</s>
            <span v-if="form.evaluation_value === 4" class="mx-1"
              >/ চলতি মানের নিম্নে</span
            >
            <s v-if="form.evaluation_value !== 4" class="mx-1"
              >/ চলতি মানের নিম্নে</s
            >
            <span v-if="form.evaluation_value === 5" class="mx-1"
              >/ সন্তোষজনক নহেন ।</span
            >
            <s v-if="form.evaluation_value !== 5" class="mx-1"
              >/ সন্তোষজনক নহেন ।</s
            >
          </p>
          <p class="m-0 p-0">
            ২।
            <span v-if="form.decision === 1" class="mx-1"
              >দ্রুত পদোন্নতির যােগ্য</span
            >
            <s v-if="form.decision !== 1" class="mx-1"
              >দ্রুত পদোন্নতির যােগ্য</s
            >
            <span v-if="form.decision === 2" class="mx-1"
              >/ পদোন্নতির যােগ্য</span
            >
            <s v-if="form.decision !== 2" class="mx-1">/ পদোন্নতির যােগ্য</s>
            <span v-if="form.decision === 3" class="mx-1"
              >/ সম্প্রতি পদোন্নতি প্রাপ্ত</span
            >
            <s v-if="form.decision !== 3" class="mx-1"
              >/ সম্প্রতি পদোন্নতি প্রাপ্ত</s
            >
            <span v-if="form.decision === 4" class="mx-1"
              >/ এখনো পদোন্নতির যোগ্য নহেন ।</span
            >
            <s v-if="form.decision !== 4" class="mx-1"
              >/ এখনো পদোন্নতির যোগ্য নহেন ।</s
            >
          </p>
        </div>
      </b-col>
      <b-col class="text-end m-0 p-0" cols="12">
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
              height="30"
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
            <p class="mt-1 m-0 p-0"><b>প্রতিবেদনকারী অফিসারের স্বাক্ষর।</b></p>
            <p class="m-0 p-0">{{ user.banglaName }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="$route.name == 'detail-non-gazzeted-acr'" class="m-0 p-0">
      <h3 class="text-black">৩য় খণ্ড (অনুস্বাক্ষরকারী অফিসার)</h3>
      <b-col cols="12" class="">
        <table class="table table-border">
          <tbody>
            <tr>
              <td class="border">সামগ্রিক মূল্যায়ন ও পদোন্নতির যােগ্যতা</td>
              <td class="border">
                <span v-if="form.evaluation_value == 1" class="mx-1">
                  অত্যুত্তম
                </span>
                <span v-if="form.evaluation_value == 2" class="mx-1">
                  যুক্তি সঙ্গতভাবে উত্তম</span
                >
                <span v-if="form.evaluation_value == 3" class="mx-1">
                  কঠোর
                </span>
                <span v-if="form.evaluation_value == 4" class="mx-1">
                  নমনীয়
                </span>
                <span v-if="form.evaluation_value == 5" class="mx-1"
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
          </tbody>
        </table>
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
            "acrStore/getNonGazzetedIROEvaluationByID",
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
  width: 80px;
  height: 30px !important;
  margin: 0;
  padding: 0;
}
</style>
