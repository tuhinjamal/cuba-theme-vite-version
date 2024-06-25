<template>
  <b-row>
    <b-col cols="12" class="mt-3">
      <b-link to="/create-department" class="btn btn-dark mt-4">
        বিভাগ যোগ করুন
        <span>
          <img
            src="../../../assets/images/ict-acr-images/acr-section/plus-circle.png"
            alt="add"
          />
        </span>
      </b-link>
      <b-table
        head-variant="dark"
        striped
        :items="items"
        :fields="fields"
        class="mt-5"
      >
        <template #cell(id)="row">
          {{ row.index + 1 }}
        </template>
        <template #cell(action)="row">
          <b-link
            :to="`/department-view/${row.item.id}`"
            class="btn btn-sm btn-primary my-1 me-1"
          >
            <i class="fa fa-edit" aria-hidden="true"></i>
          </b-link>
          <button
            class="btn btn-sm btn-danger ms-1"
            @click.prevent="
              removeData(row.item.id);
              getDepartments();
            "
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button> </template
      ></b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: "id",
          label: "ক্রম",
          sortable: true,
        },
        {
          key: "name_bn",
          label: "বাংলা নাম",
          sortable: true,
        },
        {
          key: "name",
          label: "ইংরেজি ",
        },

        {
          key: "code",
          label: "কোড ",
        },
        {
          key: "action",
          label: "সম্পাদন",
        },
      ],
    };
  },
  created() {
    this.getDepartments();
  },
  methods: {
    getDepartments() {
      this.$store
        .dispatch("department/getDepartment")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeData(item) {
      this.$swal
        .fire({
          title: "আপনি কি নিশ্চিত ?",
          text: "আপনি ডিলিট করতে চান ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ডিলিট করুন ",
          cancelButtonText: "বন্ধ করুন ",
        })
        .then((result) => {
          this.$store
            .dispatch("department/deleteDepartmentById", item)
            .then((res) => {
              this.getDepartments();
            })
            .catch((err) => {
              console.log(err);
            });
          if (result.isConfirmed) {
            this.getDepartments();
            this.$swal.fire("স্বাগতম!", "ডিলিট হয়েছে ", "success");
          }
        });
    },
  },
};
</script>
