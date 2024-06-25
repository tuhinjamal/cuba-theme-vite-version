<template>
  <b-form class="needs-validation" novalidate="" id="role">
    <b-row class="alignment">
      <b-col cols="12" class="bg-light mt-3">
        <h3 class="mt-3 text-black" v-if="mode == 'create'">নতুন রোল সংযোজন</h3>
        <h3 class="mt-3 text-black" v-if="mode == 'edit'">রোল সম্পাদন</h3>
      </b-col>
    </b-row>

    <b-row class="mx-2 p-1 rounded border bg-white alignment">
      <b-col v-if="mode == 'view'" cols="12" class="text-end">
        <b-link
          :to="`/section-edit/${$route.params.id}`"
          class="btn btn-sm bg-success shadow-lg text-white rounded border-light my-1 ms-1"
        >
          এডিট করুন
        </b-link>
      </b-col>
      <b-col cols="12" md="6" class="mt-3">
        <b-form-group class="text-black" label="রোলের নাম ">
          <b-form-input
            :disabled="mode == 'view'"
            v-model="form.name"
            placeholder="বিভাগের  পুরো নাম বাংলায় লিখুন"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12" v-if="mode == 'edit'">
        <label for=""> পারমিশন</label>
        <b-form-checkbox v-model="allSelected" @input="toggleAll">
          {{ allSelected ? "Un-select All" : "Select All" }}
        </b-form-checkbox>
        <div
          v-for="(permission, index) in permissions"
          :key="index"
          class="check-box-css"
        >
          <div class="form-check">
            <input
              class="form-check-input border border-primary"
              type="checkbox"
              v-model="selected"
              :value="permission.id"
              :id="index"
            />
            <label class="form-check-label" :for="index">
              {{ permission.title }}
            </label>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
        <button
          v-if="mode == 'create'"
          class="btn btn-success"
          @click="createRole"
        >
          সেভ করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-success"
          @click="updateRole"
        >
          আপডেট করুন
        </button>
        <button
          v-if="mode == 'edit'"
          class="btn btn-danger ms-1"
          @click="showAlert()"
        >
          পারমিশন রিমুভ
        </button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

const date = ref(null);
// import acrEvaluationFormValidation from "@/mixins/commen/acr-validation/evaluation-form/formOne";
export default {
  // mixins: [acrEvaluationFormValidation],
  components: {
    flatPickr,
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },

    mode: {
      type: String,
    },
  },
  data() {
    return {
      permissions: [],
      selected: [],
      allSelected: false,
    };
  },
  mounted() {
    this.getPermissions();
  },
  methods: {
    toggleAll() {
      this.allSelected = !this.allSelected;
      this.permissions.forEach((e) => {
        if (this.allSelected == true) {
          this.selected.push(e.id);
        } else {
          this.selected.splice(e.id);
        }
      });
    },
    createRole() {
      this.$store
        .dispatch("rolePermission/createRole", this.form)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push(`/roles`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateRole() {
      this.form.Permissions = this.selected;

      this.$store
        .dispatch("rolePermission/assignUserPermissions", this.form)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push(`/roles`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletePermission() {
      this.form.Permissions = this.selected;

      this.$store
        .dispatch("rolePermission/deletePermission", this.form)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push(`/roles`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPermissions() {
      let res = await this.$store.dispatch("rolePermission/viewPermissions");
      this.permissions = res.data;
      if (
        this.form &&
        this.form.Permissions &&
        this.form.Permissions.length > 0
      ) {
        setTimeout(() => {
          this.selected = this.form.Permissions.map(
            (permission) => permission.id
          );
        }, 2000);
      }
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
            this.deletePermission();
          }
        });
    },
  },
};
</script>

<style scoped>
.alignment {
  margin-left: 10px !important;
  margin-right: 10px !important;
}
.next {
  background-color: #2f3349;
  color: white;
}
.prev {
  background-color: #f54b4b1a;
  border: 2px solid #f54b4b;
  color: #f54b4b;
}
.file {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.file > input[type="file"] {
  display: none;
}

.file > label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@keyframes pulse {
  0% {
    color: hsl(48, 100%, 67%);
  }

  50% {
    color: hsl(48, 100%, 38%);
  }

  100% {
    color: hsl(48, 100%, 67%);
  }
}

.hide {
  display: none;
  position: absolute;
  margin-top: -100px;
}

.myDIV:hover + .hide {
  display: block;
  color: red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
@/mixins/commen/acr-validation/evaluation-form/formOne
