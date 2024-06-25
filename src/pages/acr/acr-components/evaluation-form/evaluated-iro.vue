<template>
  <b-row class="pt-3 px-4">
    <b-col cols="12" class="p-2 bg-white rounded">
      <h3 class="text-black">৩য় খণ্ড (অনুস্বাক্ষরকারী অফিসার)</h3>
      <hr />
      <div class="d-flex flex-row mt-2 mb-2 p-0">
        <b>ই</b>

        <b class="ms-1">সামগ্রিক মূল্যায়ন ও পদোন্নতির যােগ্যতা</b>
      </div>

      <table class="table table-border">
        <tbody>
          <tr>
            <td class="border">
              <p>
                সমশ্রেণীর অন্যান্য অফিসারের সঙ্গে তুলনাক্রমে নিন্মের সঠিক কলামে
                <br />
                অনুসাক্ষর করিয়া এই অফিসার সম্পর্কে আপনার সাধারণ মূল্যায়ন
                লিপিবদ্ধ করুণঃ-
              </p>
            </td>
            <td class="border">
              <p class="m-0 p-0">
                <span v-if="form.evaluation_value === 1" class="mx-1"
                  >অতি উত্তম</span
                >

                <span v-if="form.evaluation_value === 2" class="mx-1"
                  >উত্তম</span
                >

                <span v-if="form.evaluation_value === 3" class="mx-1"
                  >চলতি মান</span
                >

                <span v-if="form.evaluation_value === 4" class="mx-1">
                  চলতি মানের নিম্নে</span
                >

                <span v-if="form.evaluation_value === 5" class="mx-1">
                  সন্তোষজনক নহেন ।</span
                >
              </p>
            </td>
            <td class="border">
              {{ getHumanDate(form.cro_date) }}
            </td>
            <td class="border">
              <img
                :src="
                  user.signatureImage
                    ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                    : demoImage
                "
                height="30"
                widht="50"
                alt="userImage"
                class="signature"
              />
            </td>
          </tr>
          <tr>
            <td class="border">নিম্নের সঠিক সিদ্ধান্ত নির্বাচন করুন</td>
            <td class="border">
              <p class="m-0 p-0">
                <span v-if="form.decision === 1" class="mx-1"
                  >দ্রুত পদোন্নতির যােগ্য</span
                >

                <span v-if="form.decision === 2" class="mx-1">
                  পদোন্নতির যােগ্য</span
                >

                <span v-if="form.decision === 3" class="mx-1">
                  সম্প্রতি পদোন্নতি প্রাপ্ত</span
                >

                <span v-if="form.decision === 4" class="mx-1">
                  এখনো পদোন্নতির যোগ্য নহেন ।</span
                >
              </p>
            </td>
            <td class="border">
              {{ getHumanDate(form.cro_date) }}
            </td>
            <td class="border">
              <img
                :src="
                  user.signatureImage
                    ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                    : demoImage
                "
                height="30"
                widht="50"
                alt="userImage"
                class="signature"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
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
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
