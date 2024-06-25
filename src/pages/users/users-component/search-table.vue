<template>
  <div>
    <!-- this is search table -->
    <b-table
      v-if="searchedList.length > 0"
      id="report-table"
      class="text-start"
      responsive
      :items="searchedList"
      :fields="fields"
      :per-page="perPage"
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
  </div>
</template>

<script>
export default {
  props: {
    searchedList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ক্রম",
          sortable: true,
        },
        {
          key: "idNo",
          label: "আইডি",
          sortable: true,
        },
        {
          key: "englishName",
          label: "নাম",
          sortable: true,
        },
        {
          key: "grade",
          label: "গ্রেড / শ্রেনী",
        },

        {
          key: "designation",
          label: "পদবী",
        },

        {
          key: "personalNumber",
          label: "ব্যাক্তিগত নাম্বার",
        },
        {
          key: "personalMail",
          label: "ব্যাক্তিগত মেইল",
        },
        {
          key: "action",
          label: "সম্পাদন",
        },
      ],
    };
  },
};
</script>
