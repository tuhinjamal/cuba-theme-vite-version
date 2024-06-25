<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <iro-list />
      <!-- <cro-list />
      <evaluated-list /> -->
    </b-col>
  </b-row>
</template>

<script>
import evaluatedList from "./index.vue";
import iroList from "./iro-index.vue";
import croList from "./cro-index.vue";

export default {
  components: {
    evaluatedList,
    iroList,
    croList,
  },
};
</script>
