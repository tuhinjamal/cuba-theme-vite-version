const acrListNonGazzeted = () => import("@/pages/acr/acrListNonGazzeted.vue");
const ACR = () => import("@/pages/acr/index.vue");
const IRO = () => import("@/pages/acr/iro-index.vue");
const CRO = () => import("@/pages/acr/cro-index.vue");
const UserAcr = () => import("@/pages/acr/user-index.vue");

const viewMore = () => import("@/pages/acr/acr-components/viewMore.vue");
const Form = () =>
  import("@/pages/acr/acr-components/evaluation-form/form-part-one.vue");
const gazzetedForm = () =>
  import("../../components/application-form/gazzeted.vue");
const nonGazzetedForm = () =>
  import("@/pages/acr/acr-components/non-gazzeted/create.vue");
const gazzetedCadreForm = () =>
  import("../../components/application-form/gazzetedCadre.vue");
const reportForm = () => import("../../components/application-form/report.vue");
const viewACR = () => import("@/pages/acr/acr-components/view.vue");
const evaluateACR = () => import("@/pages/acr/acr-components/evaluate.vue");
const evaluateACRCro = () =>
  import("@/pages/acr/acr-components/cro-evaluate.vue");

const findNonGazzetedACR = () =>
  import("@/pages/acr/acr-components/non-gazzeted/view.vue");
const editNonGazzetedACR = () =>
  import("@/pages/acr/acr-components/non-gazzeted/edit.vue");
const viewNonGazzetedACR = () =>
  import("@/pages/acr/acr-components/evaluation-form/view/view-evaluation.vue");
const detailNonGazzetedACR = () =>
  import("@/pages/acr/acr-components/evaluation-form/view/detail.vue");
import Body from "@/components/body.vue";
const ACRRoute = {
  path: "/acr",
  component: Body,
  children: [
    {
      path: "",
      name: "acr-index",
      component: ACR,
      meta: { requiredAuth: true },
    },
    {
      path: "/acr-list-non-gazzeted",
      name: "non-gazzeted-acr-list",
      component: acrListNonGazzeted,
      meta: { requiredAuth: true },
    },
    {
      path: "/view-more",
      name: "view-more",
      component: viewMore,
      meta: { requiredAuth: true },
    },
    {
      path: "/form",
      name: "form",
      component: Form,
      meta: { requiredAuth: true },
    },
    {
      path: "/gazzeted-form",
      name: "gazzeted-form",
      component: gazzetedForm,
      meta: { requiredAuth: true },
    },
    {
      path: "/non-gazzeted-form/:id",
      name: "non-gazzeted-form",
      component: nonGazzetedForm,
      meta: { requiredAuth: true },
    },
    {
      path: "/gazzeted-cadre-form",
      name: "gazzeted-cadre-form",
      component: gazzetedCadreForm,
      meta: { requiredAuth: true },
    },
    {
      path: "/report-form",
      name: "report-form",
      component: reportForm,
      meta: { requiredAuth: true },
    },
    {
      path: "view-acr",
      name: "view-acr",
      component: viewACR,
      meta: { requiredAuth: true },
    },
    {
      path: "/evaluate-acr/:id",
      name: "evaluate-acr",
      component: evaluateACR,
      meta: { requiredAuth: true },
    },
    {
      path: "/evaluate-acr-cro/:id",
      name: "evaluate-acr-cro",
      component: evaluateACRCro,
      meta: { requiredAuth: true },
    },
    // find by id non gazzeted
    {
      path: "/find-non-gazzeted-acr/:id",
      name: "find-non-gazzeted-acr",
      meta: { requiredAuth: true },
      component: findNonGazzetedACR,
    },
    {
      path: "/edit-non-gazzeted-acr/:id",
      name: "edit-non-gazzeted-acr",
      meta: { requiredAuth: true },
      component: editNonGazzetedACR,
    },
    {
      path: "/view-non-gazzeted-acr/:id",
      name: "view-non-gazzeted-acr",
      meta: { requiredAuth: true },
      component: viewNonGazzetedACR,
    },
    {
      path: "/iro",
      name: "iro",
      component: IRO,
      meta: { requiredAuth: true },
    },
    {
      path: "/cro",
      name: "cro",
      component: CRO,
      meta: { requiredAuth: true },
    },
    {
      path: "/user-acr",
      name: "user-acr",
      component: UserAcr,
      meta: { requiredAuth: true },
    },
    //
    {
      path: "/detail-non-gazzeted-acr/:id",

      name: "detail-non-gazzeted-acr",
      component: detailNonGazzetedACR,
      meta: { requiredAuth: true },
    },
  ],
};

export default ACRRoute;
