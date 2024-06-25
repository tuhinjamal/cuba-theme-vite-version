import { getUserRole } from "@/utils/auth";
let logedInUserRole = JSON.parse(getUserRole());

export var menuItems = {
  data: [
    {
      headTitle1: "General",
      headTitle2: "Dashboards,Widgets & Layout.",
      type: "headtitle",
    },
    {
      path: "/",
      title: "ড্যাশবোর্ড",
      icon: "Dashboard",
      iconf: "fill-board",
      type: "link",
      active: false,
      role: "dashboard",
    },
    {
      // user-acr
      title: "এসিআর",
      icon: "ACR",
      iconf: "fill-users",
      type: "sub",
      active: false,
      role: "dashboard",
      userRole: logedInUserRole?.IRO,
      children: [
        {
          path: "/acr-list-non-gazzeted",
          title: "গেজেটেড অফিসার্স",
          type: "link",
          active: false,
          role: "acr_request",
          userRole: logedInUserRole?.IRO,
        },
        {
          path: "/acr-list-non-gazzeted",
          title: "নন-গেজেটেড অফিসার্স",
          type: "link",
          active: false,
          role: "acr_request",
          userRole: logedInUserRole?.IRO,
        },
        {
          path: "/acr-list-non-gazzeted",
          title: "গেজেটেড ক্যাডার অফিসার্স",
          type: "link",
          active: false,
          role: "acr_request",
          userRole: logedInUserRole?.IRO,
        },
        {
          path: "/user-acr",
          title: "ব্যবহারকারীর এ সি আর ",
          type: "link",
          active: false,
          role: "dashboard",
          userRole: logedInUserRole?.IRO,
        },
      ],
    },
    {
      title: "অনুমোদিত",
      icon: "APPROVEDLIST",
      iconf: "fill-users",
      type: "sub",
      active: false,
      role: "acr_report",
      userRole: logedInUserRole?.CRO,
      children: [
        {
          path: "/acr",
          title: "গেজেটেড অফিসার্স",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
        {
          path: "/acr",
          title: "নন-গেজেটেড অফিসার্স",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
        {
          path: "/acr",
          title: "গেজেটেড ক্যাডার অফিসার্স",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
      ],
    },
    {
      title: "রিপোর্ট",
      icon: "REPORT",
      iconf: "fill-users",
      type: "sub",
      active: false,
      role: "dashboard",
      userRole: logedInUserRole?.CRO,
      children: [
        {
          path: "report",
          title: "গেজেটেড অফিসার্স ",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
        {
          path: "report",
          title: "নন-গেজেটেড অফিসার্স",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
        {
          path: "report",
          title: "গেজেটেড ক্যাডার অফিসার্স",
          type: "link",
          active: false,
          role: "acr_report",
          userRole: logedInUserRole?.CRO,
        },
        {
          path: "/user-acr",
          title: "এ সি আর রিপোর্ট",
          type: "link",
          active: false,
          role: "dashboard",
          userRole: logedInUserRole?.CRO,
        },
      ],
    },
    {
      title: "সেটিংস",
      icon: "HR",
      iconf: "fill-users",
      type: "sub",
      active: false,
      role: "settings",
      userRole: logedInUserRole?.User,
      children: [
        {
          path: "/users",
          title: "কর্মকর্তা",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },

        {
          path: "/departments",
          title: "বিভাগ",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },
        {
          path: "/wings",
          title: "অনুবিভাগ",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },
        {
          path: "/branches",
          title: "ব্রাঞ্চ ",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },
        {
          path: "/sections",
          title: "সেকশন",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },
        {
          path: "/designations",
          title: "পদবি",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },

        {
          path: "/reporters",
          title: "প্রতিবেদনকারী",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.Reporter_assign,
        },
        // {
        //   path: "/users",
        //   title: "অনুবিভাগ",
        //   type: "link",
        //   active: false,
        //   role: "settings",
        //  userRole: logedInUserRole?.access_log,
        // },
        {
          path: "/zones",
          title: "জোন",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.hr,
        },

        {
          path: "/roles",
          title: "রোল",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.Role,
        },
        {
          path: "/logs",
          title: "ইউজার লগ ",
          type: "link",
          active: false,
          role: "settings",
          userRole: logedInUserRole?.access_log,
        },
      ],
    },
  ],
};
