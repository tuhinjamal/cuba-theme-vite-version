let data = JSON.parse(localStorage.getItem("UserInfo"));
const unique = new Map();
if (data !== null) {
  data.Roles.forEach((element) => {
    element.permissions.forEach((per) => {
      unique.set(per.name, 1);
    });
  });
}

const roles = {
  mounted(el, binding) {
    if (unique.size > 0) {
      if (unique.has(binding.value)) {
        el.style.color = "green";
      } else {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    } else {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  },
};
export { roles };
