// section routes
const getSection = () => import("@/pages/hr-settings/section/index.vue");
const createSection = () =>
  import("@/pages/hr-settings/section/create-section.vue");
const viewSection = () =>
  import("@/pages/hr-settings/section/update-section.vue");

import Body from "@/components/body.vue";
const sections = {
  path: "/sections",
  component: Body,
  children: [
    // section
    {
      path: "",
      name: "/sections-index",
      component: getSection,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-section",
      name: "create-section",
      component: createSection,
      meta: { requiredAuth: true },
    },
    {
      path: "/section-view/:id",
      name: "section-view",
      meta: { requiredAuth: true },
      component: viewSection,
    },
  ],
};

export default sections;
