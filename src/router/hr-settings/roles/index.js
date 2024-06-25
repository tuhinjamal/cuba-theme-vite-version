// role routes
const getRolePermission = () => import("@/pages/hr-settings/roles/index.vue");
const createRole = () => import("@/pages/hr-settings/roles/create-role.vue");
const updateRole = () => import("@/pages/hr-settings/roles/update-role.vue");
const viewUserRole = () =>
  import("@/pages/hr-settings/roles/view-user-role.vue");
const userRole = () => import("@/pages/users/index.vue");
// const User = () => import("../../pages/users/index");
import Body from "@/components/body.vue";
const sections = {
  path: "/roles",
  component: Body,
  children: [
    // section
    {
      path: "",
      name: "roles",
      component: getRolePermission,
      meta: { requiredAuth: true },
    },
    {
      path: "/create-role",
      name: "create-role",
      component: createRole,
      meta: { requiredAuth: true },
    },
    {
      path: "/role-view/:id",
      name: "role-view",
      meta: { requiredAuth: true },
      component: updateRole,
    },
    {
      path: "/view-user-role/:id",
      name: "view-user-role",
      meta: { requiredAuth: true },
      component: viewUserRole,
    },
    {
      path: "/user-role",
      name: "user-role",
      component: userRole,
      meta: { requiredAuth: true },
    },
  ],
};

export default sections;
