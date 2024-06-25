import {
  getDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartmentById,
} from "../../../api/hr-settings/deperatment";
const actions = {
  getDepartment({ commit }) {
    return new Promise((resolve, reject) => {
      getDepartment()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createDepartment({ commit }, data) {
    return new Promise((resolve, reject) => {
      createDepartment(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateDepartment({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateDepartment(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getDepartmentById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getDepartmentById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteDepartmentById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteDepartmentById(user_id)
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
