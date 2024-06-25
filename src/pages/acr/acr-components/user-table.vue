<template>
  <div>
    <b-row class="mx-1">
      <b-col class="">
        <h3 class="m-0 p-0 filter-title mb-2">
          {{ title }}
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
            <p
              v-if="row.item.status == 'iro'"
              class="btn btn-sm bg-white shadow shadow-lg text-center status-section text-black"
            >
              IRO - {{ row.item.iroName }}<br />({{ row.item.iro }})
            </p>
            <p
              v-if="row.item.status == 'cro'"
              class="btn btn-sm bg-white shadow shadow-lg text-center status-section text-black"
            >
              CRO-{{ row.item.croName }}<br />({{ row.item.cro }})
            </p>
            <p
              v-if="row.item.status == 'user'"
              class="btn btn-sm bg-white text-danger shadow shadow-lg text-center status-section"
            >
              Returned
            </p>
            <p
              v-if="row.item.status == 'done'"
              class="btn btn-sm bg-white shadow shadow-lg text-center evaluated text-success"
            >
              Evaluated & DoCR
            </p></template
          >
        </b-table>

        <div class="text-center">
          <h3 v-if="tableData.length == 0" class="text-muted mt-1">
            আপনার কোন এ সি আর অনুরোধ নেই !
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
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      selected: null,
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
.status-section {
  width: 200px !important;
  display: block !important;
}
.evaluated {
  width: 150px !important;
  display: block !important;
}
</style>
