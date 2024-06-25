import { createStore } from "vuex";

import layout from "./modules/layout";
import menu from "./modules/menu";
import contact from "./modules/contact";
import common from "./modules/common";
import bootsrap from "./modules/bootsrap";
import language from "./modules/language";
import auth from "./modules/auth";
import userStore from "./modules/userStore";
import acrStore from "./modules/acrStore";
import appConfig from "./app-config";
import department from "./modules/hr-settings/department";
import designation from "./modules/hr-settings/deisgnation";
import section from "./modules/hr-settings/section";
import zone from "./modules/hr-settings/zone";
import wing from "./modules/hr-settings/wing";
import branch from "./modules/hr-settings/branch";

import reporter from "./modules/hr-settings/reporter";
import rolePermission from "./modules/hr-settings/rolePermission";
export default createStore({
  state: { langIcon: "", langLangauge: "", isActive: false },
  getters: {
    langIcon: (state) => {
      return state.langIcon;
    },
    langLangauge: (state) => {
      return state.langLangauge;
    },
  },
  mutations: {
    changeLang(state, payload) {
      localStorage.setItem("currentLanguage", payload.id);
      localStorage.setItem("currentLanguageIcon", payload.icon);
      state.langIcon = payload.icon || "flag-icon-us";
      state.langLangauge = payload.id || "EN";
    },
    change(state) {
      state.isActive = !state.isActive;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    },
  },
  modules: {
    appConfig,
    alert,
    layout,
    menu,
    language,
    common,
    contact,
    bootsrap,
    auth,
    userStore,
    acrStore,
    department,
    designation,
    section,
    reporter,
    rolePermission,
    zone,
    wing,
    branch,
  },
});
