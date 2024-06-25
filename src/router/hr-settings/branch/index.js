// wing routes
const getBranch = () => import("@/pages/hr-settings/branch/index.vue");
const createBranch = () =>
  import("@/pages/hr-settings/branch/create-branch.vue");
const viewBranch = () => import("@/pages/hr-settings/branch/update-branch.vue");

import Body from "@/components/body.vue";
const wings = {
  path: "/branches",
  component: Body,
  children: [
    // wing
    {
      path: "",
      name: "/branch-index",
      component: getBranch,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-branch",
      name: "create-branch",
      component: createBranch,
      meta: { requiredAuth: true },
    },
    {
      path: "/branch-view/:id",
      name: "branch-view",
      meta: { requiredAuth: true },
      component: viewBranch,
    },
  ],
};

export default wings;
