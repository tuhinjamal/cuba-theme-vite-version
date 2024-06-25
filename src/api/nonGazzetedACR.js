import request from "../utils/request";
// api call for non gazzeted acr reques

// non gazzeted related api section
export function viewAllNonGazzetedAcr(data) {
  return request({
    url: "/eleventhForm",
    method: "GET",
    data,
  });
}
export function requestNonGazzetedACR(data) {
  return request({
    url: "/eleventhForm",
    method: "POST",
    data: data,
  });
}
export function getNonGazzetedAcrByID(id) {
  return request({
    url: "/eleventhForm/" + id,
    method: "get",
  });
}
export function updateNonGazzetedACR(data) {
  return request({
    url: "/eleventhForm/" + data.id,
    method: "put",
    data: {
      name: data.name,
      userIdNo: data.userIdNo,
      highestEducationLevel: data.highestEducationLevel,
      dateOfBirth: data.dateOfBirth,
      joiningDate: data.joiningDate,
      departmentExamPass: data.departmentExamPass,
      departmentExamDate: data.departmentExamDate,
      jobStatus: data.jobStatus,
      acrStart: data.acrStart,
      acrEnd: data.acrEnd,
      language: data.language,
      specialTraining: data.specialTraining,
      designation: data.designation,
      salary: data.salary,
      iro: data.iro,
      cro: data.cro,
      userId: data.userId,
      status: data.status,
    },
  });
}
// get cro return value
export function getCroReturnByID(data) {
  return request({
    url: "/eleventhForm/cro_to_iro/" + data.id,
    method: "put",
    data: {
      status: data.status,
      route: data.route,
      comment: data.comment,
    },
  });
}
export function deleteNonGazzetedACR(id) {
  return request({
    url: "/eleventhForm/" + id,
    method: "delete",
  });
}
// end of non gazzeted related api section
export function getIROByID(user_id) {
  return request({
    url: "/reporter/iro/" + user_id,
    method: "get",
  });
}

// assesment section

export function updateNonGazzetedACRAssesment(data) {
  return request({
    url: "eleventh_assessment/update/" + data.id,
    method: "put",
    data: data.assesmentForm,
  });
}

export function createNonGazzetedACRAssesment(data) {
  return request({
    url: "eleventh_assessment/create/" + data.id,
    method: "POST",
    data: data.assesmentForm,
  });
}
export function getNonGazzetedACRAssesment(id) {
  return request({
    url: "eleventh_assessment/" + id,
    method: "get",
  });
}
// ACR IRO evaluation section
export function createNonGazzetedIROEvaluation(data) {
  return request({
    url: "iro_evaluation/" + data.id,
    method: "POST",
    data: {
      evaluation_value: data.evaluation_value,
      user_id: data.user_id,
      decision: data.decision,
      cro: data.cro,
      cro_date: data.cro_date,
    },
  });
}
export function getNonGazzetedIROEvaluationByID(id) {
  return request({
    url: "/iro_evaluation/" + id,
    method: "get",
  });
}
export function updateNonGazzetedIROEvaluation(data) {
  return request({
    url: "/iro_evaluation/" + data.form_id,
    method: "put",
    data: {
      user_id: data.user_id,
      evaluation_value: data.evaluation_value,
      decision: data.decision,
      cro: data.cro,
      cro_date: data.cro_date,
    },
  });
}
// ACR CRO evaluation section
export function createNonGazzetedCROEvaluation(data) {
  return request({
    url: "cro_evaluation/" + data.id,
    method: "POST",
    data: {
      evaluation: data.evaluation,
      comment: data.comment,
      cro: data.cro,
      cro_date: data.cro_date,
    },
  });
}
export function getNonGazzetedCROEvaluationByID(id) {
  return request({
    url: "/cro_evaluation/" + id,
    method: "get",
  });
}
export function updateNonGazzetedCROEvaluation(data) {
  return request({
    url: "/cro_evaluation/" + data.user_id,
    method: "put",
    data: {
      evaluation: data.evaluation,
      comment: data.comment,
      cro: data.cro,
      cro_date: data.cro_date,
    },
  });
}

export function getIroForUpdate(id) {
  return request({
    url: "/iro_evaluation/" + id,
    method: "get",
  });
}
