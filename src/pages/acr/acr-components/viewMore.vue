<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <Breadcrumbs main="ACR" title="List" />
    </b-col>
    <b-col cols="12" class="mt-4">
      <listTable
        class="my-3"
        :tableData="acrListNonGazzeted"
        :tableLabel="fields"
      />
    </b-col>
  </b-row>
</template>
<script>
import listTable from "./table.vue";
export default {
  data() {
    return {
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
          label: "প্রতিবেদনের তারিখসীমা",
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
    this.viewAllNonGazzetedAcr();
  },
  methods: {
    viewAllNonGazzetedAcr() {
      this.$store
        .dispatch("acrStore/viewAllNonGazzetedAcr")
        .then((res) => {
          if (res.status == 200) {
            this.acrListNonGazzeted = res.data;
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
