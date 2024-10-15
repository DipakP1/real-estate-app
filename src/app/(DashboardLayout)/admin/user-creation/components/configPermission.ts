export const configureList = [
  {
    userType: "Broker",

    moduleDetails: [
      {
        moduleType: "Pre-Sales",
        subModule: [
          {
            title: "Site Visit Management",
            name: "site-visit-mng",
            permission: [
              { create: false },
              { read: false },
              { update: false },
              { delete: false },
            ],
          },
          {
            title: "Project Management",
            name: "project-mng",
            permission: [
              { create: false },
              { read: false },
              { update: false },
              { delete: false },
            ],
          },
          {
            title: "Project Management1",
            name: "project-mng-1",
            permission: [
              { create: false },
              { read: false },
              { update: false },
              { delete: false },
            ],
          },
        ],
      },
      {
        moduleType: "Tele Caller",
        subModule: [
          {
            title: "User 1",
            name: "user-1",
            permission: [
              { create: false },
              { read: false },
              { update: false },
              { delete: false },
            ],
          },
        ],
      },
    ],
  },
];
