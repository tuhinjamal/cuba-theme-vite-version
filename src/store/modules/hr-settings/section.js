import {
  getSection,
  deleteSectionById,
  createSection,
  updateSection,
  getSectionById,
} from "../../../api/hr-settings/section";
const actions = {
  getSection({ commit }) {
    return new Promise((resolve, reject) => {
      getSection()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createSection({ commit }, data) {
    return new Promise((resolve, reject) => {
      createSection(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateSection({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateSection(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  deleteSectionById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteSectionById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getSectionById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getSectionById(user_id)
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
