export default {
  data() {
    return {
      errors: [],
      formSubmitted: false,
      userIdError: false,
      greadError: false,
      iroError: false,
      croError: false,
      joinError: false,
      startError: false,
      endError: false,
    };
  },
  methods: {
    onCustomStyleSubmit(item) {
      this.formSubmitted = true;
      this.errors = [];
      if (
        item.user_id == undefined ||
        item.user_id == null ||
        item.user_id == ""
      ) {
        this.userIdError = true;
        this.errors.push({});
      } else {
        this.userIdError = false;
        this.errors.push({
          message: "ok",
        });
      }
      if (item.gread == undefined || item.gread == null || item.gread == "") {
        this.greadError = true;
        this.errors.push({});
      } else {
        this.greadError = false;
        this.errors.push({
          message: "ok",
        });
      }
      if (item.iro == undefined || item.iro == null || item.iro == "") {
        this.iroError = true;
        this.errors.push({});
      } else {
        this.iroError = false;
        this.errors.push({
          message: "ok",
        });
      }
      if (item.cro == undefined || item.cro == null || item.cro == "") {
        this.croError = true;
        this.errors.push({});
      } else {
        this.croError = false;
        this.errors.push({
          message: "ok",
        });
      }
      let join = new Date(item.joining_date_current_position);
      if (join == "Invalid Date") {
        this.joinError = true;
      } else {
        this.joinError = false;
      }
      let end = new Date(item.end_date);
      let start = new Date(item.start_date);

      if (start == "Invalid Date" || end == "Invalid Date") {
        if (start == "Invalid Date") {
          this.startError = true;
        } else {
          this.startError = false;
        }
        if (end == "Invalid Date") {
          this.endError = true;
        } else {
          this.endError = false;
        }
      } else {
        if (end < start) {
          this.startError = true;
          this.endError = true;
          this.errors.push({});
        } else {
          this.startError = false;
          this.endError = false;

          this.errors.push({
            message: "ok",
          });
        }
      }

      //   //   create and update function
      if (
        this.userIdError == false &&
        this.greadError == false &&
        this.iroError == false &&
        this.croError == false &&
        this.startError == false &&
        this.endError == false &&
        this.joinError == false
      ) {
        console.log("reporter data", item);
        if (item.id) {
          this.$store
            .dispatch("reporter/updateReporter", item)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push(`/reporters`);
              }
            })
            .catch((err) => {
              this.errorMSG = err.response.data.error;
            });
        } else {
          this.$store
            .dispatch("reporter/createReporter", item)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push(`/reporters`);
              }
            })
            .catch((err) => {
              this.errorMSG = err.response.data.error;
            });
        }
      } else {
        if (this.userIdError == true) {
          window.scrollTo(0, 0);
        } else if (this.greadError == true) {
          window.scrollTo(0, 0);
        } else if (this.iroError == true) {
          window.scrollTo(0, 500);
        } else if (this.croError == true) {
          window.scrollTo(0, 500);
        } else if (this.startError == true) {
          window.scrollTo(0, 500);
        } else if (this.endError == true) {
          window.scrollTo(0, 500);
        }
      }
    },
  },
};
