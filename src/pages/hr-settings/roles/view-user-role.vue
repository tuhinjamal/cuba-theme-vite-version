<template>
  <b-form class="needs-validation" novalidate="">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black ms-1">ইউজারের রোল সম্পাদন করুন</h3>
      </b-col>
    </b-row>

    <b-row class="mx-2 p-1 rounded border bg-white alignment">
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="ডি-নথি আইডি  ">
          <b-form-input disabled v-model="form.idNo" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="ইউজারের নাম ">
          <b-form-input
            disabled
            v-model="form.banglaName"
            placeholder="ইউজারের  পুরো নাম বাংলায় লিখুন"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="12">
        <label for="">ইউজার রোল </label>
        <b-form-checkbox-group
          v-model="selected"
          :options="roles"
          class="mb-3 d-flex flex-wrap justify-content-between bg-light text-black p-2"
          value-field="id"
          text-field="title"
          size="lg"
        ></b-form-checkbox-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
        <button class="btn btn-success" @click="assignUserRole">
          রোল প্রদান
        </button>
        <!-- <button class="btn btn-danger ms-1" @click="showAlert()">
          ইউজার রোল রিমুভ
        </button> -->
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import moment from "moment";
const date = ref(null);
export default {
  data() {
    return {
      form: [],
      permissions: [],
      selected: [],
      roles: [],
      selected: [],
    };
  },
  async mounted() {
    await this.getUser();
    await this.viewUserRoleList();
  },
  methods: {
    async getUser() {
      let res = await this.$store.dispatch(
        "userStore/getUserById",
        this.$route.params.id
      );

      this.form = res;
    },

    async viewUserRoleList() {
      let res = await this.$store.dispatch("rolePermission/viewUserRole");
      if (res.status == 200) {
        this.roles = res.data;

        if (this.form && this.form.Roles && this.form.Roles.length > 0) {
          this.selected = this.form.Roles.map((role) => role.id);
        }
      }
    },
    assignUserRole() {
      let data = {
        id: this.form.id,
        role: this.selected,
      };

      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You are assigning user this selected roles !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Assign Role",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Assigned!",
              "You Have given this user all selected roles",
              "success"
            );

            this.$store
              .dispatch("rolePermission/assignUserRole", data)
              .then((res) => {
                if (res.status == 200) {
                  this.getUser();
                  this.viewUserRoleList();
                  this.$router.push(`/roles`);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    },
    deleteRole() {
      let form = { id: this.form.id, role: this.selected };

      this.$store
        .dispatch("userStore/deleteRole", form)
        .then((res) => {
          if (res.status == 200) {
            this.getUser();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Deleted!",
              "Your selected permissions for this role has been deleted.",
              "success"
            );
            this.deleteRole();
          }
        });
    },
  },
};
</script>
