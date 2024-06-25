export default {
  data() {
    return {
      form: {
        socialService: "",
        address: "",
      },
      errors: [],
      formSubmitted: false,
      socialServiceError: false,
      addressError: false,
    };
  },
  methods: {
    onCustomStyleSubmit() {
      this.formSubmitted = true;
      this.errors = [];
    },
  },
};
