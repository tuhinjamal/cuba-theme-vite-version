/* eslint-disable no-unused-vars */
import {
  viewRoles,
  assignUserRole,
  deleteRole,
  createRole,
  viewPermissions,
  getRoleById,
  assignUserPermissions,
  deletePermission,
  viewUserRole,
} from "@/api/hr-settings/rolePermission";
const actions = {
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
  assignUserPermissions({ commit }, data) {
    return new Promise((resolve, reject) => {
      assignUserPermissions(data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createRole({ commit }, data) {
    return new Promise((resolve, reject) => {
      createRole(data)
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
  deletePermission({ commit }, data) {
    return new Promise((resolve, reject) => {
      deletePermission(data)
        .then((response) => {
          resolve(response);
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
  viewRoles({ commit }) {
    return new Promise((resolve, reject) => {
      viewRoles()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getRoleById({ commit }, user_id) {
    return new Promise((resolve, reject) => {
      getRoleById(user_id)
        .then((response) => {
          const { data } = response;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  viewPermissions({ commit }) {
    return new Promise((resolve, reject) => {
      viewPermissions()
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
  actions,
};
