<template>
  <div>
    <b-row class="mx-1">
      <b-col>
        <h3 class="m-0 p-0 filter-title mb-2">
          অনুরোধ তালিকা (অনুস্বাক্ষর || নন গেজেটেড অফিসার)
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
            <!-- &&
                      loggedInUserRole.Admin == false &&
                      loggedInUserRole.IRO == true) ||
                    (loggedInUserRole.Admin == true &&
                      loggedInUserRole.IRO == true) -->
            <div
              class="row"
              v-if="
                loggedInUserRole.Admin !== true && loggedInUserRole.IRO == true
              "
            >
              <div class="col-12">
                <b-link
                  v-if="row.item.status === 'iro'"
                  :to="`/evaluate-acr/${row.item.id}`"
                  class="btn btn-sm bg-white btn-section shadow-lg text-black"
                >
                  অনুস্বাক্ষর
                </b-link>
              </div>
            </div>
            <div
              class="row"
              v-if="
                loggedInUserRole.Admin == true && loggedInUserRole.IRO == true
              "
            >
              <div class="col-12">
                <b-link
                  v-if="row.item.status === 'iro'"
                  :to="`/evaluate-acr/${row.item.id}`"
                  class="btn btn-sm bg-white btn-section shadow-lg text-black"
                >
                  অনুস্বাক্ষর
                </b-link>
              </div>
            </div>
          </template>
        </b-table>
        <div class="text-center">
          <h3 v-if="tableData.length == 0" class="text-muted mt-1">
            আপনার কোন অনুস্বাক্ষর আবেদন নেই !
          </h3>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { getUserRole } from "@/utils/auth";

import moment from "moment";
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
      irotableData: [],
      loggedInUserRole: JSON.parse(getUserRole()),
    };
  },
  methods: {
    getHumanDate: function (date) {
      // return moment(date).locale("bn-BD").format("YYYY-MM-DD HH:mm:ss");
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
