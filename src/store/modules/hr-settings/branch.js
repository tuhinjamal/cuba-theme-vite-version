import {
  getBranch,
  deleteBranchById,
  createBranch,
  updateBranch,
  getBranchById,
} from "../../../api/hr-settings/branch";
const actions = {
  getBranch({ commit }) {
    return new Promise((resolve, reject) => {
      getBranch()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createBranch({ commit }, data) {
    return new Promise((resolve, reject) => {
      createBranch(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateBranch({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateBranch(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  deleteBranchById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteBranchById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getBranchById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getBranchById(user_id)
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
