/* eslint-disable no-unused-vars */
import { getLogedInUser, login, logout, register, verifyOTP } from "@/api/auth";
import router from "@/router";

import {
  getLogedInEmpId,
  getToken,
  removeLogedInEmpId,
  removeToken,
  setLogedInEmpId,
  setToken,
} from "@/utils/auth";

const state = {
  token: getToken(),
  logedInEmpId: getLogedInEmpId(),
  user: {
    user_id: "",
    otp: "",
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
};

const actions = {
  //user register
  register({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      register(userInfo)
        .then((response) => {
          commit("SET_USER", userInfo);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // user login
  login({ commit }, userInfo) {
    const { user_id, email, sms } = userInfo;
    return new Promise((resolve, reject) => {
      login({ user_id: user_id, email: email, sms: sms })
        .then((response) => {
          commit("SET_USER", userInfo);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // verifyOTP for login
  verifyOTP({ commit }, userInfo) {
    const { user_id, otp } = userInfo;
    return new Promise((resolve, reject) => {
      verifyOTP({ user_id: user_id, otp: otp })
        .then((response) => {
          commit("SET_TOKEN", response.data ? response.data.token : "");
          setToken(response.data ? response.data.token : "");

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
