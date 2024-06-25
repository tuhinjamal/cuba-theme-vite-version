export default {
  data() {
    return {
      errors: [],
      formSubmitted: false,
      jobStatusError: false,
      salaryError: false,
      languageError: false,
      specialTrainingError: false,
    };
  },
  methods: {
    onCustomStyleSubmit(form) {
      this.formSubmitted = true;
      this.errors = [];

      if (
        form.jobStatus == "undefined" ||
        form.jobStatus == "" ||
        form.jobStatus == null
      ) {
        this.jobStatusError = true;
        this.errors.push({});
      } else {
        this.jobStatusError = false;
        this.errors.push({
          message: " valid !",
        });
      }

      if (
        form.salary == "undefined" ||
        form.salary == "" ||
        form.salary == null
      ) {
        this.salaryError = true;
        this.errors.push({});
      } else {
        this.salaryError = false;
        this.errors.push({
          message: " valid !",
        });
      }

      if (
        form.language == "undefined" ||
        form.language == "" ||
        form.language == null
      ) {
        this.languageError = true;
        this.errors.push({});
      } else {
        this.languageError = false;
        this.errors.push({
          message: "Language is valid !",
        });
      }
      if (
        form.specialTraining == "undefined" ||
        form.specialTraining == "" ||
        form.specialTraining == null
      ) {
        this.specialTrainingError = true;
        this.errors.push({});
      } else {
        this.specialTrainingError = false;
        this.errors.push({
          message: "Special training is valid !",
        });
      }
      //      this.joiningDateError == false &&
      if (
        this.jobStatusError === false &&
        this.salaryError === false &&
        this.languageError === false &&
        this.specialTrainingError === false
      ) {
        if (form.id > 0) {
          this.$swal
            .fire({
              title: "আপনি কি নিশ্চিত ?",
              text: "আপনি এ সি আর অনুরোধ টি সাবমিট  করবেন !",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "সাবমিট  করুন ",
              cancelButtonText: "বন্ধ করুন ",
            })
            .then((result) => {
              if (result.isConfirmed) {
                this.$store
                  .dispatch("acrStore/updateNonGazzetedACR", this.form)
                  .then((res) => {
                    if (res.status === 200) {
                      this.$router.push("/");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                this.$swal.fire(
                  "স্বাগতম!",
                  "এ সি আর অনুরোধটি  সাবমিট  হয়েছে ",
                  "success"
                );
              }
            });
        } else {
          this.$swal
            .fire({
              title: "আপনি কি নিশ্চিত ?",
              text: "আপনি এ সি আর অনুরোধ টি সাবমিট  করবেন !",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "সাবমিট  করুন ",
              cancelButtonText: "বন্ধ করুন ",
            })
            .then((result) => {
              if (result.isConfirmed) {
                this.$store
                  .dispatch("acrStore/requestNonGazzetedACR", this.form)
                  .then((res) => {
                    this.$router.push("/");
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                this.$swal.fire(
                  "স্বাগতম!",
                  "এ সি আর অনুরোধটি  সাবমিট  হয়েছে ",
                  "success"
                );
              }
            });
        }
      }
    },
  },
};
