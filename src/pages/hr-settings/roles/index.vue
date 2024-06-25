<template>
  <b-row>
    <b-col cols="12" class="mt-3">
      <div class="d-flex flex-row justify-content-start">
        <!-- <b-link to="/create-role" class="btn btn-dark mt-4"
          >রোল যোগ করুন
          <span>
            <img
              src="../../../assets/images/ict-acr-images/acr-section/plus-circle.png"
              alt="add"
            />
          </span>
        </b-link> -->
        <b-link to="/user-role" class="btn btn-info text-white mt-4 ms-2"
          >ইউজার রোল
        </b-link>
      </div>
      <b-table striped hover :items="items" :fields="fields" class="mt-5">
        <template #cell(id)="row">
          {{ row.index + 1 }}
        </template>
        <!-- <template #cell(action)="row">
          <b-link
            :to="`/role-view/${row.item.id}`"
            class="btn btn-sm bg-white shadow-lg rounded border-light my-1 ms-1"
          >
            <img
              src="../../../assets/images/ict-acr-images/acr-section/eye-icon.png"
              alt=""
            />
          </b-link>
          <button
            class="btn btn-sm btn-danger ms-1 p-1"
            @click.prevent="removeData(row.item.id)"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </template> -->
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      permissions: [],
      selected: [],
      fields: [
        {
          key: "id",
          label: "নং",
          sortable: true,
        },
        {
          key: "name",
          label: "রোল ",
          sortable: true,
        },
        // {
        //   key: "action",
        //   label: "রোল সম্পাদন করুন ",
        // },
      ],
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    getRoles() {
      this.$store
        .dispatch("rolePermission/viewRoles")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    removeData(item) {
      this.$store
        .dispatch("rolePermission/deleteRole", item)
        .then((res) => {
          if (res.status == 200) {
            this.getRoles();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
