<template>
  <div>
    <b-row class="mt-4">
      <b-col cols="12" md="8"
        ><p class="m-0 p-0 filter-title">
          অনুরোধ তালিকা (মূল্যায়ন বাকি || গেজেটেড অফিসার)
        </p></b-col
      >
      <b-col cols="12" md="4">
        <b-row>
          <b-col cols="12" md="6" class="d-flex align-items-center">
            <label for="" class="me-1">রেকর্ড</label>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-col>
          <b-col cols="12" md="6" class="mt-2 mt-lg-0">
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <b-row class="border rounded mx-1">
      <b-col class="pt-4">
        <b-table
          responsive
          striped
          hover
          :items="tableData"
          :fields="tableLabel"
        >
          <template #cell(action)="">
            <b-link
              to="acr/evaluate-acr"
              class="btn btn-light shadow-lg border-light"
            >
              মূল্যায়ন
            </b-link>
          </template>
        </b-table>
        <div v-if="$route.name !== 'view-more'" class="d-block text-center">
          <b-link class="link" to="/acr/view-more">আরো দেখুন</b-link>
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
  components: {},
};
</script>
