import request from "../utils/request";
export function viewUsers(data) {
  return request({
    url: "/users/",
    method: "GET",
    data,
  });
}
export function getUsersWithPagination(id) {
  return request({
    url: "/users/page/" + id,
    method: "GET",
  });
}
export function viewUserRole(data) {
  return request({
    url: "/role",
    method: "GET",
    data,
  });
}
export function getUserById(user_id) {
  return request({
    url: "/users/" + user_id,
    method: "get",
  });
}
export function search(item) {
  return request({
    url: "/users/search/" + item.data + "/page/" + item.page,
    method: "get",
  });
}
export function deleteUserById(user_id) {
  return request({
    url: "/users/" + user_id,
    method: "delete",
  });
}
export function createUser(data) {
  return request({
    url: "/users",
    method: "POST",
    data: {
      banglaName: data.banglaName,
      englishName: data.englishName,
      grade: data.grade,
      class: data.class,
      idNo: data.idNo,
      batchNo: data.batchNo,
      nid: data.nid,
      cadre: data.cadre,
      workingArea: data.workingArea,
      section: data.section,
      fatherName: data.fatherName,
      motherName: data.motherName,
      dateOfJoin: data.dateOfJoin,
      dateOfBirth: data.dateOfBirth,
      prlStartDate: data.prlStartDate,
      branch: data.branch,
      maritalStatus: data.maritalStatus,
      highestEducationLevel: data.highestEducationLevel,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      personalMail: data.personalMail,
      officialMail: data.officialMail,
      personalNumber: data.personalNumber,
      officialNumber: data.officialNumber,
      status: data.status,
      designation: data.designation,
      telephone: data.telephone,
      role: data.role,
      profileImage: data.profileImage,
      signatureImage: data.signatureImage,
    },
  });
}

export function uploadImage(data) {
  return request({
    url: "/users/upload_image/" + data.idNo,
    method: "POST",
    data: {
      profile: data.profile,
      signature: data.signature,
    },
  });
}
export function updateUser(data) {
  return request({
    url: "/users/" + data.idNo,
    method: "put",
    data: {
      banglaName: data.banglaName,
      englishName: data.englishName,
      grade: data.grade,
      class: data.class,
      idNo: data.idNo,
      batchNo: data.batchNo,
      nid: data.nid,
      cadre: data.cadre,
      workingArea: data.workingArea,
      section: data.section,
      fatherName: data.fatherName,
      motherName: data.motherName,
      dateOfJoin: data.dateOfJoin,
      dateOfBirth: data.dateOfBirth,
      prlStartDate: data.prlStartDate,
      branch: data.branch,
      maritalStatus: data.maritalStatus,
      highestEducationLevel: data.highestEducationLevel,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      personalMail: data.personalMail,
      officialMail: data.officialMail,
      personalNumber: data.personalNumber,
      officialNumber: data.officialNumber,
      status: data.status,
      designation: data.designation,
      telephone: data.telephone,
      role: data.role,
      profileImage: data.profileImage,
      signatureImage: data.signatureImage,
    },
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
export function deleteRole(data) {
  return request({
    url: "/role/removeFromUser/" + data.id,
    method: "post",
    data: {
      role: data.role,
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
export function viewUserLogsPagination(page) {
  return request({
    url: "/access_log/page/" + page,
    method: "GET",
  });
}

export function notification(user_id) {
  return request({
    url: "/notification/" + user_id,
    method: "get",
  });
}
export function notificationSeen(id) {
  return request({
    url: "/notification/" + id,
    method: "put",
  });
}
