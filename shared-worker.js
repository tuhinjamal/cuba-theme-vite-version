let userID = "";
const connectivity = false;
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.3/socket.io.js"
);

// socket.on("connect", () => {
//   broadcastChannel.postMessage({
//     type: "WSState",
//     state: true,
//     data: "hello connect",
//   });
// });

// socket.on("close", () => {
//   broadcastChannel.postMessage({ type: "WSState", state: false });
// });

// // Create a broadcast channel to notify about state changes
const broadcastChannel = new BroadcastChannel("WebSocketChannel");

const idToPortMap = {};

broadcastChannel.addEventListener("message", (data) => {
  if (tata) {
    broadcastChannel.postMessage("logout");
  }
});

onconnect = (e) => {
  try {
    const broadcastChannel = new BroadcastChannel("WebSocketChannel");
    const port = e.ports[0];

    // broadcastChannel.postMessage("hello hunny bunny");
    // console.log("hello");
    port.onmessage = (msg) => {
      if (msg.data.type == "sendMsg") {
        userID = msg.data.data;
        broadcastChannel.postMessage(msg.data);
        let socket = io("wss://api2.inflack.net", {
          extraHeaders: {
            user_id: userID,
          },
        });
        // socket.on("likeupdate", (data) => {
        //   broadcastChannel.postMessage({
        //     type: "notification",
        //     data: data,
        //   });
        // });
        socket.on("noti", (data) => {
          broadcastChannel.postMessage({ type: "notification", data: data });
        });
      }
      port.onmessage = (msg) => {
        if (msg.data.type == "connect") {
          userID = msg.data.data;
          broadcastChannel.postMessage(msg.data);
          let socket = io("wss://api2.inflack.net", {
            extraHeaders: {
              user_id: userID,
            },
          });
          //   socket.on("connect", () => {
          //     broadcastChannel.postMessage({
          //       type: "WSState",
          //       state: true,
          //       connected: true,
          //     });
          //   });
          // socket.on("likeupdate", (data) => {
          //   broadcastChannel.postMessage({
          //     type: "notification",
          //     data: data,
          //   });
          // });
          socket.on("noti", (data) => {
            broadcastChannel.postMessage({
              type: "notification",
              data: data,
            });
          });
        }

        // Collect port information in the map
        idToPortMap[msg.data.from] = port;

        // Forward this message to the ws connection.
        //ws.send(JSON.stringify({ data: msg.data }));
      };

      // Collect port information in the map
      idToPortMap[msg.data.from] = port;

      // Forward this message to the ws connection.
      //ws.send(JSON.stringify({ data: msg.data }));
    };

    // We need this to notify the newly connected context to know
    // the current state of WS connection.
    post.start();
    // port.postMessage("hello");
  } catch (error) {
    console.log(error);
  }
  // Get the MessagePort from the event. This will be the
  // communication channel between SharedWorker and the Tab
};

// const allPorts = [];

// setInterval(() => {
//   broadcastChannel.postMessage("hello hunny bunny");
// }, 1000);
