import {
  getReporter,
  getReporterById,
  deleteReporterById,
  createReporter,
  updateReporter,
  getReporterWithPagination,
  getReportInfo,
} from "../../../api/hr-settings/reporter";
const actions = {
  getReporter({ commit }) {
    return new Promise((resolve, reject) => {
      getReporter()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createReporter({ commit }, data) {
    return new Promise((resolve, reject) => {
      createReporter(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateReporter({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateReporter(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getReporterById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getReporterById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getReportInfo({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getReportInfo(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getReporterWithPagination({ commit }, id) {
    return new Promise((resolve, reject) => {
      getReporterWithPagination(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteReporterById({ commit }, id) {
    return new Promise((resolve, reject) => {
      deleteReporterById(id)
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
