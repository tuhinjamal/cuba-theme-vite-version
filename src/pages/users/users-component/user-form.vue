<template>
  <div>
    <b-form
      v-if="step === false"
      ref="my_box_a"
      class="needs-validation"
      novalidate=""
    >
      <b-row class="alignment">
        <b-col cols="12" class="bg-light mt-3">
          <h3 class="mt-3 text-black">
            নতুন কর্মকর্তা / কর্মচারী / ব্যবহারকারী সংযোজন
          </h3>
          <p class="text-muted">
            প্রদত্ত তথ্যানুযায়ী নতুন কর্মকর্তা / কর্মচারীর প্রোফাইল সেভ হবে।
            বিশেষ কিছু তথ্য-ব্যাতীত অন্যান্য তথ্যসমূহ যেকোনো সময়ে পরিবর্তন করা
            যাবে।
          </p>
        </b-col>
      </b-row>

      <b-row class="mx-2 p-1 rounded border bg-white alignment">
        <b-col v-if="mode == 'view'" cols="12" class="text-end">
          <b-link
            :to="`/user-edit/${$route.params.id}`"
            class="button-section btn btn-sm bg-success shadow-lg text-white rounded border-light my-1 ms-1"
          >
            এডিট করুন
          </b-link>
          <b-link
            :to="`/user-print/${$route.params.id}`"
            class="button-section btn btn-sm bg-success shadow-lg text-white rounded border-light my-1 ms-1"
          >
            print
          </b-link>
        </b-col>
        <!-- this is testing purpose vee validate sampele -->
        <!-- <Form @submit="onSubmit">
        <Field name="email" type="email" :rules="validateEmail" />
        <ErrorMessage name="email" />
        <button>Sign up for newsletter</button>
      </Form> -->
        <b-col cols="12" md="6" class="mt-3">
          <b-form-group class="text-black">
            <label for=""
              >ব্যাবহারকারীর নাম (বাংলা)
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.banglaName"
              placeholder="ব্যাবহারকারীর পুরো নাম বাংলায় লিখুন"
              :class="
                formSubmitted
                  ? banglaNameError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>

            <p v-if="errors[0] && !errors[0].message" class="text-danger">
              বাংলায় নাম লিখুন !!!
              <!-- {{ calcPosOfBox() }}
            {{ posBoxA }} -->
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-3">
          <b-form-group class="text-black">
            <label for=""
              >ব্যাবহারকারীর নাম (ইংরেজী)
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.englishName"
              placeholder="ব্যাবহারকারীর পুরো নাম ইংরেজীতে লিখুন"
              :class="
                formSubmitted
                  ? englishNameError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>

            <p v-if="errors[1] && !errors[1].message" class="text-danger">
              ইংরেজিতে নাম লিখুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label for=""
              >গ্রেড নির্বাচন <span class="text-danger">*</span></label
            >
            <multiselect
              v-if="mode !== 'view'"
              :disabled="mode == 'edit' || step === true"
              v-model="selectedGrade"
              deselect-label="Can't remove this value"
              track-by="id"
              label="grade"
              placeholder="Select one"
              :options="grades"
              :searchable="true"
              :allow-empty="false"
              :class="
                formSubmitted
                  ? selectedGradeError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            >
            </multiselect>
            <p v-if="errors[2] && !errors[2].message" class="text-danger">
              গ্রেড নির্বাচন করুন !
            </p>
            <b-form-input
              v-if="mode == 'view' && selectedGrade && selectedGrade.grade"
              :disabled="mode == 'view'"
              v-model="selectedGrade.grade"
              placeholder="গ্রেড নির্বাচন করুন "
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group
            class="text-black"
            label="শ্রেণী নির্বাচন (গ্রেডের সাপেক্ষে)"
          >
            <b-form-select
              v-if="mode !== 'view'"
              :disabled="step === true"
              v-model="form.class"
              :options="classA"
            ></b-form-select>
            <b-form-input
              v-if="mode == 'view'"
              :disabled="mode == 'view'"
              v-model="form.class"
              placeholder="আইডি নাম্বার"
              :class="
                formSubmitted ? (idNoError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for="">ডি-নথি আইডি <span class="text-danger">*</span></label>
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.idNo"
              placeholder="ডি-নথি আইডি"
              :class="
                formSubmitted ? (idNoError ? 'is-invalid' : 'is-valid') : ''
              "
              @input="checkDlength(form.idNo)"
            ></b-form-input>
            <p v-if="errors[3] && !errors[3].message" class="text-danger">
              ডি-নথি আইডি প্রদান করুন !!!
            </p>
            <!-- <p v-if="dLengthValidation == true && !errors[3]" :class="dLengthCss">
            D-nothi ID must be 6 digits
          </p> -->
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="ব্যাচ নাম্বার">
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.batchNo"
              placeholder="ব্যাচ নাম্বার"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label for=""
              >এন আই ডি নাম্বার <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.nid"
              placeholder="এন আই ডি নাম্বার"
              :class="
                formSubmitted ? (nidError ? 'is-invalid' : 'is-valid') : ''
              "
              @input="checkNIDlength(form.nid)"
            ></b-form-input>

            <p v-if="errors[4] && errors[4].message" class="text-danger">
              ১০ ,১৩ অথবা ১৭ ডিজিটের মধ্যে এন আইডি নাম্বার প্রদান করুন !!!
            </p>

            <p v-if="nidLengthValidation == true" :class="nidLengthCss">
              এন আইডি নাম্বার ১০ ,১৩ অথবা ১৭ ডিজিটের মধ্যে প্রদান করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="ক্যাডার">
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.cadre"
              placeholder="ব্যাবহারকারীর ক্যাডার নির্বাচন করুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="কর্মরত অঞ্চল">
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.workingArea"
              placeholder="ব্যাবহারকারীর কর্মরত অঞ্চল নির্বাচন করুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="সেকশন">
            <multiselect
              v-if="mode !== 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="selectedSection"
              deselect-label="Can't remove this value"
              track-by="id"
              label="name_bn"
              placeholder="Select section"
              :options="sections"
              :searchable="true"
              :allow-empty="false"
            >
            </multiselect>
            <b-form-input
              v-if="mode == 'view' && selectedSection && selectedSection.name"
              :disabled="mode == 'view' || step === true"
              v-model="selectedSection.name"
              placeholder="সেকশন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group
            class="text-black"
            label="পিতার নাম (বাংলায়, ১ম থেকে ৯ম গ্রেডের জন্য প্রযোজ্য)"
          >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.fatherName"
              placeholder="ব্যাবহারকারীর পিতার নাম বাংলায় লিখুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group
            class="text-black"
            label="মাতার নাম (বাংলায়, ১ম থেকে ৯ম গ্রেডের জন্য প্রযোজ্য)"
          >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.motherName"
              placeholder="ব্যাবহারকারীর মাতার নাম বাংলায় লিখুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for="">জন্ম তারিখ <span class="text-danger">*</span></label>
            <flat-pickr
              :disabled="mode == 'edit' || step === true"
              v-model="form.dateOfBirth"
              class="form-control"
              placeholder="YYYYY-MM-DD"
              :class="
                formSubmitted
                  ? dateOfBirthError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
              @change="getDate(form.dateOfBirth, (date_type = 'birth'))"
            />
            <p v-if="errors[6] && !errors[6].message" class="text-danger">
              জন্মতারিখ প্রদান করুন বয়স অবশ্যই ১৮ এর অধিক হতে হবে !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for=""
              >চাকরিতে যোগদানের তারিখ <span class="text-danger">*</span></label
            >
            <flat-pickr
              :disabled="mode == 'edit' || step === true"
              v-model="form.dateOfJoin"
              class="form-control"
              placeholder="YYYYY-MM-DD"
              :class="
                formSubmitted
                  ? dateOfJoinError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            />
            <p v-if="errors[5] && !errors[5].message" class="text-danger">
              চাকরিতে যোগদানের বয়স অবশ্যই ১৮ এর অধিক হতে হবে !!!
            </p>
            <p class="text-danger m-0 p-0" v-if="joiningDayWarning !== ''">
              {{ joiningDayWarning }}
            </p>
          </b-form-group>
        </b-col>

        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label for=""
              >পিআরএল শুরুর তারিখ <span class="text-danger">*</span></label
            >
            <flat-pickr
              :disabled="mode == 'edit' || step === true"
              v-model="form.prlStartDate"
              class="form-control"
              placeholder="YYYYY-MM-DD"
              :class="
                formSubmitted
                  ? prlStartDateError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
              @change="getPRLDate(form.prlStartDate, (date_type = 'prl'))"
            />
            <p v-if="errors[7] && !errors[7].message" class="text-danger">
              পিআরএল শুরুর তারিখ প্রদান করুন !!!
            </p>
            <p class="text-danger m-0 p-0" v-if="prlDayWarning !== ''">
              {{ prlDayWarning }}
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label>বিভাগ/প্রকল্প <span class="text-danger">*</span> </label>
            <multiselect
              v-if="mode !== 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="selectedDepartment"
              deselect-label="Can't remove this value"
              track-by="id"
              label="name"
              placeholder="Select one"
              :options="departments"
              :searchable="true"
              :allow-empty="false"
              :class="
                formSubmitted
                  ? selectedDepartmentError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            >
            </multiselect>
            <p v-if="errors[8] && !errors[8].message" class="text-danger">
              ডিপার্টমেন্ট অথবা সেকশন নির্বাচন করুন !!!
            </p>
            <b-form-input
              v-if="
                mode == 'view' && selectedDepartment && selectedDepartment.name
              "
              :disabled="mode == 'view' || step === true"
              v-model="selectedDepartment.name"
              placeholder="বিভাগ/প্রকল্প"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label for=""
              >বৈবাহিক অবস্থা <span class="text-danger">*</span>
            </label>
            <b-form-select
              v-if="mode !== 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="form.maritalStatus"
              :options="maritalStatus"
              :class="
                formSubmitted
                  ? maritalStatusError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-select>
            <p v-if="errors[9] && !errors[9].message" class="text-danger">
              বৈবাহিক অবস্থা নির্বাচন করুন
            </p>
            <b-form-input
              v-if="mode == 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="form.maritalStatus"
              placeholder="বৈবাহিক অবস্থা"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for=""
              >সর্বোচ্চ শিক্ষাগত যোগ্যতা
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.highestEducationLevel"
              placeholder="সর্বোচ্চ শিক্ষাগত যোগ্যতা প্রদান করুন "
              :class="
                formSubmitted
                  ? highestEducationLevelError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <p v-if="errors[10] && !errors[10].message" class="text-danger">
              সর্বোচ্চ শিক্ষাগত যোগ্যতা প্রদান করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label for="">লিঙ্গ <span class="text-danger">*</span></label>
            <b-form-select
              v-if="mode !== 'view'"
              :disabled="mode == 'edit' || step === true"
              v-model="form.gender"
              :options="gender"
              :class="
                formSubmitted ? (genderError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-select>
            <p v-if="errors[11] && !errors[11].message" class="text-danger">
              লিঙ্গ নির্বাচন করুন !!!
            </p>
            <b-form-input
              v-if="mode == 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="form.gender"
              placeholder="লিঙ্গ"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label>রক্তের গ্রুপ <span class="text-danger">*</span></label>
            <b-form-select
              v-if="mode !== 'view'"
              :disabled="mode == 'edit' || step === true"
              v-model="form.bloodGroup"
              :options="bloodGroup"
              :class="
                formSubmitted
                  ? bloodGroupError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-select>
            <b-form-input
              v-if="mode == 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="form.bloodGroup"
              placeholder="রক্তের গ্রুপ নির্বাচন করুন"
            ></b-form-input>
            <p v-if="errors[12] && !errors[12].message" class="text-danger">
              রক্তের গ্রুপ নির্বাচন করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for=""
              >ব্যক্তিগত মেইল <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.personalMail"
              placeholder="ব্যক্তিগত ইমেইল এড্রেস প্রদান করুন"
              :class="
                formSubmitted
                  ? personalMailError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <p v-if="errors[13] && !errors[13].message" class="text-danger">
              ব্যক্তিগত মেইল প্রদান করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label>অফিসিয়াল মেইল</label>
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.officialMail"
              placeholder="অফিসিয়াল ইমেইল এড্রেস প্রদান করুন"
            ></b-form-input>
            <!-- <p v-if="errors[14] && !errors[14].message" class="text-danger">
            অফিসিয়াল ইমেইল প্রদান করুন !!!
          </p> -->
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for="">
              ব্যক্তিগত নাম্বার (মোবাইল)
              <span class="text-danger">*</span></label
            >
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.personalNumber"
              placeholder="ব্যক্তিগত যোগাযোগ (মোবাইল) নাম্বার প্রদান করুন"
              :class="
                formSubmitted
                  ? personalNumberError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-input>
            <p v-if="errors[15] && !errors[15].message" class="text-danger">
              ব্যক্তিগত নাম্বার (মোবাইল ১১ ডিজিট ) প্রদান করুন !!!
              (ex:01xxxxxxxxx)
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black">
            <label>অফিসিয়াল নাম্বার </label>
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.officialNumber"
              placeholder="অফিসিয়াল যোগাযোগ (মোবাইল) নাম্বার প্রদান করুন"
            ></b-form-input>
            <!-- <p v-if="errors[16] && !errors[16].message" class="text-danger">
            অফিসিয়াল নাম্বার (মোবাইল) প্রদান করুন !!!
          </p> -->
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for="">স্ট্যাটাস <span class="text-danger">*</span></label>
            <b-form-select
              :disabled="mode == 'view' || step === true"
              v-model="form.status"
              :options="status"
              :class="
                formSubmitted ? (statusError ? 'is-invalid' : 'is-valid') : ''
              "
            ></b-form-select>
            <p v-if="errors[17] && !errors[17].message" class="text-danger">
              চাকুরির অবস্থা নির্বাচন করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="">
            <label for="">পদবি <span class="text-danger">*</span></label>

            <b-form-select
              v-if="mode !== 'view' || step === true"
              v-model="form.designation"
              :options="designations"
              value-field="name"
              text-field="name"
              :class="
                formSubmitted
                  ? selectedDesignationError
                    ? 'is-invalid'
                    : 'is-valid'
                  : ''
              "
            ></b-form-select>
            <b-form-input
              v-if="mode == 'view'"
              :disabled="mode == 'view' || step === true"
              v-model="form.designation"
              placeholder="avro.im"
              required
            ></b-form-input>

            <p v-if="errors[18] && !errors[18].message" class="text-danger">
              পদবি নির্বাচন করুন !!!
            </p>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1">
          <b-form-group class="text-black" label="টেলিফোন (অফিস)">
            <b-form-input
              :disabled="mode == 'view' || step === true"
              v-model="form.telephone"
              placeholder="অফিসিয়াল যোগাযোগ (টেলিফোন) নাম্বার প্রদান করুন"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1"></b-col>

        <b-col cols="12" md="6" class="mt-1" v-if="mode !== 'create'">
          <b-form-group class="text-black" label="ব্যাবহারকারীর প্রোফাইল ছবি*">
            <div
              class="d-flex flex-row justify-content-between border bg-light p-1"
            >
              <div v-if="mode !== 'view'" class="file myDIV w-100">
                <label for="input-file">
                  <img
                    src="../../../assets/images/ict-acr-images/user-section/file.png"
                    alt="upload-img"
                    class="img-fluid"
                  />
                </label>
                <input
                  @change="handleProfileImage($event, 'profile')"
                  id="input-file"
                  type="file"
                  :disabled="mode == 'view'"
                />
              </div>
              <div class="mx-1">
                <img
                  v-if="form.profileImage !== null || profileImage.file"
                  :src="
                    profileImage.type == 'profile'
                      ? profileImage.file
                      : form.profileImage
                      ? $store.state.appConfig.imageBaseUrl + form.profileImage
                      : `https://ui-avatars.com/api/?name=${form.englishName}`
                  "
                  height="92"
                  widht="100"
                  alt="document"
                  class="user-img mx-1"
                />
                <img
                  v-else-if="!profileImage.file"
                  src="../../../assets/images/ict-acr-images/avatar/avatar.png"
                  alt="upload-img"
                  height="92"
                  widht="100"
                />
              </div>
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6" class="mt-1" v-if="mode !== 'create'">
          <b-form-group
            class="text-black"
            label="ব্যাবহারকারীর স্বাক্ষরের ছবি*"
          >
            <div
              class="d-flex flex-row justify-content-between border bg-light p-1"
            >
              <div v-if="mode !== 'view'" class="file myDIV w-100">
                <label for="input-signature">
                  <img
                    src="../../../assets/images/ict-acr-images/user-section/file.png"
                    alt="upload-img"
                    class="img-fluid"
                  />
                </label>
                <input
                  @change="handleSignatureImage($event, 'signature')"
                  id="input-signature"
                  type="file"
                  :disabled="mode == 'view'"
                />
              </div>
              <div class="mx-1">
                <img
                  v-if="form.signatureImage !== null || signatureImage.file"
                  :src="
                    signatureImage.type == 'signature'
                      ? signatureImage.file
                      : form.signatureImage
                      ? $store.state.appConfig.imageBaseUrl +
                        form.signatureImage
                      : `https://ui-avatars.com/api/?name=${form.englishName}`
                  "
                  height="92"
                  widht="100"
                  alt="document"
                  class="user-img"
                />
                <img
                  v-else-if="!signatureImage.file"
                  src="../../../assets/images/ict-acr-images/avatar/signature.png"
                  alt="upload-img"
                  height="95"
                  widht="100"
                />
              </div>
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
          <b-button
            @click.prevent="stepCount('preview')"
            type="submit"
            class="mx-1"
            variant="primary"
          >
            <span v-if="step === false">সংরক্ষণ করুন </span>
            <span v-else>এডিট করুন</span>
          </b-button>
          <button
            v-if="mode == 'create' && step === true"
            class="btn btn-success"
            @click="createUser"
          >
            সংরক্ষণ করুন
          </button>

          <button
            v-if="mode == 'edit' && step === true"
            class="btn btn-success"
            @click="
              updateUser();
              uploadImage();
            "
          >
            আপডেট করুন
          </button>
        </b-col>
      </b-row>
    </b-form>
    <div v-if="step === true" class="row m-2">
      <div class="bg-white p-5 my-3">
        <div class="">
          <div class="">
            <div class="">
              <div class="">
                <div class="row">
                  <div class="d-flex flex-row justify-content-between">
                    <div class="col-6">
                      <h1 class="text-success">
                        <b
                          >বাংলাদেশ কম্পিউটার <br />
                          কাউন্সিল (বি সি সি )</b
                        >
                      </h1>
                      <h3 class="">
                        <b>কর্মকর্তা কর্মচারী বিস্তারিত</b>
                      </h3>
                    </div>
                    <div class="col-6 text-end">
                      <img
                        src="@/assets/images/ict-acr-images/loader/loader.png"
                        alt="BCC"
                        height="100"
                      />
                    </div>
                  </div>
                  <div class="">
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="">
            <div class="">
              <div class="">
                <div class="row">
                  <div class="px-4 mb-0">
                    <div class="row border rounded p-3">
                      <div class="col-2 text-start">
                        <img
                          v-if="
                            form.profileImage !== null &&
                            profileImage.type == 'profile'
                          "
                          :src="profileImage.file"
                          alt="user-img i"
                          height="110"
                          width="100"
                          class="m-2 img-fluid border border-black rounded"
                        />
                        <img
                          v-else
                          src="../../../assets/images/ict-acr-images/avatar/avatar.png"
                          alt="upload-img"
                          height="92"
                          widht="100"
                        />
                      </div>
                      <div class="col-3 text-end py-1">
                        <div class="d-flex flex-row justify-content-between">
                          <p class="">নাম</p>
                          <p class="">:</p>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                          <p class="">পদবী</p>
                          <p class="">:</p>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                          <p class="">বিভাগ/ প্রকল্প</p>
                          <p>:</p>
                        </div>
                      </div>
                      <div class="col-4 text-start py-1">
                        <div class="">
                          <p class="">{{ form?.banglaName }}</p>
                        </div>
                        <div class="">
                          <p class="">{{ form?.designation }}</p>
                        </div>
                        <div class="">
                          <p class="">{{ selectedDepartment?.name_bn }}</p>
                        </div>
                      </div>
                      <div
                        class="text-center col-2 py-1 button-section m-0 p-0"
                      >
                        <div class="row m-0 p-0">
                          <div class="col-12 col-md-6 m-0 p-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="">
            <div class="">
              <div class="">
                <div class="row">
                  <div class="mb-0">
                    <div class="row px-3 py-4">
                      <div
                        class="d-flex flex-row justify-content-between border rounded"
                      >
                        <div class="col-6 col-md-6 mt-4">
                          <div class="row">
                            <div class="col-12 col-md-12 text-start py-1">
                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">নাম (বাংলা)</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.banglaName }}</p>
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">পদবী</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.designation }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">ব্যাচ নাম্বার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.batchNo }}</p>
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">আইডি নাম্বার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.idNo }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">ক্যাডার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.cadre }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">সেকশন</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.section }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">মাতার নাম</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.motherName }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">জন্ম তারিখ</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ getHumanDate(form?.dateOfBirth) }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">বিভাগ/প্রকল্প</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ selectedDepartment?.name }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">সর্বোচ্চ শিক্ষাগত যোগ্যতা</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.highestEducationLevel }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">রক্তের গ্রুপ</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.bloodGroup }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">ব্যক্তিগত মেইল</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.personalMail }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">ব্যক্তিগত নাম্বার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.personalNumber }}</p>
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">অফিসিয়াল মেইল</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.officialMail }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 col-md-6 mt-4">
                          <div class="row">
                            <div class="col-12 col-md-12 text-start py-1">
                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">নাম (ইংরেজী)</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.englishName }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">গ্রেড</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.grade }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">শ্রেণী</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.class }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">এন আই ডি নাম্বার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.nid }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">কর্মরত অঞ্চল</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.workingArea }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">পিতার নাম</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">{{ form?.fatherName }}</p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">চাকরিতে যোগদানের তারিখ</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ getHumanDate(form?.dateOfJoin) }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">পিআরএল শুরুর তারিখ</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ getHumanDate(form?.prlStartDate) }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">বৈবাহিক অবস্থা</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.maritalStatus }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">লিঙ্গ</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.gender }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">টেলিফোন</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.telephone }}
                                  </p>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-4 d-flex justify-content-between"
                                >
                                  <p class="">অফিসিয়াল নাম্বার</p>
                                  <p>:</p>
                                </div>

                                <div class="col-8">
                                  <p class="">
                                    {{ form?.officialNumber }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-col v-if="mode !== 'view'" cols="12" class="text-center py-4">
          <b-button
            @click.prevent="stepCount('preview')"
            type="submit"
            class="mx-1"
            variant="primary"
          >
            <span v-if="step === false">সেভ করুন </span>
            <span v-else>এডিট করুন</span>
          </b-button>
          <button
            v-if="mode == 'create' && step === true"
            class="btn btn-success"
            @click="createUser"
          >
            সংরক্ষণ করুন
          </button>

          <button
            v-if="mode == 'edit' && step === true"
            class="btn btn-success"
            @click="
              updateUser();
              uploadImage();
            "
          >
            আপডেট করুন
          </button>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import moment from "moment";
const date = ref(null);
import userFormValidation from "@/mixins/commen/user-validation";
export default {
  mixins: [userFormValidation],
  components: {
    flatPickr,
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
      // default: "view",
    },
  },
  data() {
    return {
      step: false,
      posBoxA: null,
      flag: 0,
      // form: {
      //   banglaName: "",
      //   englishName: "",
      //   grade: "",
      //   class: "",
      //   idNo: "",
      //   batchNo: "",
      //   nid: "",
      //   cadre: "",
      //   workingArea: "",
      //   section: "",
      //   fatherName: "",
      //   motherName: "",
      //   dateOfJoin: "",
      //   dateOfBirth: "",
      //   prlStartDate: "",
      //   branch: "",
      //   maritalStatus: "",
      //   highestEducationLevel: "",
      //   gender: "",
      //   bloodGroup: "",
      //   personalMail: "",
      //   officialMail: "",
      //   personalNumber: "",
      //   officialNumber: "",
      //   status: "",
      //   designation: "",
      //   telephone: "",
      //   role: "",
      //   profileImage: "",
      //   signatureImage: "",
      // },
      text: "",
      image: null,
      images: [],
      userImage: {
        idNo: null,
        profile: "",
        signature: "",
      },
      profileImage: {
        type: "",
        file: "",
      },
      signatureImage: {
        type: "",
        file: "",
      },
      selectedSection: [],
      sections: [],
      departments: [],
      selectedDepartment: [],
      designations: [],
      selectedDesignation: [],
      selectedGrade: [],
      selectedRole: [],
      grades: [
        { id: 11, grade: "11th -16th grade" },
        { id: 9, grade: "1st - 9th grade" },
        { id: 10, grade: "10th grade" },
      ],
      status: ["Active", "Inactive"],
      maritalStatus: ["Married", "Un-married", "Separeted", "Widow"],
      gender: ["Male", "Female", "Other"],
      dynamicGrade: [],
      classA: ["1st class", "2nd class", "3rd class", "4th class"],

      bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      roles: [],
      userRole: [],

      joiningDayWarning: "",
      prlDayWarning: "",
      birth: "",
      join: "",
      prl: "",
      nidLength: [],
      nidLengthValidation: false,
      nidLengthCss: "",
      // D nothi validation
      dLength: [],
      dLengthValidation: false,
      dLengthCss: "",
    };
  },
  created() {
    if (this.mode == "edit" || this.mode == "view") {
      this.getUser();
    }
    if (this.mode == "create") {
      this.getSections();
      this.getDepartments();
      this.getDesignations();
    }
  },

  methods: {
    stepCount(preview) {
      if (this.selectedSection && this.selectedSection.id) {
        this.form.section = this.selectedSection.id;
      }
      if (this.selectedDepartment && this.selectedDepartment.id) {
        this.form.branch = this.selectedDepartment.id;
      }

      if (this.selectedGrade && this.selectedGrade.id) {
        this.form.grade = this.selectedGrade.id;
      }
      if (this.onCustomStyleSubmit(this.form)) {
        this.createOrUpdateUser(preview);
        this.step = !this.step;
        window.scrollTo(0, 0);
      }
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    calcPosOfBox(x, y) {
      setTimeout(async () => {
        if (this.flag === 0) {
          this.posBoxA = await this.$refs.my_box_a.$el.getBoundingClientRect()
            .x;
          window.scrollTo(this.posBoxA, this.posBoxA);
        }
        this.flag = 1;
      }, 50);
    },
    getDate(item, date_type) {
      var moment = require("moment");
      let date = new Date(item);
      var startDate = new Date();
      if (date_type === "birth") {
        this.birth = new Date(item);
        // this.birth = moment.duration(startDate - date).years();

        if (moment.duration(startDate - date).years() < 18) {
          this.birthDayWarning = " বয়স অবশ্যই ১৮ এর  অধিক হতে হবে !!!";
        } else {
          this.birthDayWarning = this.birth + " " + "বছর বয়স ";
        }
        this.form.prlStartDate = new Date(this.birth).setFullYear(
          new Date(this.birth).getFullYear() + 59
        );
      }

      if (date_type === "join") {
        this.join = new Date(item);

        // this.join = moment.duration(startDate - this.birth).years();
        if (moment.duration(this.join - this.birth).years() < 18) {
          this.joiningDayWarning = " বয়স অবশ্যই ১৮ এর  অধিক হতে হবে !!!";
        } else {
          this.joiningDayWarning = "";
        }
      }
    },
    createOrUpdateUser(preview) {
      if (this.form.id) {
        this.$store
          .dispatch("userStore/updateUser", this.form)
          .then((res) => {
            if (res.status === 200) {
              if (!preview) {
                this.$router.push(`/user-print/${this.$route.params.id}`);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$store
          .dispatch("userStore/createUser", this.form)
          .then((res) => {
            if (res.status == 201) {
              // this.uploadImage();
              if (!preview) {
                this.$router.push(`/user-print/${this.form.idNo}`);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getPRLDate(item, date_type) {
      // var moment = require("moment");
      // let date = new Date(item);
      // var startDate = new Date();
      // // if (date_type === "birth") {
      // //   this.birth = new Date(item);
      // //   // this.birth = moment.duration(startDate - date).years();
      // //   if (moment.duration(startDate - date).years() < 59) {
      // //     this.prlDayWarning = " বয়স অবশ্যই ১৮ এর  অধিক হতে হবে !!!";
      // //   } else {
      // //     this.prlDayWarning = this.birth + " " + "বছর বয়স ";
      // //   }
      // // }
      // if (date_type === "prl") {
      //   this.prlStartDate = new Date(item);
      //   // this.join = moment.duration(startDate - this.birth).years();
      //   if (moment.duration(this.prlStartDate - this.birth).years() < 59) {
      //     this.prlDayWarning = "পি আর এল অবশ্যই ৫৯ বছর হতে হবে  !!!";
      //   } else {
      //     this.prlDayWarning = "";
      //   }
      //   this.form.prlStartDate = new Date(this.birth).setFullYear(
      //     new Date(this.birth).getFullYear() + 60
      //   );
      // }
    },
    getUser() {
      this.$store
        .dispatch("userStore/getUserById", this.$route.params.id)
        .then((response) => {
          this.form = response;

          // setTimeout(() => {
          this.getSections();
          this.getDepartments();
          this.getDesignations();
          // }, 2000);
          if (this.grades && this.form.grade) {
            this.selectedGrade = this.grades.find(
              (e) => e.id == this.form.grade
            );
          }
        });
    },
    async getSections() {
      let res = await this.$store.dispatch("section/getSection");
      if (res.status == 200) {
        this.sections = res.data;

        if (this.sections && this.form.section) {
          this.selectedSection = this.sections.find(
            (e) => e.id == this.form.section
          );
        }
      }
    },
    async getDepartments() {
      let res = await this.$store.dispatch("department/getDepartment");
      if (res.status == 200) {
        this.departments = res.data;

        if (this.departments && this.form.branch) {
          this.selectedDepartment = this.departments.find(
            (e) => e.id == this.form.branch
          );
        }
      }
    },
    getDesignations() {
      this.$store
        .dispatch("designation/getDesignation")
        .then((res) => {
          this.designations = res.data;
          this.selectedDesignation = this.designations.find(
            (e) => e.id == this.form.designation
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dynamicGradeChange(item) {
      if (item.id === 9) {
        this.dynamicGrade = this.classA;
      } else if (item.id === 10) {
        this.dynamicGrade = this.classB;
      } else {
        this.dynamicGrade = this.classC;
      }
    },
    createUser() {
      if (this.selectedSection && this.selectedSection.id) {
        this.form.section = this.selectedSection.id;
      }
      if (this.selectedDepartment && this.selectedDepartment.id) {
        this.form.branch = this.selectedDepartment.id;
      }

      if (this.selectedGrade && this.selectedGrade.id) {
        this.form.grade = this.selectedGrade.id;
      }
      if (this.onCustomStyleSubmit(this.form)) {
        this.createOrUpdateUser();
      }
    },
    updateUser() {
      if (this.selectedSection && this.selectedSection.id) {
        this.form.section = this.selectedSection.id;
      }
      if (this.selectedDepartment && this.selectedDepartment.id) {
        this.form.branch = this.selectedDepartment.id;
      }
      if (this.selectedGrade && this.selectedGrade.id) {
        this.form.grade = this.selectedGrade.id;
      }
      if (this.onCustomStyleSubmit(this.form)) {
        this.createOrUpdateUser();
      }
    },
    handleProfileImage(e, type) {
      let file = e.target.files[0];
      // make base64 image for show preview
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let image = {
          type: type,
          file: reader.result,
        };
        this.profileImage.type = image.type;
        this.profileImage.file = image.file;
      };
    },
    handleSignatureImage(e, type) {
      let file = e.target.files[0];
      // make base64 image for show preview
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let image = {
          type: type,
          file: reader.result,
        };
        this.signatureImage.type = image.type;
        this.signatureImage.file = image.file;
      };
    },

    uploadImage() {
      this.userImage.idNo = this.$route.params.id;
      this.userImage.profile =
        this.profileImage.file.length > 100 ? this.profileImage.file : null;
      this.userImage.signature =
        this.signatureImage.file.length > 100 ? this.profileImage.file : null;

      this.userImage.profile = this.profileImage.file;
      this.userImage.signature = this.signatureImage.file;

      if (
        this.userImage.profile.length === 0 &&
        this.userImage.signature.length === 0
      ) {
      } else if (this.userImage.signature.length === 0) {
        let image = {
          idNo: this.$route.params.id,
          profile: this.userImage.profile,
        };
        this.$store
          .dispatch("userStore/uploadImage", image)
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      } else if (this.userImage.profile.length === 0) {
        let image = {
          idNo: this.$route.params.id,
          signature: this.userImage.signature,
        };
        this.$store
          .dispatch("userStore/uploadImage", image)
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$store
          .dispatch("userStore/uploadImage", this.userImage)
          .then((res) => {})
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // live validation
    checkNIDlength(item) {
      if (item.length === 10 || item.length === 13 || item.length === 17) {
        this.nidLengthValidation = false;
        this.nidLengthCss = "text-success";
      } else {
        this.nidLengthValidation = true;
        this.nidLengthCss = "text-warning";
      }
    },
    checkDlength(item) {
      item.slice(0, 6);

      if (item.length < 6 || item.length > 6) {
        this.dLengthValidation = true;
        this.dLengthCss = "text-danger";
      }
    },
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
