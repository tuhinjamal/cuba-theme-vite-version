const printNonGazzetedACR = () =>
  import("@/pages/acr/acr-components/evaluation-form/view/print.vue");
// const userView = () => import("@/pages/users/users-component/print.vue");
const userPrintPreview = () =>
  import("@/pages/users/users-component/print-preview.vue");
const allUserPrintPreview = () =>
  import("@/pages/users/users-component/print-all-user.vue");

const printIRO = () =>
  import("@/pages/acr/acr-components/evaluation-form/view/print-iro-eval.vue");

const printRoute = {
  children: [
    {
      path: "/print-non-gazzeted-acr/:id",

      name: "print-non-gazzeted-acr",
      component: printNonGazzetedACR,
      meta: { requiredAuth: true },
    },
    {
      path: "/print-iro-eval/:id",
      name: "print-iro-eval",
      component: printIRO,
      meta: { requiredAuth: true },
    },
    {
      path: "/user-print-preview/:id",
      name: "user-print-preview",
      component: userPrintPreview,
      meta: { requiredAuth: true },
    },
    {
      path: "/all-user-print-preview",
      name: "all-user-print-preview",
      component: allUserPrintPreview,
      meta: { requiredAuth: true },
    },
  ],
};

export default printRoute;
