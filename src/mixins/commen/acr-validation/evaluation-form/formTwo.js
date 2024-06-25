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
    onCustomStyleSubmit(item) {
      this.formSubmitted = true;
      this.errors = [];

      if (item && item.assesmentForm) {
        item.assesmentForm.forEach((e, index) => {
          if (e.questionId <= 17) {
            if (e.value === null) {
              e.valdiationMsg = "মূল্যায়ন আবশ্যক !!";
              item.blockSubmit = true;
            } else {
              e.valdiationMsg = "";
              item.blockSubmit = false;
            }
          }
        });
        this.scroll(item.assesmentForm);
      }
    },
    scroll(item) {
      if (item[0].value === null) {
        window.scrollTo(0, 0);
      } else if (item[1].value === null) {
        window.scrollTo(0, 0);
      } else if (item[2].value === null) {
        window.scrollTo(0, 500);
      } else if (item[3].value === null) {
        window.scrollTo(0, 500);
      } else if (item[4].value === null) {
        window.scrollTo(0, 500);
      } else if (item[5].value === null) {
        window.scrollTo(0, 500);
      } else if (item[6].value === null) {
        window.scrollTo(0, 700);
      } else if (item[7].value === null) {
        window.scrollTo(0, 700);
      } else if (item[8].value === null) {
        window.scrollTo(0, 900);
      } else if (item[9].value === null) {
        window.scrollTo(0, 900);
      } else if (item[10].value === null) {
        window.scrollTo(0, 1100);
      } else if (item[11].value === null) {
        window.scrollTo(0, 1100);
      } else if (item[12].value === null) {
        window.scrollTo(0, 1300);
      } else if (item[13].value === null) {
        window.scrollTo(0, 1300);
      } else if (item[14].value === null) {
        window.scrollTo(0, 1400);
      } else if (item[15].value === null) {
        window.scrollTo(0, 1600);
      } else if (item[16].value === null) {
        window.scrollTo(0, 1600);
      }
    },
  },
};
