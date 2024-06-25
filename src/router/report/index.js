const Report = () => import("@/pages/report/index.vue");
import Body from "@/components/body.vue";
const reportRoute = {
  path: "/report",
  component: Body,
  children: [
    {
      path: "",
      name: "report-index",
      component: Report,
      meta: { requiredAuth: true },
    },
  ],
};

export default reportRoute;
