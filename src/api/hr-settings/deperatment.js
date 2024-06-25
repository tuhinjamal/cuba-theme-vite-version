import request from "../../utils/request";
export function getDepartment() {
  return request({
    url: "/department",
    method: "GET",
  });
}
export function getDepartmentById(id) {
  return request({
    url: "/department/" + id,
    method: "get",
  });
}
export function deleteDepartmentById(id) {
  return request({
    url: "/department/" + id,
    method: "delete",
  });
}
export function createDepartment(data) {
  return request({
    url: "/department",
    method: "POST",
    data: {
      name: data.name,
      name_bn: data.name_bn,
      code: data.code,
      // createdAt: data.createdAt,
      // updatedAt: data.updatedAt,
    },
  });
}

export function updateDepartment(data) {
  return request({
    url: "/department/" + data.id,
    method: "put",
    data: {
      name: data.name,
      name_bn: data.name_bn,
      code: data.code,
      // createdAt: data.createdAt,
      // updatedAt: data.updatedAt,
    },
  });
}
