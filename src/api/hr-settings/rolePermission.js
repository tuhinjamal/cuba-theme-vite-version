import request from "../../utils/request";

export function viewRoles(data) {
  return request({
    url: "/role/",
    method: "GET",
    data,
  });
}
export function viewUserRole(data) {
  return request({
    url: "/role",
    method: "GET",
    data,
  });
}
export function createRole(data) {
  return request({
    url: "/role",
    method: "POST",
    data: {
      name: data.name,
    },
  });
}
export function getRoleById(id) {
  return request({
    url: "/role/" + id,
    method: "get",
  });
}
export function assignUserRole(data) {
  return request({
    url: "/role/assignToUser/" + data.id,
    method: "post",
    data: {
      role: data.role,
    },
  });
}
export function assignUserPermissions(data) {
  return request({
    url: "/role/permissionAssign/" + data.id,
    method: "post",
    data: {
      permissions: data.Permissions,
    },
  });
}

export function deleteRole(id) {
  return request({
    url: "/role/" + id,
    method: "delete",
  });
}
export function deletePermission(data) {
  return request({
    url: "/role/permissionRemove/" + data.id,
    method: "post",
    data: {
      permissions: data.Permissions,
    },
  });
}
export function viewUserLogs(data) {
  return request({
    url: "/access_log",
    method: "GET",
    data,
  });
}

// permission section
export function viewPermissions(data) {
  return request({
    url: "/role/allPermission",
    method: "GET",
    data,
  });
}
