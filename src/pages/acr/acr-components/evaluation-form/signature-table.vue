<template>
  <div class="mx-4 rounded table-responsive">
    <h3 class="mt-3">২য় খণ্ড প্রতিবেদনকারী অফিসার</h3>
    <table class="table border">
      <thead>
        <tr>
          <!-- <th class="border"></th> -->
          <th class="border"></th>
          <th class="text-center border">মূল্যায়ন</th>
          <th class="text-center border">মন্তব্য</th>
          <th class="text-center border">স্বাক্ষর</th>
        </tr>
      </thead>
      <tbody v-for="(assesment, index) in mcqForm.assesmentForm" :key="index">
        <tr class="">
          <!-- v-if="assesment.questionTitle !== ''" -->
          <td class="border">
            <span>
              {{
                assesment.questionTitle
                  ? (index - 1).toLocaleString("bn-BD") + "। "
                  : assesment.questionTitle == ""
                  ? (index - 1).toLocaleString("bn-BD") + "। "
                  : ""
              }}

              <span
                v-html="
                  assesment.questionTitle
                    ? assesment.questionTitle
                    : questions[index]
                "
              >
              </span>
            </span>
          </td>
          <td class="text-center border">
            <div v-if="assesment.value == 1">
              <p>অত্যুত্তম</p>
            </div>
            <div v-if="assesment.value == 2">
              <p>উত্তম</p>
            </div>
            <div v-if="assesment.value == 3">
              <p>চলতি মান</p>
            </div>
            <div v-if="assesment.value == 4">
              <p>চলতি মানের নিম্নে</p>
            </div>
            <div v-if="assesment.value == 5">
              <p>নিকৃষ্ট</p>
            </div>
          </td>
          <td class="text-center border">
            {{ assesment.comment }}
          </td>
          <td class="text-center border">
            <img
              v-if="user && user.signatureImage && assesment.value"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p v-if="user && !user.signatureImage && assesment.value">
              &check;
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
    },
    mcqForm: {
      type: Object,
      default: () => ({}),
    },
    iro: {
      type: Object,
      default: () => ({}),
    },
    cro: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      questions: [
        "১| বুদ্ধিমত্তা ও মানসিক তৎপরতা ",
        "২| পেশাগত জ্ঞান  ",
        "৩| প্রকাশ ক্ষমতা  <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ক) লিখন ",
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(খ) বচন",

        "৪| উদ্যোগ",
        "৫| কাজের মান ও পরিমান",
        "৬| সহযোগিতা ও বিচক্ষনতা ",
        "৭| আগ্রহ ও পরিশ্রম ",
        "৮| অধীনস্থদিগকে পরিচালনা ও প্রশিক্ষণ দানের ক্ষমতা",
        "৯| সততা<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ক) সাধারণ",
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(খ) আর্থিক বিষয়ে",
        "১০| সততা ও  সুনাম ",
        "১১|ব্যক্তিত্ব ও চরিত্রবল",

        "১২| স্বাস্থ্য  ",
        "১৩| সময়ানুবর্তিতা   ",
        "১৪| শৃঙ্খলাবোধ  ",
        "১৫| শৃঙ্খলাবোধ  বাংলা ভাষা ব্যবহারে  আগ্রহ ও দক্ষতা ",
      ],
      form: {},
      users: [],
      user: [],
      demoImage:
        "https://industrial.uii.ac.id/wp-content/uploads/2019/09/385-3856300_no-avatar-png.jpg",
    };
  },
  created() {
    this.getNonGazzetedACRByID();

    this.getNonGazzetedACRAssesment();
  },
  methods: {
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.form = res;
          this.viewUserList(this.form.iro);
        })
        .catch((err) => {
          console.log(err, "errorrr");
        });
    },
    viewUserList(user_id) {
      this.$store
        .dispatch("userStore/getUserById", user_id)
        .then((res) => {
          this.user = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNonGazzetedACRAssesment() {
      this.$store
        .dispatch("acrStore/getNonGazzetedACRAssesment", this.$route.params.id)
        .then((res) => {
          if (res.length > 0) {
            this.nullChecker = res;
            this.mcqForm.assesmentForm = res;
          }
        })
        .catch((err) => {});
    },
    nextStep() {
      this.$emit("next");
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
.next {
  background-color: #2f3349;
  color: white;
}
.prev {
  background-color: #f54b4b1a;
  border: 2px solid #f54b4b;
  color: #f54b4b;
}
</style>
