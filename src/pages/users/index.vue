<template>
  <b-row>
    <b-col cols="12">
      <Breadcrumbs :title="$route.name" />
    </b-col>
    <b-col cols="12" class="mt-4 mb-2">
      <b-row class="border rounded mx-1 bg-white">
        <b-col class="pt-4">
          <div class="py-2 row">
            <div class="col-12 col-md-4">
              <b-link
                v-if="$route.name == 'User-List'"
                to="/create-user"
                class="btn btn-primary text-white"
              >
                <p class="m-0 p-0">
                  কর্মকর্তা / কর্মচারী সংযোজন
                  <span
                    ><img
                      src="@/assets/images/ict-acr-images/acr-section/plus-circle.png"
                      alt=""
                  /></span>
                </p>
              </b-link>
            </div>
            <div class="col-12 col-md-8 text-start">
              <b-input-group class="">
                <template #append>
                  <b-input-group-text
                    ><strong class="text-black">
                      <i class="fa fa-search" aria-hidden="true"></i></strong
                  ></b-input-group-text>
                </template>
                <b-form-input
                  placeholder="Search"
                  v-model="search"
                  @input="liveSearch(search, 1)"
                ></b-form-input>
              </b-input-group>
            </div></div
        ></b-col>

        <b-col class="" cols="12">
          <search-table class="my-3" :searchedList="searchedList" />
        </b-col>
      </b-row>
      <list-table
        v-if="searchedList.length === 0"
        class="my-3"
        :tableData="list"
        :tableLabel="fields"
        @reload="viewUserList"
      />
    </b-col>
    <!-- search pagination -->
    <b-col class="text-end" v-if="searchedList.length > 0">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="liveSearch(search, 1)"
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
                @click="liveSearch(search, page)"
              >
                {{ page }}
              </button>
            </li>
          </ul>
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="liveSearch(search, totalpages)"
            >
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </b-col>
    <!-- user list pagination -->
    <b-col class="text-end" v-if="searchedList.length === 0">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="viewUserList(1)"
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
                @click="viewUserList(page)"
              >
                {{ page }}
              </button>
            </li>
          </ul>
          <li class="page-item">
            <button
              class="btn btn-sm border rounded btn-white page-link"
              @click="viewUserList(totalpages)"
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
import listTable from "./users-component/users-table.vue";
import searchTable from "./users-component/search-table.vue";
export default {
  components: {
    listTable,
    searchTable,
  },
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      userList: [],

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
      list: [],
      totalpages: null,
      page: null,
      // search section
      search: "",
      searchedList: [],
      currentPage: 1,
    };
  },
  created() {
    this.viewUserList(1);
  },
  methods: {
    viewUserList(item) {
      this.$store
        .dispatch("userStore/getUsersWithPagination", item)
        .then((res) => {
          this.userList = res.users;
          this.totalpages = res.totalpages;
          this.list = this.userList.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    liveSearch(data, currentPage) {
      let item = {
        data: data,
        page: currentPage,
      };

      if (data == "") {
        this.searchedList = [];
      } else {
        this.$store
          .dispatch("userStore/search", item)
          .then((res) => {
            this.searchedList = res.users;
            this.totalpages = res.totalpages;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
