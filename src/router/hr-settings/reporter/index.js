// section routes
const getReporter = () => import("@/pages/hr-settings/reporter/index.vue");
const createReporter = () =>
  import("@/pages/hr-settings/reporter/create-reporter.vue");
const viewReporter = () =>
  import("@/pages/hr-settings/reporter/update-reporter.vue");

import Body from "@/components/body.vue";
const sections = {
  path: "/reporters",
  component: Body,
  children: [
    // section
    {
      path: "",
      name: "/reporters-index",
      component: getReporter,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-reporter",
      name: "create-reporter",
      component: createReporter,
      meta: { requiredAuth: true },
    },
    {
      path: "/reporter-view/:id",
      name: "reporter-view",
      meta: { requiredAuth: true },
      component: viewReporter,
    },
  ],
};

export default sections;
