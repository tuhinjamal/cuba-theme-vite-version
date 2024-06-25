const approveList = () => import("@/pages/approve-list/index.vue");
import Body from "@/components/body.vue";
const approveRoute = {
  path: "/approve-list",
  component: Body,
  children: [
    {
      path: "",
      name: "index",
      component: approveList,
      meta: { requiredAuth: true },
    },
  ],
};

export default approveRoute;
