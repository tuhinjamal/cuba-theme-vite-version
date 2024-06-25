// department routes
const getDepartment = () => import("@/pages/hr-settings/department/index.vue");
const createDepartment = () =>
  import("@/pages/hr-settings/department/create-department.vue");
const viewDepartment = () =>
  import("@/pages/hr-settings/department/update-department.vue");

import Body from "@/components/body.vue";
const departments = {
  path: "/departments",
  component: Body,
  children: [
    {
      path: "",
      name: "/departments-index",
      component: getDepartment,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-department",
      name: "create-department",
      component: createDepartment,
      meta: { requiredAuth: true },
    },
    {
      path: "/department-view/:id",
      name: "view",
      meta: { requiredAuth: true },
      component: viewDepartment,
    },
  ],
};

export default departments;
