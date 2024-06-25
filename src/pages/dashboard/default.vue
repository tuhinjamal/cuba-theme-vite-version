<template>
  <b-row>
    <b-col cols="12" class="">
      <Breadcrumbs :title="$route.name" class="mt-3" />
    </b-col>

    <b-col cols="12">
      <form-card />
    </b-col>

    <b-col cols="12" md="6">
      <div class="text-start bg-white shadow shadow-lg rounded mt-3">
        <chart />
      </div>
    </b-col>
    <b-col cols="12" md="6"><percentage /></b-col>

    <b-col cols="12" class="mb-5">
      <div class="border rounded bg-white">
        <non-gazzeted-acr-IRO-list
          v-if="
            logedInUserRole?.IRO === true || logedInUserRole?.Admin === true
          "
          :tableData="IROlist"
          :tableLabel="fields"
          class="my-3"
        />
        <non-gazzeted-acr-CRO-list
          v-if="
            logedInUserRole?.CRO === true || logedInUserRole?.Admin === true
          "
          :tableData="CROlist"
          :tableLabel="fields"
          class="my-3"
        />
        <non-gazzeted-acr-list
          v-if="
            logedInUserRole?.CRO === true || logedInUserRole?.Admin === true
          "
          :tableData="list"
          :tableLabel="fields"
          class="my-3"
        />
      </div>
    </b-col>
    <b-col cols="12" class="mb-5">
      <div class="border rounded bg-white">
        <user-ACR-list
          v-if="
            logedInUserRole?.User === true ||
            logedInUserRole?.Admin === true ||
            logedInUserRole?.User === applicant
          "
          :tableData="pendingList"
          :tableLabel="fields"
          title="ব্যবহারকারীর ব্যক্তিগত চলমান অনুরোধের বর্তমান অবস্থান "
          class="my-3"
        />
        <user-ACR-list
          v-if="
            logedInUserRole?.User === true ||
            logedInUserRole?.Admin === true ||
            logedInUserRole?.User === applicant
          "
          :tableData="evaluatedList"
          :tableLabel="fields"
          title="ব্যবহারকারীর ব্যক্তিগত মুল্যায়িত  অনুরোধ "
          class="my-3"
        />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import formCard from "./default/formCard.vue";
import chart from "./default/chart.vue";
import percentage from "./default/percentage.vue";
import nonGazzetedAcrList from "@/pages/acr/acr-components/table.vue";
import nonGazzetedAcrIROList from "@/pages/acr/acr-components/iro-table.vue";
import nonGazzetedAcrCROList from "@/pages/acr/acr-components/cro-table.vue";
import userACRList from "@/pages/acr/acr-components/user-table.vue";

import {
  getLogedInUser,
  getLogedInUserInfo,
  setNotification,
  setUserRole,
  getUserRole,
} from "@/utils/auth";

export default {
  components: {
    formCard,
    chart,
    percentage,
    nonGazzetedAcrList,
    nonGazzetedAcrIROList,
    nonGazzetedAcrCROList,
    userACRList,
  },
  data() {
    return {
      user: JSON.parse(getLogedInUser()),
      userInfo: JSON.parse(getLogedInUserInfo()),
      logedInUser: JSON.parse(getLogedInUser()),
      logedInUserRole: JSON.parse(getUserRole()),
      selected: "1",
      options: [
        { text: "অনুস্বাক্ষর ", value: "1" },
        { text: "প্রতিস্বাক্ষর", value: "2" },
        { text: "মূল্যায়িত", value: "3" },
      ],
      role: {
        Admin: false,
        hr: false,
        User: false,
        IRO: false,
        CRO: false,
        access_log: false,
        applicant: false,
        Reporter_assign: false,
        Role: false,
      },
      list: [],
      IROlist: [],
      CROlist: [],
      evaluatedList: [],
      pendingList: [],
      fields: [
        {
          key: "name",
          label: "আবেদনকারী",
          sortable: true,
        },
        {
          key: "userIdNo",
          label: "আইডি",
          sortable: true,
        },
        {
          key: "designation",
          label: "পদবী",
        },
        {
          key: "deadline",
          label: "প্রতিবেদনের সময়সীমা ",
        },
        {
          key: "createdAt",
          label: "তারিখ",
        },
        {
          key: "action",
          label: "একশন",
        },
      ],
    };
  },
  created() {
    this.viewAllNonGazzetedAcr();
  },
  mounted() {
    // this.getUserROle();
  },
  methods: {
    getUserROle() {
      this.userInfo.Roles.forEach((e) => {
        if (e.name === "Admin") {
          return (this.role.Admin = true);
        }
        if (e.name === "hr") {
          return (this.role.hr = true);
        }
        if (e.name === "User") {
          return (this.role.User = true);
        }
        if (e.name === "IRO") {
          return (this.role.IRO = true);
        }
        if (e.name === "CRO") {
          return (this.role.CRO = true);
        }

        if (e.name === "access_log") {
          return (this.role.access_log = true);
        }
        if (e.name === "applicant") {
          return (this.role.applicant = true);
        }
        if (e.name === "Reporter_assign") {
          return (this.role.Reporter_assign = true);
        }
        if (e.name === "Role") {
          return (this.role.Role = true);
        }
      });
      setUserRole(JSON.stringify(this.role));
    },
    viewAllNonGazzetedAcr(name) {
      this.$store
        .dispatch("acrStore/viewAllNonGazzetedAcr")
        .then((res) => {
          if (res.status == 200) {
            this.acrListNonGazzeted = res.data;
            if (this.acrListNonGazzeted && this.acrListNonGazzeted.length > 0) {
              this.IROlist = this.acrListNonGazzeted.filter(
                (element) =>
                  element.status == "iro" &&
                  element.iro == this.logedInUser.user_id
              );
              this.CROlist = this.acrListNonGazzeted.filter(
                (element) =>
                  element.status == "cro" &&
                  element.iro == this.logedInUser.user_id
              );
              this.list = this.acrListNonGazzeted.filter(
                (element) =>
                  element.status == "done" &&
                  element.cro == this.logedInUser.user_id
              );
              this.pendingList = this.acrListNonGazzeted.filter(
                (element) =>
                  element.userIdNo == this.logedInUser.user_id &&
                  element.status !== "done"
              );
              this.evaluatedList = this.acrListNonGazzeted.filter(
                (element) =>
                  element.userIdNo == this.logedInUser.user_id &&
                  element.status == "done"
              );
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
