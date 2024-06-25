import { getLogedInUser } from "../../utils/auth";
import moment from "moment";

export default (await import("vue")).defineComponent({
  name: "Notifications",
  data() {
    return {
      // logedInUserNotification: JSON.parse(getNotification()),
      logedInUserNotification: [],
      notification: false,
      getLogedInUser: JSON.parse(getLogedInUser()),
      seen: "b-l-success border-4",
      unseenBg: "bg-white text-black",
      socket: null,
      // shared worker
      broadcastChannel: "",
      worker: "",
      workerResponse: "",
    };
  },
  created() {
    // this.getNotificationData();
  },

  // mounted() {
  //   try {
  //     // shared worker
  //     const user = JSON.parse(localStorage.getItem("User"));
  //     //console.log("check ", user.user_id);
  //     this.worker = new SharedWorker("sworker.js");
  //     console.log(this.worker, "ljdfslhj");
  //     const id = uuid.v4();
  //     this.worker.port.start();
  //     // Set initial web socket state to connecting. We'll modify this based
  //     // on events.
  //     let webSocketState = WebSocket.CONNECTING;
  //     this.worker.port.onmessage = (event) => {
  //       console.log(event, "event data");
  //       switch (event.data.type) {
  //         case "WSState":
  //           webSocketState = event.data.state;
  //           break;
  //         case "message":
  //           handleMessageFromPort(event.data);
  //           break;
  //       }
  //     };
  //     // this.worker.port.postMessage({
  //     //       // Include the sender information as a uuid to get back the response
  //     //       from: "from code ",
  //     //       //data: input,
  //     //     });
  //     // Set up the broadcast channel to listen to web socket events.
  //     // This is also similar to above handler. But the handler here is
  //     // for events being broadcasted to all the tabs.
  //     this.broadcastChannel = new BroadcastChannel("WebSocketChannel");
  //     this.worker.port.postMessage({ type: "connect", user: user.user_id });
  //     this.broadcastChannel.addEventListener("message", (event) => {
  //       // this.logedInUserNotification = event.data.data;
  //       console.log(event.data, "msg list here");
  //       if (event.data == "logout") {
  //         this.$router.push("/login");
  //       }
  //       switch (event.data.type) {
  //         case "WSState":
  //           webSocketState = event.data.state;
  //           break;
  //         case "message":
  //           //handleBroadcast(event.data);
  //           // console.log("Message paic", event.data.data);
  //           break;
  //         case "notification":
  //           this.getNotificationData();
  //           break;
  //       }
  //     });
  //     //Listen to broadcasts from server
  //     function handleBroadcast(data) {
  //       // console.log("This message is meant for everyone!");
  //       // console.log(data);
  //     }
  //     //Handle event only meant for this tab
  //     function handleMessageFromPort(data) {
  //       // console.log(`This message is meant only for user with id: ${id}`);
  //       // console.log(data);
  //     }
  //     //Use this method to send data to the server.
  //     function postMessageToWSServer(input) {
  //       // console.log(webSocketState, "Status");
  //       if (webSocketState === WebSocket.CONNECTING) {
  //         // console.log("Still connecting to the server, try again later!");
  //       } else if (
  //         webSocketState === WebSocket.CLOSING ||
  //         webSocketState === WebSocket.CLOSED
  //       ) {
  //         // console.log("Connection Closed!");
  //       } else {
  //         this.worker.port.postMessage({
  //           // Include the sender information as a uuid to get back the response
  //           from: id,
  //           data: input,
  //         });
  //       }
  //     }
  //     // Sent a message to server after approx 2.5 sec. This will
  //     // give enough time to web socket connection to be created.
  //     setInterval(() => console.log(webSocketState), 1000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  mounted() {
    this.worker = new Worker("./worker.js");
    this.worker.port.start(); // this will trigger the on connect event on the webthis.worker

    // this will also start the this.worker IF this is the first call!
    // recieve message from this.worker
    this.worker.port.addEventListener("message", (message) => {
      console.log(message);
    });

    // send a mesasge to the this.worker
    this.worker.port.postMessage(["I have a nice message for all"]);

    // Send a message to the worker
  },
  methods: {
    startWorker() {
      this.worker.port.postMessage({
        // Include the sender information as a uuid to get back the response
        type: "tata",
      });
    },

    notification_open() {
      this.getNotificationData();
      this.notification = !this.notification;
    },
    getHumanDate: function (date) {
      // return moment(date).locale("bn-BD").format("YYYY-MM-DD HH:mm:ss");
      return moment(date).locale("en-US").format("YYYY-MM-DD hh:mm A");
    },

    async getNotificationData() {
      console.log("notification called");
      let res = await this.$store.dispatch(
        "userStore/notification",
        this.getLogedInUser.user_id
      );

      this.logedInUserNotification = res;

      this.logedInUserNotification.forEach((e) => {
        if (e.viewed === false) {
          this.seen = "b-l-warning border-4";
          this.unseenBg = "bg-light text-black";
        }
      });
    },

    async seenNotificationData(item) {
      // console.log("check item", item);
      let res = await this.$store.dispatch(
        "userStore/notificationSeen",
        item.id
      );
    },
  },
});
