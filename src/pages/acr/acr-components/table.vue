<template>
  <div>
    <b-row class="mx-1">
      <b-col class="">
        <h3 class="m-0 p-0 filter-title mb-2">
          অনুরোধ তালিকা (মূল্যায়িত || নন গেজেটেড অফিসার)
        </h3>
        <b-table
          responsive
          :items="tableData"
          :fields="tableLabel"
          head-variant="dark"
          striped
        >
          <template #cell(name)="row">
            <p>
              {{ row.item.name }}
            </p>
          </template>
          <template #cell(userIdNo)="row">
            <p>
              {{ row.item.userIdNo }}
            </p>
          </template>
          <template #cell(designation)="row">
            <p>
              {{ row.item.designation }}
            </p>
          </template>
          <template #cell(deadline)="row">
            <p>
              {{ getHumanDateWithoutTime(row.item.acrStart) }}
              -
              {{ getHumanDateWithoutTime(row.item.acrEnd) }}
            </p>
          </template>
          <template #cell(createdAt)="row">
            <p>
              {{ getHumanDate(row.item.createdAt) }}
            </p>
          </template>
          <template #cell(action)="row">
            <b-link
              :to="`/print-non-gazzeted-acr/${row.item.id}`"
              class="btn btn-sm bg-white shadow shadow-lg ms-1"
            >
              <i class="fa fa-print text-black" aria-hidden="true"></i>
            </b-link>
            <b-link
              :to="`/detail-non-gazzeted-acr/${row.item.id}`"
              class="btn btn-sm bg-white shadow-lg btn-section text-black ms-1"
            >
              বিস্তারিত
            </b-link>
          </template>
        </b-table>
        <div class="text-center">
          <h3 v-if="tableData.length == 0" class="text-muted mt-1">
            আপনার কোন মূল্যায়িত এ সি আর নেই !
          </h3>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";
import { getLogedInUser } from "@/utils/auth";
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
  methods: {
    getHumanDate: function (date) {
      return moment(date).locale("en-US").format("YYYY-MM-DD hh:mm A");
    },
    getHumanDateWithoutTime: function (date) {
      return moment(date, "YYYY-MM-DD").locale("en-US").format("DD/MM/YYYY");
    },
    removeData(item) {
      this.$store
        .dispatch("acrStore/deleteNonGazzetedACR", item)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.btn-section {
  width: 90px !important;
}
</style>
