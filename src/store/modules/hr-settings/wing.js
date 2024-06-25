import {
  getWing,
  deleteWingById,
  createWing,
  updateWing,
  getWingById,
} from "../../../api/hr-settings/wing";
const actions = {
  getWing({ commit }) {
    return new Promise((resolve, reject) => {
      getWing()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createWing({ commit }, data) {
    return new Promise((resolve, reject) => {
      createWing(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateWing({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateWing(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  deleteWingById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteWingById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getWingById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getWingById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  actions,
};
