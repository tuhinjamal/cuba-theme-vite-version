// import { service } from "./utils/request";
// import { io } from "socket.io-client";
// import { getLogedInUser } from "./utils/auth";
// let logedInUser = JSON.parse(getLogedInUser());

// const customHeaders = {
//   user_id: logedInUser.user_id,
// };
// const socket = io("ws://192.168.0.226:8000", {
//   extraHeaders: customHeaders,
// });

// socket.on("connect", () => {
//   console.log("connected ");
// });

// socket.on("noti", (data) => {
//   console.log("get data nodi", data);
// });

// socket.on("noti2", (data) => {
//   console.log("get data nodi", data);
// });

// socket.on("likeupdate", (data) => {
//   console.log("get data on connect", data);
// });

// let socket_id = null;

// socket.on("connect", () => {
//   console.log("connected");

//   socket_id = socket.id;

//   console.log(socket_id);
// });

// const SocketPlugin = {
//   install: (app) => {
//     app.config.globalProperties.$socket = socket;

//     app.config.globalProperties.$socket_id = 0;

//     setTimeout(() => {
//       app.config.globalProperties.$socket_id = socket_id;
//     }, 1000);
//   },
// };

// export default SocketPlugin;
