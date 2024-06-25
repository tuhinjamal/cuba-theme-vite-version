<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <list-table
        class="my-3"
        :tableData="list"
        :tableLabel="fields"
        @reload="viewAllNonGazzetedAcr"
      />
    </b-col>
  </b-row>
</template>
<script>
import { getLogedInUser, getLogedInUserInfo } from "@/utils/auth";

import listTable from "./acr-components/cro-table.vue";
export default {
  data() {
    return {
      logedInUser: JSON.parse(getLogedInUser()),
      LogedInUserInfo: JSON.parse(getLogedInUserInfo()),

      // Note `isActive` is left out and will not appear in the rendered table
      acrListNonGazzeted: [
        {
          name: "",
          userIdNo: "",
          designation: "",
          acrStart: "",
          acrEnd: "",
          createdAt: "",
        },
      ],
      list: [],
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
          label: "প্রতিবেদনের সময়সীমা",
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
  components: {
    listTable,
  },
  created() {
    const name = this.$route.name;
    this.viewAllNonGazzetedAcr(name);
  },
  methods: {
    viewAllNonGazzetedAcr(name) {
      this.$store
        .dispatch("acrStore/viewAllNonGazzetedAcr")
        .then((res) => {
          // if (res.status == 200) {
          //   this.acrListNonGazzeted = res.data;

          // }
          if (res.status == 200) {
            this.acrListNonGazzeted = res.data;
            // if (this.acrListNonGazzeted.length > 0) {
            //   this.list = this.acrListNonGazzeted.filter(
            //     (element) =>
            //       element.status == "cro" &&
            //       element.cro == this.logedInUser.user_id
            //   );
            // }
            if (this.acrListNonGazzeted && this.acrListNonGazzeted.length > 0) {
              // this.LogedInUserInfo.Roles.forEach((role) => {
              //   if (role.name == "Admin") {
              // this.list = this.acrListNonGazzeted.filter(
              //   (element) => element.status == "cro"
              // );
              // } else {
              this.list = this.acrListNonGazzeted.filter(
                (element) =>
                  element.status == "cro" &&
                  element.iro == this.logedInUser.user_id
              );
              //   }
              // });
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
<style scoped>
.link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333339;
}
</style>
