<template>
  <b-row>
    <b-col cols="12" class="py-4">
      <b-table striped hover :items="data">
        <template #cell(id)="row">
          {{ row.index + 1 }}
        </template>
      </b-table>
    </b-col>
    <b-col class="text-end">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="getUserLogs(1)"
            >
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </button>
          </li>
          <ul
            class="pagination"
            v-for="(page, index) in totalpages"
            :key="index"
          >
            <li class="page-item">
              <button
                class="btn btn-sm border rounded btn-white page-link"
                @click="getUserLogs(page)"
              >
                {{ page }}
              </button>
            </li>
          </ul>
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="getUserLogs(totalpages)"
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      totalpages: null,
      page: null,
    };
  },
  created() {
    this.getUserLogs(1);
  },
  methods: {
    async getUserLogs(item) {
      const res = await this.$store.dispatch(
        "userStore/viewUserLogsPagination",
        item
      );
      this.data = res.logs;
      this.totalpages = res.totalpages;
    },
  },
};
</script>
