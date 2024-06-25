import moment from "moment";
export default {
  data() {
    return {
      errors: [],
      formSubmitted: false,
      banglaNameError: false,
      englishNameError: false,
      selectedGradeError: false,
      idNoError: false,
      nidError: false,
      dateOfJoinError: false,
      dateOfBirthError: false,
      prlStartDateError: false,
      selectedDepartmentError: false,
      maritalStatusError: false,
      highestEducationLevelError: false,
      genderError: false,
      bloodGroupError: false,
      personalMailError: false,
      officialMailError: false,
      personalNumberError: false,
      officialNumberError: false,
      statusError: false,
      selectedDesignationError: false,
    };
  },
  methods: {
    ageRestriction(age) {
      if (age == true) {
        this.dateOfJoinError = true;
        this.dateOfBirthError = true;
      }
    },
    onCustomStyleSubmit(item) {
      this.formSubmitted = true;
      this.errors = [];
      if (item.banglaName.length < 3) {
        this.banglaNameError = true;
        this.errors.push({});
      } else {
        this.banglaNameError = false;
        this.errors.push({
          message: "ok",
        });
      }
      if (item.englishName.length < 3) {
        this.englishNameError = true;
        this.errors.push({});
      } else {
        this.englishNameError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      // console.log(item.grade, 'item.grade.length')
      if (item.grade.length < 1) {
        this.selectedGradeError = true;
        this.errors.push({});
      } else {
        this.selectedGradeError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.idNo.length < 1 || item.idNo.length > 6) {
        this.idNoError = true;
        this.errors.push({});
      } else {
        this.idNoError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (
        item.nid.length === 10 ||
        item.nid.length === 13 ||
        item.nid.length === 17
      ) {
        this.nidError = false;
        this.errors.push({});
      } else {
        this.nidError = true;

        this.errors.push({
          message: "ok!",
        });
      }

      if (item.dateOfJoin.length == "" || item.dateOfJoin.length < 1) {
        this.dateOfJoinError = true;
        this.errors.push({});
      } else {
        var moment = require("moment");
        let birthDate = new Date(item.dateOfBirth);
        let dateOfJoin = new Date(item.dateOfJoin);
        let date = new Date(item);

        if (moment.duration(dateOfJoin - birthDate).years() < 18) {
          console.log("what ", moment.duration(dateOfJoin - birthDate).years());

          this.dateOfJoinError = true;
          this.errors.push({});
        } else {
          this.dateOfJoinError = false;
          this.errors.push({
            message: "ok!",
          });
        }
      }
      if (item.dateOfBirth == "" || item.dateOfBirth.length < 1) {
        this.dateOfBirthError = true;
        this.errors.push({});
      } else {
        var moment = require("moment");
        let birthDate = new Date(item.dateOfBirth);
        let dateOfJoin = new Date(item.dateOfJoin);
        let date = new Date(item);
        if (moment.duration(dateOfJoin - birthDate).years() < 18) {
          this.dateOfBirthError = true;

          this.errors.push({});
        } else {
          this.dateOfBirthError = false;
          this.errors.push({
            message: "ok!",
          });
        }
      }

      if (item.prlStartDate.length < 1) {
        var moment = require("moment");
        this.prlStartDateError = true;
        this.errors.push({});
      } else {
        this.prlStartDateError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.branch.length < 1) {
        this.selectedDepartmentError = true;
        this.errors.push({});
      } else {
        this.selectedDepartmentError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.maritalStatus.length < 1) {
        this.maritalStatusError = true;
        this.errors.push({});
      } else {
        this.maritalStatusError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.highestEducationLevel.length < 1) {
        this.highestEducationLevelError = true;
        this.errors.push({});
      } else {
        this.highestEducationLevelError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.gender.length < 1) {
        this.genderError = true;
        this.errors.push({});
      } else {
        this.genderError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.bloodGroup.length < 1) {
        this.bloodGroupError = true;
        this.errors.push({});
      } else {
        this.bloodGroupError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (item.personalMail.match(mailformat) < 1) {
        this.personalMailError = true;
        this.errors.push({});
      } else {
        this.personalMailError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      // if (item.officialMail.match(mailformat) < 1) {
      //   this.officialMailError = true;
      //   this.errors.push({});
      // } else {
      //   this.officialMailError = false;
      //   this.errors.push({
      //     message: "ok!",
      //   });
      // }
      var mobileformat = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      if (item.personalNumber.match(mobileformat) < 1) {
        this.personalNumberError = true;
        this.errors.push({});
      } else {
        this.personalNumberError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      // if (item.officialNumber.match(mobileformat) < 1) {
      //   this.officialNumberError = true;
      //   this.errors.push({});
      // } else {
      //   this.officialNumberError = false;
      //   this.errors.push({
      //     message: "ok!",
      //   });
      // }
      if (item.status.length < 1) {
        this.statusError = true;
        this.errors.push({});
      } else {
        this.statusError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      if (item.designation.length < 1) {
        this.selectedDesignationError = true;
        this.errors.push({});
      } else {
        this.selectedDesignationError = false;
        this.errors.push({
          message: "ok!",
        });
      }
      //   create and update function
      //  this.officialMailError === false &&   this.officialNumberError === false &&
      if (
        this.banglaNameError === false &&
        this.englishNameError === false &&
        this.idNoError === false &&
        this.nidError === false &&
        this.dateOfJoinError === false &&
        this.dateOfBirthError === false &&
        this.prlStartDateError === false &&
        this.selectedDepartmentError === false &&
        this.maritalStatusError === false &&
        this.highestEducationLevelError === false &&
        this.genderError === false &&
        this.bloodGroupError === false &&
        this.personalMailError === false &&
        this.personalNumberError === false &&
        this.statusError === false &&
        this.selectedDesignationError === false
      ) {
        return true;
      } else {
        if (this.banglaNameError === true) {
          window.scrollTo(0, 0);
          return false
        } else if (this.englishNameError === true) {
          window.scrollTo(0, 0);
          return false
        } else if (this.selectedGradeError === true) {
          window.scrollTo(0, 0);
          return false
        } else if (this.idNoError === true) {
          window.scrollTo(0, 200);
          return false
        } else if (this.nidError === true) {
          window.scrollTo(0, 300);
          return false
        } else if (this.dateOfJoinError === true) {
          window.scrollTo(0, 300);
          return false
        } else if (this.dateOfBirthError === true) {
          window.scrollTo(0, 300);
          return false
        } else if (this.prlStartDateError === true) {
          window.scrollTo(0, 500);
          return false
        } else if (this.selectedDepartmentError === true) {
          window.scrollTo(0, 700);
          return false
        } else if (this.maritalStatusError === true) {
          window.scrollTo(0, 700);
          return false
        } else if (this.highestEducationLevelError === true) {
          window.scrollTo(0, 700);
          return false
        } else if (this.genderError === true) {
          window.scrollTo(0, 700);
          return false
        } else if (this.bloodGroupError === true) {
          window.scrollTo(0, 700);
          return false
        } else if (this.personalMailError === true) {
          window.scrollTo(0, 900);
          return false
        } else if (this.personalNumberError === true) {
          window.scrollTo(0, 900);
          return false
        } else if (this.statusError === true) {
          window.scrollTo(0, 900);
          return false
        } else if (this.selectedDesignationError === true) {
          window.scrollTo(0, 900);
          return false
        } else {
          window.scrollTo(0, 0);
          return false
        }
      }
    },
  },
};
