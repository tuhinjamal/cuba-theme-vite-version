import {
  requestNonGazzetedACR,
  viewAllNonGazzetedAcr,
  getNonGazzetedAcrByID,
  getIROByID,
  deleteNonGazzetedACR,
  updateNonGazzetedACR,
  createNonGazzetedACRAssesment,
  // IRO
  getNonGazzetedACRAssesment,
  createNonGazzetedIROEvaluation,
  getNonGazzetedIROEvaluationByID,
  updateNonGazzetedIROEvaluation,
  // CRO
  createNonGazzetedCROEvaluation,
  getNonGazzetedCROEvaluationByID,
  updateNonGazzetedCROEvaluation,
  updateNonGazzetedACRAssesment,
  getCroReturnByID,
  getIroForUpdate,
} from "@/api/nonGazzetedACR";
const actions = {
  viewAllNonGazzetedAcr({ commit }) {
    return new Promise((resolve, reject) => {
      viewAllNonGazzetedAcr()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  requestNonGazzetedACR({ commit }, data) {
    return new Promise((resolve, reject) => {
      requestNonGazzetedACR(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getNonGazzetedAcrByID({ commit }, id) {
    return new Promise((resolve, reject) => {
      getNonGazzetedAcrByID(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getIroForUpdate({ commit }, id) {
    return new Promise((resolve, reject) => {
      getIroForUpdate(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteNonGazzetedACR({ commit }, id) {
    return new Promise((resolve, reject) => {
      deleteNonGazzetedACR(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getCroReturnByID({ commit }, data) {
    return new Promise((resolve, reject) => {
      getCroReturnByID(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateNonGazzetedACR({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateNonGazzetedACR(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getIROByID({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getIROByID(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // assesment
  createNonGazzetedACRAssesment({ commit }, data) {
    return new Promise((resolve, reject) => {
      createNonGazzetedACRAssesment(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateNonGazzetedACRAssesment({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateNonGazzetedACRAssesment(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getNonGazzetedACRAssesment({ commit }, id) {
    return new Promise((resolve, reject) => {
      getNonGazzetedACRAssesment(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // ACR IRO evaluation section

  getNonGazzetedIROEvaluationByID({ commit }, id) {
    return new Promise((resolve, reject) => {
      getNonGazzetedIROEvaluationByID(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateNonGazzetedIROEvaluation({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateNonGazzetedIROEvaluation(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createNonGazzetedIROEvaluation({ commit }, data) {
    return new Promise((resolve, reject) => {
      createNonGazzetedIROEvaluation(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // ACR CRO evaluation section

  getNonGazzetedCROEvaluationByID({ commit }, id) {
    return new Promise((resolve, reject) => {
      getNonGazzetedCROEvaluationByID(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  updateNonGazzetedCROEvaluation({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateNonGazzetedCROEvaluation(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createNonGazzetedCROEvaluation({ commit }, data) {
    return new Promise((resolve, reject) => {
      createNonGazzetedCROEvaluation(data)
        .then((response) => {
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
  // state,
  // mutations,
  actions,
};
