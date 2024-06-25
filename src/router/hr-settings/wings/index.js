// wing routes
const getWing = () => import("@/pages/hr-settings/wing/index.vue");
const createWing = () => import("@/pages/hr-settings/wing/create-wing.vue");
const viewWing = () => import("@/pages/hr-settings/wing/update-wing.vue");

import Body from "@/components/body.vue";
const wings = {
  path: "/wings",
  component: Body,
  children: [
    // wing
    {
      path: "",
      name: "/wings-index",
      component: getWing,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-wing",
      name: "create-wing",
      component: createWing,
      meta: { requiredAuth: true },
    },
    {
      path: "/wing-view/:id",
      name: "wing-view",
      meta: { requiredAuth: true },
      component: viewWing,
    },
  ],
};

export default wings;
