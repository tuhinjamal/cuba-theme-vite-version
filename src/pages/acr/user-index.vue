<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <list-table
        class="my-3"
        :tableData="list"
        :tableLabel="fields"
        title="ব্যবহারকারীর ব্যক্তিগত চলমান অনুরোধের বর্তমান অবস্থান "
        @reload="viewAllNonGazzetedAcr"
      />
      <list-table
        class="my-3"
        :tableData="evaluated"
        :tableLabel="fields"
        title="ব্যবহারকারীর ব্যক্তিগত মুল্যায়িত  অনুরোধ "
        @reload="viewAllNonGazzetedAcr"
      />
    </b-col>
  </b-row>
</template>
<script>
import { getLogedInUser } from "@/utils/auth";

import listTable from "./acr-components/user-table.vue";
export default {
  data() {
    return {
      logedInUser: JSON.parse(getLogedInUser()),

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
      evaluated: [],
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
          label: "আবেদনের অবস্থা ",
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
          if (res.status == 200) {
            this.acrListNonGazzeted = res.data;
            if (this.acrListNonGazzeted.length > 0) {
              this.list = this.acrListNonGazzeted.filter(
                (element) =>
                  element.userIdNo == this.logedInUser.user_id &&
                  element.status !== "done"
              );
              this.evaluated = this.acrListNonGazzeted.filter(
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
<style scoped>
.link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333339;
}
</style>
