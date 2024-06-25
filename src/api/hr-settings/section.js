import request from "../../utils/request";
export function getSection() {
  return request({
    url: "/section",
    method: "GET",
  });
}
export function createSection(data) {
  return request({
    url: "/section",
    method: "POST",
    data: {
      name: data.name,
      name_bn: data.name_bn,
      code: data.code,
      branchId: data.branchId,
    },
  });
}

export function updateSection(data) {
  return request({
    url: "/section/" + data.id,
    method: "put",
    data: {
      name: data.name,
      name_bn: data.name_bn,
      code: data.code,
      branchId: data.branchId,
    },
  });
}

export function getSectionById(id) {
  return request({
    url: "/section/" + id,
    method: "get",
  });
}
export function deleteSectionById(id) {
  return request({
    url: "/section/" + id,
    method: "delete",
  });
}
