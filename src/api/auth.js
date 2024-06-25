import request from "../utils/request";

// api call for register
export function register(data) {
  return request({
    url: "/authapi/api/auth/register",
    method: "post",
    data,
  });
}

// api call for login
export function login(data) {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
}

// api call for logout
export function logout() {
  return request({
    url: "authapi/api/auth/logout",
    method: "post",
  });
}

// api call for verifyOTP
export function verifyOTP(data) {
  return request({
    url: "/auth/otp",
    method: "post",
    data,
  });
}

// api call for getLogedInUser
export function getLogedInUser(EmpId) {
  return request({
    url: "api/Personnel/by-id",
    method: "get",
    params: { EmpId: EmpId },
  });
}
