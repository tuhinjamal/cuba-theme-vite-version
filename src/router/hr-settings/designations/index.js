// designation routes
const getDesignation = () =>
  import("@/pages/hr-settings/designation/index.vue");
const createDesignation = () =>
  import("@/pages/hr-settings/designation/create-designation.vue");
const viewDesignation = () =>
  import("@/pages/hr-settings/designation/update-designation.vue");

import Body from "@/components/body.vue";
const designations = {
  path: "/designations",
  component: Body,
  children: [
    // designation
    {
      path: "",
      name: "/designations-index",
      component: getDesignation,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-designation",
      name: "create-designation",
      component: createDesignation,
      meta: { requiredAuth: true },
    },
    {
      path: "/designation-view/:id",
      name: "designation-view",
      meta: { requiredAuth: true },
      component: viewDesignation,
    },
  ],
};

export default designations;
