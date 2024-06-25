<template>
  <li class="onhover-dropdown">
    <div class="notification-box">
      <svg>
        <use
          href="@/assets/svg/icon-sprite.svg#notification"
          @click="notification_open()"
        ></use>
      </svg>
      <span
        v-if="logedInUserNotification && logedInUserNotification.length > 0"
        class="badge rounded-pill badge-secondary"
      >
        <!-- {{ logedInUserNotification.length }} -->
        {{ notificationCount.length }}
      </span>
      <span v-else class="badge rounded-pill badge-secondary"> 0 </span>
    </div>
    <div class="onhover-show-div notification-dropdown">
      <h6 class="f-18 mb-0 dropdown-title">Notitications</h6>
      <!--   :class="notification.viewed =true{b-l-success border-4}" -->
      <ul>
        <li
          v-for="(notification, index) in logedInUserNotification"
          :key="index"
          :class="
            notification.viewed
              ? 'b-l-success border-4'
              : 'b-l-warning border-4'
          "
          @click="seenNotificationData(notification)"
        >
          <p>
            {{ notification.message }}
            <span class="font-danger">
              {{ getHumanDate(notification.createdAt) }}
            </span>
          </p>
        </li>
      </ul>
      <div class="text-center py-4">
        <a class="f-w-700" href="#">Check all</a>
      </div>
    </div>
  </li>
</template>

<script>
import { getLogedInUser } from "../../utils/auth";
import moment from "moment";
import { io } from "socket.io-client";

export default {
  name: "Notifications",
  data() {
    return {
      notificationCount: [],
      logedInUserNotification: [],
      notification: false,
      getLogedInUser: JSON.parse(getLogedInUser()),
      read: "",
      socket: null,
      // shared worker
      broadcastChannel: "",
      worker: "",
      sharedWorkerResponse: "",
    };
  },
  created() {
    this.getNotificationData();
  },

  mounted() {
    try {
      // shared worker
      const user = JSON.parse(localStorage.getItem("User"));
      //console.log("check ", user.user_id);
      this.worker = new SharedWorker("./shared-worker.js");

      const id = uuid.v4();
      this.worker.port.start();
      // Set initial web socket state to connecting. We'll modify this based
      // on events.
      let webSocketState = WebSocket.CONNECTING;

      // Set up the broadcast channel to listen to web socket events.
      // This is also similar to above handler. But the handler here is
      // for events being broadcasted to all the tabs.
      this.broadcastChannel = new BroadcastChannel("WebSocketChannel");

      // this.worker.port.postMessage({ type: "connect", user: user.user_id });

      this.broadcastChannel.addEventListener("message", (event) => {
        console.log(event.data, "msg list here");

        if (event.data == "logout") {
          this.$router.push("/login");
        }

        switch (event.data.type) {
          case "WSState":
            webSocketState = event.data.state;
            break;
          case "message":
            //handleBroadcast(event.data);
            // console.log("Message paic", event.data.data);
            break;

          case "notification":
            this.getNotificationData();
            break;
        }
      });
      this.worker.port.postMessage({
        // Include the sender information as a uuid to get back the response
        type: "sendMsg",
        data: this.getLogedInUser.user_id,
      });
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
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

      this.logedInUserNotification = res.reverse();
      this.notificationCount = this.logedInUserNotification.filter(
        (element) => element.viewed == false
      );
    },

    async seenNotificationData(item) {
      // console.log("check item", item);
      let res = await this.$store.dispatch(
        "userStore/notificationSeen",
        item.id
      );
      await this.getNotificationData();
    },
  },
};
</script>
