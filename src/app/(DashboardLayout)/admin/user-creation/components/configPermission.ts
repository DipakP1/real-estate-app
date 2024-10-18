export const configureList = [
  {
    userType: "Broker",
    moduleId: 1,
    moduleDetails: [
      {
        moduleType: "Pre-Sales",
        subModule: [
          {
            submoduleId: 10,

            title: "Site Visit Management",
            name: "site-visit-mng",
            permission: {
              read: 0,
              create: 0,
              edit: 0,
              delete: 0,
            },
          },
          {
            submoduleId: 11,
            title: "Project Management",
            name: "project-mng",
            permission: {
              read: 0,
              create: 0,
              edit: 0,
              delete: 0,
            },
          },
          {
            submoduleId: 12,
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
  {
    userType: "Builder",
    moduleId: 2,
    moduleDetails: [
      {
        moduleType: "User managment",
        subModule: [
          {
            submoduleId: 101,
            title: "Site Visit Management",
            name: "site-visit-mng",
            permission: {
              read: 0,
              create: 0,
              edit: 0,
              delete: 0,
            },
          },
        ],
      },
      {
        moduleType: "User managment 1",
        subModule: [
          {
            submoduleId: 102,

            title: "Site Visit Management",
            name: "site-visit-mng",
            permission: {
              read: 0,
              create: 0,
              edit: 0,
              delete: 0,
            },
          },
        ],
      },
    ],
  },
];

const data = {
  companyName: "asda",
  siteLocation: "fsdfds",
  userName: "wreer",
  employeeCode: "213",
  departmentId: 1,
  departmentName: "sadas",
  designationId: 2,
  designationName: "sdfsd",
  userTypeId: 22,
  userTypeName: "dasd",
  dateOfBirth: "2000-10-21",
  phoneNumber: "7469987676",
  emailId: "zzssx@gmail.com",
  aadharId: "433444444444",
  userPhoto: "http://localhost:8800/uploads/1728981573123-242665036.png",
  userSignature: "http://localhost:8800/uploads/1728981573122-616745486.png",
  permissions: {
    moduleId: 1,
    moduleName: "User Management",
    submodule: [
      {
        submoduleId: 101,
        submoduleName: "Create User",
        permissions: {
          read: 1,
          create: 1,
          edit: 0,
          delete: 0,
        },
      },
    ],
  },
};

const payload = {
  companyName: "Aa",
  siteLocation: "fsdfds",
  userName: "wreer",
  employeeCode: "213",
  departmentId: 1,
  departmentName: "sadas",
  designationId: 2,
  designationName: "sdfsd",
  userTypeId: 22,
  userTypeName: "dasd",
  dateOfBirth: "2000-10-21",
  phoneNumber: "9862111111",
  emailId: "agjj@gmail.com",
  aadharId: "433444444544",
  userPhoto: "http://localhost:8800/uploads/1728981573123-242665036.png",
  userSignature: "http://localhost:8800/uploads/1728981573122-616745486.png",
  permissions: [
    {
      moduleId: 1,
      moduleName: "User Management",
      moduleType: "broker",
      submodule: [
        {
          submoduleId: 101,
          submoduleName: "Create User",
          permissions: {
            read: 1,
            create: 1,
            edit: 0,
            delete: 0,
          },
        },
        {
          submoduleId: 102,
          submoduleName: "User update",
          permissions: {
            read: 1,
            create: 1,
            edit: 0,
            delete: 0,
          },
        },
      ],
    },
    {
      moduleId: 2,
      moduleName: "Marketing Management",
      moduleType: "broker",
      submodule: [
        {
          submoduleId: 101,
          submoduleName: "Analytics",
          permissions: {
            read: 1,
            create: 1,
            edit: 0,
            delete: 0,
          },
        },
      ],
    },
    {
      moduleId: 3,
      moduleName: "Sale Management",
      moduleType: "builder",
      submodule: [
        {
          submoduleId: 101,
          submoduleName: "Sale Analytics",
          permissions: {
            read: 1,
            create: 1,
            edit: 0,
            delete: 0,
          },
        },
      ],
    },
  ],
};
