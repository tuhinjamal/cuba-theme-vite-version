export const isUserLoggedIn = () => {
  return (
    localStorage.getItem("UserInfo") &&
    localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
  );
};

export const getUserData = () => JSON.parse(localStorage.getItem("UserInfo"));

export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === "superadmin") return "/dashboard";
  if (userRole === "employee") return "/dashboard";
  if (userRole === "admin") return "/dashboard";
  if (userRole === "customer") return "/dashboard";
  return { name: "auth-login" };
};
