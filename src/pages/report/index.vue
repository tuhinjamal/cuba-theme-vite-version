<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <Breadcrumbs main="Dashboard" title="Dashboard" />
    </b-col>
    <b-col cols="12" class="mt-4">
      <list-table class="my-3" :tableData="items" :tableLabel="fields" />
    </b-col>
  </b-row>
</template>

<script>
import listTable from "./report-component/report-table.vue";
export default {
  components: {
    listTable,
  },
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table

      items: [
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib KhanHabib KhanHabib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
        {
          id: "NT001",
          name: "Habib Khan",
          designation: "Joint Secretary",
          division: "Budget Branch",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
          comment: "-/-",
        },
      ],

      fields: [
        {
          key: "id",
          label: "আইডি",
          sortable: true,
        },
        {
          key: "name",
          label: "অনুরোধকারী",
          sortable: true,
        },

        {
          key: "designation",
          label: "পদবী",
        },
        {
          key: "division",
          label: "বিভাগ/প্রকল্প",
        },
        {
          key: "deadline",
          label: "প্রতিবেদনের তারিখসীমা",
        },
        {
          key: "date",
          label: "রিপোর্ট তারিখ",
        },
        {
          key: "comment",
          label: "মন্তব্য",
        },
        {
          key: "action",
          label: "একশন",
        },
      ],
    };
  },
};
</script>
