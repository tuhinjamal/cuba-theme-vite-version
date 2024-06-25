<template>
  <b-row>
    <b-col cols="12" class="mt-3">
      <b-link to="/create-reporter" class="btn btn-dark mt-4"
        >প্রতিবেদনকারী যোগ করুন
        <span>
          <img
            src="../../../assets/images/ict-acr-images/acr-section/plus-circle.png"
            alt="add"
          /> </span
      ></b-link>

      <b-table striped hover :items="items" :fields="fields" class="mt-5">
        <template #cell(id)="row">
          {{ row.index + 1 }}
        </template>
        <template #cell(user_name)="row">
          {{ row.item.user_name }} <br />({{ row.item.user_id }})
        </template>
        <template #cell(joining_date_current_position)="row">
          {{ getHumanDate(row.item.joining_date_current_position) }}
        </template>
        <template #cell(start_date)="row">
          {{ getHumanDate(row.item.start_date) }}
        </template>
        <template #cell(end_date)="row">
          {{ getHumanDate(row.item.end_date) }}
        </template>
        <template #cell(createdAt)="row">
          {{ getHumanDate(row.item.createdAt) }}
        </template>
        <template #cell(action)="row">
          <b-link
            :to="`/reporter-view/${row.item.id}`"
            class="btn btn-sm btn-primary"
          >
            <i class="fa fa-edit" aria-hidden="true"></i>
          </b-link>
          <button
            v-if="logedInUserRole.Admin === true"
            class="btn btn-sm btn-danger ms-1"
            @click.prevent="removeData(row.item.id)"
          >
            <i class="fa fa-trash" aria-hidden="true"></i></button></template
      ></b-table>
    </b-col>
    <b-col class="text-end">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="getReporter(1)"
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
                @click="getReporter(page)"
              >
                {{ page }}
              </button>
            </li>
          </ul>
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="getReporter(totalpages)"
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
import moment from "moment";
import { getLogedInUser, getLogedInUserInfo, getUserRole } from "@/utils/auth";

export default {
  data() {
    return {
      logedInUserRole: JSON.parse(getUserRole()),
      items: [],
      fields: [
        {
          key: "id",
          label: "ক্রম",
          sortable: true,
        },
        {
          key: "user_name",
          label: "ইউজার নেম ",
          sortable: true,
        },
        {
          key: "iro_name",
          label: "প্রতিবেদনকারী ",
          sortable: true,
        },
        {
          key: "cro_name",
          label: "প্রতিস্বাক্ষরকারী ",
        },

        {
          key: "gread",
          label: "গ্রেড  ",
        },
        {
          key: "start_date",
          label: " শুরুর তারিখ",
        },
        {
          key: "end_date",
          label: "শেষের তারিখ  ",
        },
        {
          key: "createdAt",
          label: "তারিখ ",
        },
        {
          key: "action",
          label: "সম্পাদন ",
        },
      ],
      userList: [],
      user: [],
      iro: [],
      cro: [],
      totalpages: null,
      page: 1,
    };
  },
  created() {
    this.getReporter(this.page);
  },
  methods: {
    getReporter(item) {
      this.$store
        .dispatch("reporter/getReporterWithPagination", item)
        .then((res) => {
          this.items = res.reporters;
          this.totalpages = res.totalpages;
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
            .dispatch("reporter/deleteReporterById", item)
            .then((res) => {
              this.getReporter(this.page);
            })
            .catch((err) => {
              console.log(err);
            });
          if (result.isConfirmed) {
            this.getReporter(this.page);
            this.$swal.fire("স্বাগতম!", "ডিলিট হয়েছে ", "success");
          }
        });
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
