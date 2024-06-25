export default {
  data() {
    return {
      form: {
        name: "",
        designation: "",
        jobValidity: "",
        education: "",
        birthday: "",
        language: "",
        specialTraining: "",
        appoinmentDate: "",
        employmentType: "",
        currentAppoinmentDate: "",
        payScale: "",
      },
      errors: [],
      formSubmitted: false,
      nameError: false,
      designationError: false,
      educationError: false,
      brithdayError: false,
      jobValidityError: false,
      languageError: false,
      specialTrainingError: false,
      // non gazzeted fields
      appoinmentDateError: false,
      employmentTypeError: false,
      currentAppoinmentDate: false,
      payScaleError: false,
    };
  },
  methods: {
    onCustomStyleSubmit() {
      this.formSubmitted = true;
      this.errors = [];
      if (this.form.name.length < 3 || this.form.name > 30) {
        this.nameError = true;
        this.errors.push({});
      } else {
        this.nameError = false;
        this.errors.push({
          message: "Name is valid !",
        });
      }

      if (
        this.form.designation.length < 3 ||
        this.form.designation.length > 30
      ) {
        this.designationError = true;
        this.errors.push({});
      } else {
        this.designationError = false;
        this.errors.push({
          message: "Designation is valid !",
        });
      }
      // personal information validation section
      if (this.form.education.length < 3 || this.form.education > 30) {
        this.educationError = true;
        this.errors.push({});
      } else {
        this.educationError = false;
        this.errors.push({
          message: "Education is valid !",
        });
      }
      if (this.form.birthday.length < 3 || this.form.birthday > 30) {
        this.brithdayError = true;
        this.errors.push({});
      } else {
        this.brithdayError = false;
        this.errors.push({
          message: "Birthday is valid !",
        });
      }
      if (this.form.jobValidity.length < 3 || this.form.jobValidity > 30) {
        this.jobValidityError = true;
        this.errors.push({});
      } else {
        this.jobValidityError = false;
        this.errors.push({
          message: "Job Validity is valid !",
        });
      }
      if (this.form.language.length < 3 || this.form.language > 30) {
        this.languageError = true;
        this.errors.push({});
      } else {
        this.languageError = false;
        this.errors.push({
          message: "Language is valid !",
        });
      }
      if (
        this.form.specialTraining.length < 3 ||
        this.form.specialTraining > 30
      ) {
        this.specialTrainingError = true;
        this.errors.push({});
      } else {
        this.specialTrainingError = false;
        this.errors.push({
          message: "Special training is valid !",
        });
      }
      if (
        this.form.appoinmentDate.length < 3 ||
        this.form.appoinmentDate > 30
      ) {
        this.appoinmentDateError = true;
        this.errors.push({});
      } else {
        this.appoinmentDateError = false;
        this.errors.push({
          message: "Appoinment date is valid !",
        });
      }
      if (
        this.form.employmentType.length < 3 ||
        this.form.employmentType > 30
      ) {
        this.employmentTypeError = true;
        this.errors.push({});
      } else {
        this.employmentTypeError = false;
        this.errors.push({
          message: "Employment type is valid !",
        });
      }
      if (
        this.form.currentAppoinmentDate.length < 3 ||
        this.form.currentAppoinmentDate > 30
      ) {
        this.currentAppoinmentDateError = true;
        this.errors.push({});
      } else {
        this.currentAppoinmentDateError = false;
        this.errors.push({
          message: "Current appoinment data is valid !",
        });
      }
      if (this.form.payScale.length < 3 || this.form.payScale > 30) {
        this.payScaleError = true;
        this.errors.push({});
      } else {
        this.payScaleError = false;
        this.errors.push({
          message: "Pay scale is valid !",
        });
      }
    },
  },
};
