<template>
  <div class="row m-2">
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

      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <div class="row">
                <div class="px-4 mb-0">
                  <div class="row border rounded p-3">
                    <div class="col-2 text-start">
                      <img
                        v-if="form.profileImage !== null"
                        :src="
                          profileImage.type == 'profile'
                            ? profileImage.file
                            : form.profileImage &&
                              form.profileImage.includes(
                                'https://ui-avatars.com'
                              )
                            ? form.profileImage
                            : $store.state.appConfig.imageBaseUrl +
                              form.profileImage
                        "
                        alt="user-img i"
                        height="110"
                        width="100"
                        class="m-2 img-fluid border border-black rounded"
                      />
                      <img
                        v-else
                        src="../../../assets/images/ict-acr-images/avatar/avatar.png"
                        alt="upload-img"
                        height="92"
                        widht="100"
                      />
                    </div>
                    <div class="col-3 text-end py-1">
                      <div class="d-flex flex-row justify-content-between">
                        <p class="">নাম</p>
                        <p class="">:</p>
                      </div>
                      <div class="d-flex flex-row justify-content-between">
                        <p class="">পদবী</p>
                        <p class="">:</p>
                      </div>
                      <div class="d-flex flex-row justify-content-between">
                        <p class="">বিভাগ/ প্রকল্প</p>
                        <p>:</p>
                      </div>
                    </div>
                    <div class="col-4 text-start py-1">
                      <div class="">
                        <p class="">{{ form?.banglaName }}</p>
                      </div>
                      <div class="">
                        <p class="">{{ form?.designation }}</p>
                      </div>
                      <div class="">
                        <p class="">{{ selectedDepartment?.name_bn }}</p>
                      </div>
                    </div>
                    <div class="text-center col-2 py-1 button-section m-0 p-0">
                      <div class="row m-0 p-0">
                        <div class="col-12 col-md-6 m-0 p-0">
                          <b-link
                            :to="`/user-print-preview/${$route.params.id}`"
                            class="btn btn-sm border-black button-section"
                          >
                            <i class="fa fa-print text-black"></i>
                          </b-link>
                        </div>
                        <div class="mt-2 mt-md-0 col-12 col-md-6 m-0 p-0">
                          <b-link
                            :to="`/user-edit/${$route.params.id}`"
                            class="button-section btn btn-sm border-warning"
                          >
                            <i class="fa fa-edit text-warning"></i>
                          </b-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2">
        <div class="">
          <div class="">
            <div class="">
              <div class="row">
                <div class="mb-0">
                  <div class="row px-3 py-4">
                    <div
                      class="d-flex flex-row justify-content-between border rounded"
                    >
                      <div class="col-6 col-md-6 mt-4">
                        <div class="row">
                          <div class="col-12 col-md-12 text-start py-1">
                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">নাম (বাংলা)</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.banglaName }}</p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">পদবী</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.designation }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">ব্যাচ নাম্বার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.batchNo }}</p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">আইডি নাম্বার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.idNo }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">ক্যাডার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.cadre }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">সেকশন</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.section }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">মাতার নাম</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.motherName }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">জন্ম তারিখ</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ getHumanDate(form?.dateOfBirth) }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">বিভাগ/প্রকল্প</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ selectedDepartment?.name }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">সর্বোচ্চ শিক্ষাগত যোগ্যতা</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.highestEducationLevel }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">রক্তের গ্রুপ</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.bloodGroup }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">ব্যক্তিগত মেইল</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.personalMail }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">ব্যক্তিগত নাম্বার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.personalNumber }}</p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">অফিসিয়াল মেইল</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.officialMail }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-6 col-md-6 mt-4">
                        <div class="row">
                          <div class="col-12 col-md-12 text-start py-1">
                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">নাম (ইংরেজী)</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.englishName }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">গ্রেড</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.grade }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">শ্রেণী</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.class }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">এন আই ডি নাম্বার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.nid }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">কর্মরত অঞ্চল</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.workingArea }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">পিতার নাম</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">{{ form?.fatherName }}</p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">চাকরিতে যোগদানের তারিখ</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ getHumanDate(form?.dateOfJoin) }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">পিআরএল শুরুর তারিখ</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ getHumanDate(form?.prlStartDate) }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">বৈবাহিক অবস্থা</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.maritalStatus }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">লিঙ্গ</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.gender }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">টেলিফোন</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.telephone }}
                                </p>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-4 d-flex justify-content-between">
                                <p class="">অফিসিয়াল নাম্বার</p>
                                <p>:</p>
                              </div>

                              <div class="col-8">
                                <p class="">
                                  {{ form?.officialNumber }}
                                </p>
                              </div>
                            </div>
                            <div class="text-start m-md-5">
                              <div class="text-center px-5">
                                <p for="" class="m-0 p-0 print-font">
                                  ব্যাবহারকারীর স্বাক্ষর
                                </p>
                                <br />
                                <img
                                  v-if="form?.signatureImage !== null"
                                  :src="
                                    signatureImage.type == 'signature'
                                      ? signatureImage.file
                                      : form.signatureImage &&
                                        form.signatureImage.includes(
                                          'https://ui-avatars.com'
                                        )
                                      ? form.signatureImage
                                      : $store.state.appConfig.imageBaseUrl +
                                        form.signatureImage
                                  "
                                  height="40"
                                  width="80"
                                  alt="document"
                                  class="user-img mx-1"
                                />

                                <img
                                  v-else
                                  src="../../../assets/images/ict-acr-images/avatar/signature.png"
                                  alt="upload-img"
                                  height="92"
                                  widht="100"
                                />

                                <hr class="text-black mb-0" />

                                {{ form?.englishName }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  mounted() {
    // setTimeout(() => {
    //   window.print();
    // }, 5000);
  },
  data() {
    return {
      form: {},
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
      this.$store
        .dispatch("userStore/getUserById", this.$route.params.id)
        .then((response) => {
          this.form = response;
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
      this.selectedDepartment = this.departments.find(
        (e) => e.id == this.form.branch
      );
      // .then((res) => {
      //   this.departments = res.data;
      //   this.selectedDepartment = this.departments.find(
      //     (e) => e.id == this.form.branch
      //   );
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
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
