<template>
  <div>
    <b-row class="border rounded mx-1 bg-white">
      <b-col class="pt-4">
        <div class="mx-1 text-end">
          <b-link
            to="/all-user-print-preview"
            class="button-section btn btn-sm btn-dark mb-2"
          >
            Print user list</b-link
          >
        </div>
        <!-- this is user list table -->
        <b-table
          v-if="searchedList.length === 0"
          id="report-table"
          class="text-start"
          responsive
          :items="tableData"
          :fields="tableLabel"
        >
          <template #cell(id)="row">
            {{ row.index + 1 }}
          </template>
          <template #cell(grade)="row">
            <div class="text-center">
              <p class="m-0 p-0">{{ row.index + 1 }}</p>
            </div>
          </template>
          <template #cell(action)="row">
            <div class="row">
              <div class="col-12 col-md-6 text-black">
                <b-link
                  v-if="$route.fullPath == '/users'"
                  :to="`/user-print/${row.item.idNo}`"
                  class="btn btn-sm btn-white shadow-lg rounded border-light"
                >
                  <img
                    src="../../../assets/images/ict-acr-images/acr-section/eye-icon.png"
                    alt=""
                  />
                </b-link>

                <b-link
                  v-if="$route.fullPath == '/user-role'"
                  :to="`/view-user-role/${row.item.idNo}`"
                  class="btn btn-sm bg-white shadow-lg rounded border-light"
                >
                  <img
                    src="../../../assets/images/ict-acr-images/acr-section/eye-icon.png"
                    alt=""
                  />
                </b-link>
              </div>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import searchTable from "./search-table.vue";
export default {
  components: {
    searchTable,
  },
  props: {
    tableLabel: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      list: [],
      search: "",
      searchedList: [],
      page: null,
      totalpages: null,
      totalRows: null,
      currentPage: 1,
      perPage: 10,
    };
  },

  methods: {
    removeData(item) {
      this.$store
        .dispatch("userStore/deleteUserById", item)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
    liveSearch(data, currentPage) {
      let item = {
        data: data,
        page: currentPage,
      };
      console.log("pegination ", item);

      this.$store
        .dispatch("userStore/search", item)
        .then((res) => {
          this.searchedList = res.users;
          this.totalpages = res.totalpages;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.add-report {
  background-color: #333339 !important;
  color: white !important;
}
</style>
