<template>
  <div class="row m-2">
    <div class="button-section">
      <b-link to="/" class="button-section btn btn-sm btn-outline-dark mb-2">
        Back</b-link
      >
    </div>
    <div class="bg-white p-5 my-3">
      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <div class="row">
                <div class="d-flex flex-row justify-content-between">
                  <div class="col-6">
                    <h1 class="text-success">
                      <b
                        >বাংলাদেশ কম্পিউটার <br />
                        কাউন্সিল (বি সি সি )</b
                      >
                    </h1>
                    <h3 class="">
                      <b>কর্মকর্তা কর্মচারী বিস্তারিত</b>
                    </h3>
                  </div>
                  <div class="col-6 text-end">
                    <img
                      src="@/assets/images/ict-acr-images/loader/loader.png"
                      alt="BCC"
                      height="100"
                    />
                  </div>
                </div>
                <div class="">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <b-table :items="userList" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  mounted() {
    setTimeout(() => {
      window.print();
    }, 5000);
  },
  data() {
    return {
      userList: [],
      fields: [
        "banglaName",
        "englishName",
        "designation",
        "personalNumber",
        "personalMail",
      ],
      text: "",
      image: null,
      images: [],
      userImage: {
        idNo: null,
        profile: "",
        signature: "",
      },
      profileImage: {
        type: "",
        file: "",
      },
      signatureImage: {
        type: "",
        file: "",
      },
      selectedSection: [],
      sections: [],
      departments: [],
      selectedDepartment: [],
      designations: [],
      selectedDesignation: [],
      selectedGrade: [],
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$store.dispatch("userStore/viewUsers").then((response) => {
        this.userList = response.data;
        setTimeout(() => {
          this.getSections();
          this.getDepartments();
          this.getDesignations();
        }, 2000);
        // this.selectedGrade = this.grades.find((e) => e.id == this.form.grade);
      });
    },
    getSections() {
      this.$store
        .dispatch("section/getSection")
        .then((res) => {
          this.sections = res.data;
          this.selectedSection = this.sections.find(
            (e) => e.id == this.form.section
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getDepartments() {
      const res = await this.$store.dispatch("department/getDepartment");
      this.departments = res.data;
      this.userList.forEach((e) => {
        e.department_name = this.departments.find((element) =>
          element.id == e.branch ? element.name : "N/A"
        );
      });
    },
    getDesignations() {
      this.$store
        .dispatch("designation/getDesignation")
        .then((res) => {
          this.designations = res.data;
          this.selectedDesignation = this.designations.find(
            (e) => e.id == this.form.designation
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    print() {
      setTimeout(() => {
        window.print();
      }, 3000);
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
<style scoped>
.print-font {
  font-size: 15px !important;
}
.btn-print {
  border: 2px solid #2f3349 !important;
  color: #2f3349 !important;
  font-size: 15px !important;
}
.btn-edit {
  border: 2px solid #eeac49 !important;

  font-size: 15px !important;
}
</style>
