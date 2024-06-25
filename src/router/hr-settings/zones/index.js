// zone routes
const getZone = () => import("@/pages/hr-settings/zone/index.vue");
const createZone = () => import("@/pages/hr-settings/zone/create-zone.vue");
const viewZone = () => import("@/pages/hr-settings/zone/update-zone.vue");

import Body from "@/components/body.vue";
const zones = {
  path: "/zones",
  component: Body,
  children: [
    // zone
    {
      path: "",
      name: "/zones-index",
      component: getZone,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-zone",
      name: "create-zone",
      component: createZone,
      meta: { requiredAuth: true },
    },
    {
      path: "/zone-view/:id",
      name: "zone-view",
      meta: { requiredAuth: true },
      component: viewZone,
    },
  ],
};

export default zones;
