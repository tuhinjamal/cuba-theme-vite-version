import request from "../../utils/request";
export function getDesignation() {
  return request({
    url: "/designation",
    method: "GET",
  });
}
export function createDesignation(data) {
  return request({
    url: "/designation",
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

export function updateDesignation(data) {
  return request({
    url: "/designation/" + data.id,
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

export function getDesignationById(id) {
  return request({
    url: "/designation/" + id,
    method: "get",
  });
}
export function deleteDesignationById(id) {
  return request({
    url: "/designation/" + id,
    method: "delete",
  });
}
