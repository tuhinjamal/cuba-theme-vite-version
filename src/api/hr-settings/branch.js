import request from "../../utils/request";
export function getBranch() {
  return request({
    url: "/branch",
    method: "GET",
  });
}
export function createBranch(data) {
  return request({
    url: "/branch",
    method: "POST",
    data: {
      name: data.name,
      WingId: data.WingId,
      wingId: data.wingId,
    },
  });
}

export function updateBranch(data) {
  return request({
    url: "/branch/" + data.id,
    method: "put",
    data: {
      name: data.name,
      WingId: data.WingId,
      wingId: data.wingId,
    },
  });
}

export function getBranchById(id) {
  return request({
    url: "/branch/" + id,
    method: "get",
  });
}
export function deleteBranchById(id) {
  return request({
    url: "/branch/" + id,
    method: "delete",
  });
}
