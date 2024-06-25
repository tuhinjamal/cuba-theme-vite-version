export default {
  data() {
    return {
      form: {
        banglaName: "",
        cro: "",
      },
      errors: [],
      formSubmitted: false,
      nameError: false,
      addressError: false,
    };
  },
  methods: {
    onCustomStyleSubmit() {
   
      this.formSubmitted = true;
      this.errors = [];
      if (this.form.banglaName.length < 3 || this.form.banglaName > 30) {
        this.nameError = true;
        this.errors.push({});
      } else {
        this.nameError = false;
        this.errors.push({
          message: "Name is valid !",
        });
      }
      if (this.form.cro || this.form.cro > 30) {
        this.addressError = true;
        this.errors.push({});
      } else {
        this.addressError = false;
        this.errors.push({
          message: "Address is valid !",
        });
      }
    },
  },
};
