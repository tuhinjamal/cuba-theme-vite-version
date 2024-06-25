<template>
  <div>
    <b-row class="px-1 my-2">
      <b-col cols="12" md="2" class="d-flex align-items-center">
        <label for="" class="me-1 my-1">জোন</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="12" md="2" class="d-flex align-items-center">
        <label for="" class="me-1 my-1">পদবী</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="12" md="3" class="d-flex align-items-center">
        <label for="" class="me-1 my-1">অনুরোধের সময়</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="12" md="2" class="d-flex align-items-center">
        <label for="" class="me-1 my-1">স্ট্যাটাস</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="12" md="3" class="d-flex align-items-center">
        <label for="" class="me-1 my-1">দেখুন</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
    </b-row>
    <b-row class="border rounded mx-1">
      <b-col class="pt-4">
        <div class="py-2">
          <b-link class="btn add-report">
            <p class="m-0 p-0">
              গোপন রিপোর্ট
              <span
                ><img
                  src="../../../assets/images/ict-acr-images/acr-section/plus-circle.png"
                  alt=""
              /></span>
            </p>
          </b-link>
        </div>
        <b-table
          id="report-table"
          class="text-center"
          responsive
          striped
          hover
          :items="tableData"
          :fields="tableLabel"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template #cell(action)="">
            <b-link
              class="btn btn-sm bg-white shadow-lg rounded border-light my-1 ms-1"
            >
              <img
                src="../../../assets/images/ict-acr-images/acr-section/eye-icon.png"
                alt=""
              />
            </b-link>
            <b-link
              class="btn btn-sm bg-white shadow-lg rounded border-light my-1 ms-1"
            >
              <img
                src="../../../assets/images/ict-acr-images/acr-section/print-icon.png"
                alt=""
              />
            </b-link>
          </template>
        </b-table>
        <div>
          <b-pagination
            align="end"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="report-table"
          ></b-pagination>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    tableLabel: {
      type: Object,
      default: () => ({}),
    },
    tableData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      // pagination starts here
      perPage: 3,
      currentPage: 1,
      // end of pagination data
      selected: null,
      options: [
        { value: null, text: "প্রতিস্বাক্ষরকারী" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  computed: {
    rows() {
      return this.tableData.length;
    },
  },
};
</script>
<style scoped>
.add-report {
  background-color: #333339;
  color: white;
}
</style>
