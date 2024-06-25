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
    },
    {
      title: "এসিআর",
      icon: "ACR",
      iconf: "fill-users",
      type: "sub",
      active: false,
      children: [
        {
          path: "/iro",
          title: "গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "/iro",
          title: "নন-গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "/iro",
          title: "ক্যাডার",
          type: "link",
          active: false,
        },
      ],
    },
    {
      title: "অনুমোদিত",
      icon: "APPROVEDLIST",
      iconf: "fill-users",
      type: "sub",
      active: false,
      children: [
        {
          path: "approve-list",
          title: "গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "approve-list",
          title: "নন-গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "approve-list",
          title: "ক্যাডার",
          type: "link",
          active: false,
        },
      ],
    },
    {
      title: "রিপোর্ট",
      icon: "REPORT",
      iconf: "fill-users",
      type: "sub",
      active: false,
      children: [
        {
          path: "report",
          title: "গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "report",
          title: "নন-গেজেটেড",
          type: "link",
          active: false,
        },
        {
          path: "report",
          title: "ক্যাডার",
          type: "link",
          active: false,
        },
      ],
    },
    {
      title: "সেটিংস",
      icon: "HR",
      iconf: "fill-users",
      type: "sub",
      active: false,
      children: [
        {
          path: "/users",
          title: "কর্মকর্তা",
          type: "link",
          active: false,
        },
        // {
        //   path: "/departments",
        //   title: "বিভাগ",
        //   type: "link",
        //   active: false,
        // },
        // {
        //   path: "/sections",
        //   title: "সেকশন",
        //   type: "link",
        //   active: false,
        // },
        // {
        //   path: "/designations",
        //   title: "পদবি",
        //   type: "link",
        //   active: false,
        // },

        {
          path: "/reporters",
          title: "প্রতিবেদনকারী",
          type: "link",
          active: false,
        },
        // {
        //   path: "/users",
        //   title: "অনুবিভাগ",
        //   type: "link",
        //   active: false,
        // },
        // {
        //   path: "/users",
        //   title: "জোন",
        //   type: "link",
        //   active: false,
        // },
        // {
        //   path: "/users",
        //   title: "রোল",
        //   type: "link",
        //   active: false,
        // },
        // {
        //   path: "/logs",
        //   title: "ইউজার লগ ",
        //   type: "link",
        //   active: false,
        // },
      ],
    },
  ],
};
