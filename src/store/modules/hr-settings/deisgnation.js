import {
  getDesignation,
  getDesignationById,
  createDesignation,
  updateDesignation,
  deleteDesignationById,
} from "../../../api/hr-settings/designation";
const actions = {
  getDesignation({ commit }) {
    return new Promise((resolve, reject) => {
      getDesignation()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createDesignation({ commit }, data) {
    return new Promise((resolve, reject) => {
      createDesignation(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateDesignation({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateDesignation(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getDesignationById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getDesignationById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteDesignationById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteDesignationById(user_id)
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
