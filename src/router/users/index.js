const User = () => import("@/pages/users/index.vue");
const userCreate = () => import("@/pages/users/users-component/create.vue");
const userUpdate = () => import("@/pages/users/users-component/update.vue");
const userView = () => import("@/pages/users/users-component/view.vue");
const userLogs = () => import("@/pages/users/users-component/user-logs.vue");
import Body from "@/components/body.vue";
const usersRoute = {
  path: "/users",
  component: Body,
  children: [
    {
      path: "",
      name: "User-List",
      component: User,
      meta: {
        requiredAuth: true,
        resource: "Admin",
        action: "view",
      },
    },
    {
      path: "/create-user",
      name: "create-user",
      component: userCreate,
      meta: {
        requiredAuth: true,
        resource: "Admin",
        action: "create",
      },
    },
    {
      path: "/user-view/:id",
      name: "user-view",
      meta: {
        requiredAuth: true,
        resource: "Admin",
        action: "view",
      },
      component: userView,
    },
    {
      path: "/user-edit/:id",
      name: "user-edit",
      meta: {
        requiredAuth: true,
        resource: "Admin",
        action: "edit",
      },
      component: userUpdate,
    },
    {
      path: "/logs",
      name: "/user-logs",
      component: userLogs,
      meta: {
        requiredAuth: true,
        resource: "Admin",
        action: "create",
      },
    },
  ],
};

export default usersRoute;
