<template>
  <table id="print-table" class="table table-sm border border-muted page-break">
    <thead>
      <tr>
        <th
          class="m-0 p-0 text-center border-muted border-top border-bottom border-start extra"
        ></th>
        <th
          class="m-0 p-0 text-center border-muted border-top border-bottom border-end question-title"
        ></th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 fixed-size"
        >
          ক১
        </th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 fixed-size"
        >
          ক
        </th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 fixed-size"
        >
          খ
        </th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 fixed-size"
        >
          গ
        </th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 fixed-size"
        >
          ঘ
        </th>
        <th
          class="text-center border-muted border-top border-bottom border-end border-start m-0 p-0 comment"
        >
          মন্তব্য
        </th>
      </tr>
    </thead>
    <tbody v-for="(assesment, index) in items" :key="index">
      <tr class="m-0 p-0 row-height" v-if="assesment.questionTitle !== ''">
        <td scope="row" class="border-top-0 border-bottom-0 m-0 p-0">
          <span v-if="index + 1 == 1">আ </span>
        </td>
        <td class="border border-muted m-0 p-0">
          <p class="m-0 p-0">
            {{
              assesment.questionTitle ? index.toLocaleString("bn-BD") + "|" : ""
            }}
            <span
              v-html="
                assesment.questionTitle
                  ? assesment.questionTitle
                  : questions[index]
              "
            >
            </span>
          </p>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          <div v-if="assesment.value == 1">
            <img
              v-if="user && user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p class="m-0 p-0 h-25" v-else-if="user && !user.signatureImage">
              &check;
            </p>
          </div>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          <div v-if="assesment.value == 2">
            <img
              v-if="user && user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p class="m-0 p-0 h-25" v-else-if="user && !user.signatureImage">
              &check;
            </p>
          </div>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          <div v-if="assesment.value == 3">
            <img
              v-if="user && user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p class="m-0 p-0 h-25" v-else-if="user && !user.signatureImage">
              &check;
            </p>
          </div>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          <div v-if="assesment.value == 4">
            <img
              v-if="user && user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p class="m-0 p-0 h-25" v-else-if="user && !user.signatureImage">
              &check;
            </p>
          </div>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          <div v-if="assesment.value == 5">
            <img
              v-if="user && user.signatureImage"
              :src="
                user.signatureImage
                  ? $store.state.appConfig.imageBaseUrl + user.signatureImage
                  : demoImage
              "
              alt="userImage"
              class="signature"
            />
            <p class="m-0 p-0 h-25" v-else-if="user && !user.signatureImage">
              &check;
            </p>
          </div>
        </td>
        <td
          class="text-center text-center border-muted border-top border-bottom border-end border-start m-0 p-0"
        >
          {{ assesment.comment }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "",
        },
        {
          key: "a",
          label: "ক১ ",
        },
        {
          key: "b",
          label: "ক ",
        },
        {
          key: "c",
          label: "খ ",
        },
        {
          key: "d",
          label: "গ ",
        },
        {
          key: "e",
          label: "ঘ",
        },
        {
          key: "comment",
          label: "মন্তব্য",
        },
      ],
      questions: [
        "১| বুদ্ধিমত্তা ও মানসিক তৎপরতা ",
        "২| পেশাগত জ্ঞান  ",
        "৩| প্রকাশ ক্ষমতা  &nbsp; &nbsp;&nbsp;(ক) লিখন ",
        " &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;(খ) বচন",

        "৪| উদ্যোগ",
        "৫| কাজের মান ও পরিমান",
        "৬| সহযোগিতা ও বিচক্ষনতা ",
        "৭| আগ্রহ ও পরিশ্রম ",
        "৮| অধীনস্থদিগকে পরিচালনা ও প্রশিক্ষণ দানের ক্ষমতা",
        "৯| সততা&nbsp; &nbsp;(ক) সাধারণ",
        "&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;(খ) আর্থিক বিষয়ে",
        "১০| সততা ও  সুনাম ",
        "১১|ব্যক্তিত্ব ও চরিত্রবল",

        "১২| স্বাস্থ্য  ",
        "১৩| সময়ানুবর্তিতা   ",
        "১৪| শৃঙ্খলাবোধ ",
        "১৫| বাংলা ভাষা ব্যবহারে আগ্রহ ও দক্ষতা ",
      ],
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
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.signature {
  /* width: 50px; */
  height: 25px !important;
  margin: 0;
  padding: 0;
}
</style>
