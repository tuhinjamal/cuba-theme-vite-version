let marged = [];
let arr = [];
let experiment = {};
let data = JSON.parse(localStorage.getItem("UserInfo"));
if (data !== null) {
  data.Roles.forEach((element) => {
    arr.push(element.permissions);
  });
  arr.forEach((ar) => {
    marged = marged.concat(ar);
  });

  const unique = [...new Set(marged.map((item) => item.name))];

  const valueStore = [];

  // this is end of experiment
  experiment = {
    mounted(el, binding, vnode) {
      valueStore.push(binding.value);
      if (unique.length > 0) {
        for (let i = 0; i < valueStore.length; i++) {
          if (unique.find((e) => e === valueStore[i])) {
          } else {
            if (
              el &&
              el.parentNode &&
              vnode.props.permission === valueStore[i]
            ) {
              el.parentNode.removeChild(el);
            }
          }
        }
      } else {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    },
  };
}
export { experiment };
