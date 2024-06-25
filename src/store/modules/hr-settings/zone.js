import {
  getZone,
  deleteZoneById,
  createZone,
  updateZone,
  getZoneById,
} from "../../../api/hr-settings/zone";
const actions = {
  getZone({ commit }) {
    return new Promise((resolve, reject) => {
      getZone()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createZone({ commit }, data) {
    return new Promise((resolve, reject) => {
      createZone(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateZone({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateZone(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  deleteZoneById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteZoneById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getZoneById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getZoneById(user_id)
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
