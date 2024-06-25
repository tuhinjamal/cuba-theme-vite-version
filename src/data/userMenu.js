export var userMenu = {
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
          role: "User",
        },
        {
          path: "/iro",
          title: "নন-গেজেটেড",
          type: "link",
          active: false,
          role: "User",
        },
        {
          path: "/iro",
          title: "ক্যাডার",
          type: "link",
          active: false,
          role: "User",
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
          role: "User",
        },
        {
          path: "approve-list",
          title: "নন-গেজেটেড",
          type: "link",
          active: false,
          role: "User",
        },
        {
          path: "approve-list",
          title: "ক্যাডার",
          type: "link",
          active: false,
          role: "User",
        },
      ],
    },
  ],
};
