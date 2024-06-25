<template>
  <div>
    <b-row class="alignment">
      <b-col
        cols="12"
        class="d-flex flex-column flex-md-row justify-content-center border rounded m-0 p-0 mt-5 card"
      >
        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 1, 'step-done': step > 1 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>১ম খন্ড</h5>
              </div>
              <div v-if="step > 1" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>ব্যক্তিগত তথ্য</p>
            <p>(আবেদনকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex align-items-center m-0 p-0">
          <div
            class="d-block line"
            :class="{ 'step-active': step === 2, 'step-done': step > 1 }"
          ></div>
        </b-row>

        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>২য় খন্ড</h5>
              </div>
              <div v-if="step > 2" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>অনুস্বাক্ষরকারীর প্রতিবেদন</p>
            <p>(অনুস্বাক্ষরকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex align-items-center m-0 p-0">
          <div
            class="d-block line"
            :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
          ></div>
        </b-row>

        <b-row
          class="mx-2 my-2 my-lg-2 mx-lg-0 rounded step"
          :class="{ 'step-active': step === 3, 'step-done': step > 3 }"
        >
          <b-col cols="12" class="text-start py-1">
            <div class="row mt-2">
              <div class="col-8">
                <h5>৩য় খন্ড</h5>
              </div>
              <div v-if="step > 3" class="col-4 text-end">
                <img
                  src="../../../assets/images/ict-acr-images/acr-section/step-done-badge.png"
                  alt="badge"
                  class="ml-auto"
                />
              </div>
            </div>
            <p>পদোন্নতির যোগ্যতা</p>
            <p>(অনুস্বাক্ষরকারী কর্তৃক পুরনীয়)</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="m-0 p-0">
      <b-col cols="12" class="m-0 p-0">
        <form-one @next="next" :step="step" class="m-0 p-0" v-if="step === 1" />
        <form-two
          class="m-0 p-0"
          @prev="prev"
          @next="next"
          :step="step"
          :mcqForm="mcqForm"
          v-if="step === 2"
        />
        <signature-table
          class="m-0 p-0"
          @prev="prev"
          @next="next"
          :mcqForm="mcqForm"
          :step="step"
          v-if="step === 3"
        />
        <form-three
          @prev="prev"
          @next="next"
          :iroData="iroData"
          :step="step"
          class="m-0 p-0"
          v-show="step === 3"
        />
        <b-row v-if="step == 3">
          <b-col cols="12" class="text-center py-4">
            <button :disabled="step === 1" class="mx-1 btn prev" @click="prev">
              এডিট করুন
            </button>

            <!-- <button data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
              <i class="icon-eye"> </i>
            </button>
             -->
            <button
              v-if="updateBtn == null"
              :disabled="step === 5"
              class="mx-1 btn next"
              @click="showAlert()"
            >
              অনুমোদন করুন
            </button>
            <button
              v-if="updateBtn !== null"
              :disabled="step === 5"
              class="mx-1 btn next"
              @click="updateNonGazzetedCROEvaluation()"
            >
              update
            </button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import formOne from "./evaluation-form/form-part-one.vue";
import formTwo from "./evaluation-form/form-part-two.vue";
import formThree from "./evaluation-form/form-part-three.vue";
import formFour from "./evaluation-form/form-part-four.vue";
import signatureTable from "./evaluation-form/signature-table.vue";
export default {
  components: {
    formOne,
    formTwo,
    formThree,
    formFour,
    signatureTable,
  },
  data() {
    return {
      text: "",
      selected: "A",
      form: {
        formA: { name: "" },
        formB: { address: "" },
        formC: { phone: "" },
      },
      steps: {},
      step: 1,
      hasSeenCongrats: false,
      mcqForm: {
        id: this.$route.params.id,
        blockSubmit: false,
        assesmentForm: [
          {
            questionId: "1",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "2",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "3",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "4",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "5",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "6",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "7",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "8",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "9",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "10",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "11",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "12",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "13",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "14",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "15",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "16",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "17",
            value: null,
            comment: "",
            questionTitle: null,
            valdiationMsg: null,
          },
          {
            questionId: "18",
            value: null,
            comment: "",
            questionTitle: "",
            valdiationMsg: "",
          },
          {
            questionId: "19",
            value: null,
            comment: "",
            questionTitle: "",
            valdiationMsg: "",
          },
          {
            questionId: "20",
            value: null,
            comment: "",
            questionTitle: "",
            valdiationMsg: "",
          },
          {
            questionId: "21",
            value: null,
            comment: "",
            questionTitle: "",
            valdiationMsg: "",
          },
          // {
          //   questionId: "22",
          //   value: null,
          //   comment: "",
          //   questionTitle: "",
          //   valdiationMsg: "",
          // },
        ],
      },
      iroData: {
        id: this.$route.params.id,
        user_id: null,
        evaluation_value: "",
        decision: "",
        cro: "",
        cro_date: "",
      },
      data: [],
      userID: null,
      users: [],
      user: [],
      updateBtn: {},
    };
  },
  created() {
    this.getNonGazzetedACRByID();
    this.getIroByID();
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },

    createNonGazzetedCROEvaluation() {
      this.iroData.cro = this.user.idNo;
      this.iroData.user_id = this.form.user_id;

      this.$store
        .dispatch("acrStore/createNonGazzetedIROEvaluation", this.iroData)
        .then((res) => {
          if (res.status == 200) {
            this.$swal.fire(
              "স্বাগতম !",
              "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি  সফলভাবে সাবমিট করা হয়েছে !",
              "success"
            );
            setTimeout(() => {
              this.$router.push("/");
            }, 2000);
          }
          this.acr = res;
        })
        .catch((err) => {});
    },
    updateNonGazzetedCROEvaluation() {
      this.iroData.cro = this.user.idNo;
      this.iroData.user_id = this.form.user_id;
      // Use sweetalert2
      this.$swal
        .fire({
          title: "স্বাগতম !",
          text: "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি কি সাবমিট করতে চান ? ",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "সাবমিট",
          cancelButtonText: "বাতিল  ",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store
              .dispatch("acrStore/updateNonGazzetedIROEvaluation", this.iroData)
              .then((res) => {
                this.acr = res;
                console.log("check res status", res);
                this.CROCancel();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    },
    CROCancel() {
      let form = {
        id: this.$route.params.id,
        status: "cro",
      };

      let change = this.$store.dispatch("acrStore/getCroReturnByID", form);
      this.$router.push("/");
    },
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "স্বাগতম !",
          text: "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি কি সাবমিট করতে চান ? ",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "সাবমিট",
          cancelButtonText: "বাতিল  ",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.createNonGazzetedCROEvaluation();
            // this.$swal.fire(
            //   "স্বাগতম !",
            //   "আপনার প্রতিস্বাক্ষরিত গোপন প্রতিবেদনটি কি সাবমিট করতে চান ? ",
            //   "success"
            // );
          }
        });
    },
    getNonGazzetedACRByID() {
      this.$store
        .dispatch("acrStore/getNonGazzetedAcrByID", this.$route.params.id)
        .then((res) => {
          this.userID = res.userIdNo;
          this.form.cro = res.iro;
          this.form.user_id = res.userIdNo;
          if (this.form.user_id) {
            this.viewUserList();
          }
        })
        .catch((err) => {});
    },
    viewUserList() {
      this.$store
        .dispatch("userStore/viewUsers")
        .then((res) => {
          this.users = res.data;

          this.user = this.users.find((e) => e.idNo == this.form.cro);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getIroByID() {
      let resIRO = await this.$store.dispatch(
        "acrStore/getIroForUpdate",
        this.$route.params.id
      );
      this.updateBtn = resIRO;
      if (resIRO !== null && resIRO.evaluation_value !== null) {
        this.iroData = resIRO;
      }
    },
  },
};
</script>

<style scoped>
.alignment {
  margin-left: 20px !important;
  margin-right: 20px !important;
}
.line {
  width: 120px;
  height: 2px;
  background-color: #2f334933;
}
.prev {
  background-color: #f54b4b1a;
  border: 2px solid #f54b4b;
  color: #f54b4b;
}
.next {
  background-color: #2f3349;
  color: white;
}
.step {
  border: 2px solid gray;
}

.step-active {
  background-color: #2f3349;
  color: white;
}
.step-done {
  border: 2px solid green;
  color: green;
}
</style>
