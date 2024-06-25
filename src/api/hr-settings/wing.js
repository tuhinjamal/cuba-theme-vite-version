import request from "../../utils/request";
export function getWing() {
  return request({
    url: "/wing",
    method: "GET",
  });
}
export function createWing(data) {
  return request({
    url: "/wing",
    method: "POST",
    data: {
      name: data.name,
    },
  });
}

export function updateWing(data) {
  return request({
    url: "/wing/" + data.id,
    method: "put",
    data: {
      name: data.name,
    },
  });
}

export function getWingById(id) {
  return request({
    url: "/wing/" + id,
    method: "get",
  });
}
export function deleteWingById(id) {
  return request({
    url: "/wing/" + id,
    method: "delete",
  });
}
