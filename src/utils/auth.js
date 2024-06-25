const Token = "Admin-Token";
const LogedInEmpId = "LogedInEmpId";
const LogedInPersonnelId = "LogedInPersonnelId";

export function getToken() {
  return localStorage.getItem(Token);
}

export function setToken(token) {
  return localStorage.setItem(Token, token);
}

export function removeToken() {
  return localStorage.removeItem(Token);
}

export function getLogedInEmpId() {
  return localStorage.getItem(LogedInEmpId);
}

export function setLogedInEmpId(id) {
  return localStorage.setItem(LogedInEmpId, id);
}

export function removeLogedInEmpId() {
  return localStorage.removeItem(LogedInEmpId);
}

export function getLogedInPersonnelId() {
  return localStorage.getItem(LogedInPersonnelId);
}

export function setLogedInPersonnelId(id) {
  return localStorage.setItem(LogedInPersonnelId, id);
}

export function removeLogedInPersonnelId() {
  return localStorage.removeItem(LogedInPersonnelId);
}

export function getLogedInUser() {
  return localStorage.getItem("User");
}

export function setLogedInUserInfo(userInfo) {
  return localStorage.setItem("UserInfo", userInfo);
}
export function getLogedInUserInfo() {
  return localStorage.getItem("UserInfo");
}
export function setNotification(Notification) {
  return localStorage.setItem("Notification", Notification);
}
export function getNotification() {
  return localStorage.getItem("Notification");
}

// role set
export function setUserRole(userROle) {
  return localStorage.setItem("userROle", userROle);
}
export function getUserRole() {
  return localStorage.getItem("userROle");
}
