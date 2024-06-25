/* eslint-disable no-unused-vars */
import {
  createUser,
  uploadImage,
  updateUser,
  viewUsers,
  getUserById,
  deleteUserById,
  viewUserLogs,
  viewUserRole,
  assignUserRole,
  deleteRole,
  getUsersWithPagination,
  search,
  notification,
  notificationSeen,
  viewUserLogsPagination,
} from "@/api/users";

const state = {
  loggedInUser: {},
}; 
const actions = {
  viewUsers({ commit }) {
    return new Promise((resolve, reject) => {
      viewUsers()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getUsersWithPagination({ commit }, id) {
    return new Promise((resolve, reject) => {
      getUsersWithPagination(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  viewUserLogsPagination({ commit }, id) {
    return new Promise((resolve, reject) => {
      viewUserLogsPagination(id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  viewUserRole({ commit }) {
    return new Promise((resolve, reject) => {
      viewUserRole()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      createUser(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateUser(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  assignUserRole({ commit }, data) {
    return new Promise((resolve, reject) => {
      assignUserRole(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteRole({ commit }, data) {
    return new Promise((resolve, reject) => {
      deleteRole(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getUserById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getUserById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  uploadImage({ commit }, data) {
    return new Promise((resolve, reject) => {
      uploadImage(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteUserById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      deleteUserById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  viewUserLogs({ commit }) {
    return new Promise((resolve, reject) => {
      viewUserLogs()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  search({ commit }, data) {
    return new Promise((resolve, reject) => {
      search(data)
        .then((response) => {
          const { data } = response;

          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  notification({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      notification(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  notificationSeen({ commit }, id) {
    return new Promise((resolve, reject) => {
      notificationSeen(id)
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
  state,
};
