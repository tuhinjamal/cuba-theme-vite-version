import request from "../../utils/request";
export function getZone() {
  return request({
    url: "/zone",
    method: "GET",
  });
}
export function createZone(data) {
  return request({
    url: "/zone",
    method: "POST",
    data: {
      name: data.name,
    },
  });
}

export function updateZone(data) {
  return request({
    url: "/zone/" + data.id,
    method: "put",
    data: {
      name: data.name,
    },
  });
}

export function getZoneById(id) {
  return request({
    url: "/zone/" + id,
    method: "get",
  });
}
export function deleteZoneById(id) {
  return request({
    url: "/zone/" + id,
    method: "delete",
  });
}
