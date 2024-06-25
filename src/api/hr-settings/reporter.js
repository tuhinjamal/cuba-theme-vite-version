import request from "../../utils/request";
export function getReporter() {
  return request({
    url: "/reporter",
    method: "GET",
  });
}
export function getReporterWithPagination(id) {
  return request({
    url: "/reporter/page/" + id,
    method: "GET",
  });
}
export function createReporter(data) {
  return request({
    url: "/reporter",
    method: "POST",
    data: {
      iro: data.iro,
      user_id: data.user_id,
      gread: data.gread,
      designation: data.designation,
      cro: data.cro,
      joining_date_current_position: data.joining_date_current_position,
      start_date: data.start_date,
      end_date: data.end_date,
    },
  });
}

export function updateReporter(data) {
  return request({
    url: "/reporter/" + data.id,
    method: "put",
    data: {
      iro: data.iro,
      user_id: data.user_id,
      gread: data.gread,
      designation: data.designation,
      cro: data.cro,
      joining_date_current_position: data.joining_date_current_position,
      start_date: data.start_date,
      end_date: data.end_date,
      submited: data.submited,
      status: data.status,
      route: data.route,
      comment: data.comment,
    },
  });
}

export function getReporterById(id) {
  return request({
    url: "/reporter/user/" + id,
    method: "get",
  });
}
export function getReportInfo(id) {
  return request({
    url: "/reporter/" + id,
    method: "get",
  });
}
export function deleteReporterById(id) {
  return request({
    url: "/reporter/" + id,
    method: "delete",
  });
}
