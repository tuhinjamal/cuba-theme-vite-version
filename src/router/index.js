import { getLogedInUserInfo } from "@/utils/auth";

import { createWebHistory, createRouter } from "vue-router";
import Body from "../components/body.vue";

/* Dashboards */
import Default from "@/pages/dashboard/default.vue";
// import rootIndex from "@/pages/dashboard";
/* Auth */
// import login from "@/auth/login";
import login from "../auth/login.vue";
import otp from "../auth/otp.vue";
// import Register from "../auth/register";
// acr
import ACRRoute from "./acr";
import reportRoute from "./report";
import approveList from "./approve-list";
import usersRoute from "./users";
import departments from "./hr-settings/departments";
import designations from "./hr-settings/designations";
import sections from "./hr-settings/sections";
import zones from "./hr-settings/zones";
import wings from "./hr-settings/wings";
import branch from "./hr-settings/branch";

import reporter from "./hr-settings/reporter";
import roles from "./hr-settings/roles";
// print router
import printRoute from "./print";
const role = {
  Admin: false,
  hr: false,
  User: false,
  IRO: false,
  CRO: false,
  access_log: false,
  applicant: false,
  Reporter_assign: false,
  Role: false,
};
const userView = () => import("../pages/users/users-component/print.vue");

const getLogedInUser = JSON.parse(getLogedInUserInfo());
if (getLogedInUser) {
  getLogedInUser.Roles.forEach((e) => {
    if (e.name === "Admin") {
      return (role.Admin = true);
    }
    if (e.name === "hr") {
      return (role.hr = true);
    }
    if (e.name === "User") {
      return (role.User = true);
    }
    if (e.name === "IRO") {
      return (role.IRO = true);
    }
    if (e.name === "CRO") {
      return (role.CRO = true);
    }

    if (e.name === "access_log") {
      return (role.access_log = true);
    }
    if (e.name === "applicant") {
      return (role.applicant = true);
    }
    if (e.name === "Reporter_assign") {
      return (role.Reporter_assign = true);
    }
    if (e.name === "Role") {
      return (role.Role = true);
    }
  });
}

const routes = [
  ACRRoute,
  reportRoute,
  approveList,
  usersRoute,
  departments,
  designations,
  sections,
  reporter,
  printRoute,
  roles,
  zones,
  wings,
  branch,
  {
    path: "/",
    component: Body,

    children: [
      {
        path: "",
        name: "ড্যাশবোর্ড",
        component: Default,
        meta: {
          title: "ICT - ACR",
          
        },
      },
      
      {
        path: "/user-print/:id",
        name: "user-print",
        component: userView,
        meta: {
          requiredAuth: true,
          
        },
      },
    ],
  },

  {
    path: "/auth",
    children: [
      {
        path: "login",
        name: "Login",
        component: login,
        meta: {
          title: " login | ICT - ACR",
        },
      },
      {
        path: "otp",
        name: "OTP",
        component: otp,
        meta: {
          title: " otp | ICT - ACR",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title;
  const path = ["/auth/login", "/auth/otp"];
  if (path.includes(to.path) || localStorage.getItem("User")) {
    // console.log("is it working", to.meta.role);
    // if (to.meta.role == "open" || to.meta.role == true) {
    return next();
  }
  // }
  next("/auth/login");
});
export default router;
