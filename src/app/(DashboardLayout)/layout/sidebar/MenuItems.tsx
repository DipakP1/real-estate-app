"use client";

import {
  IconSettings2,
  IconShieldLock,
  IconLayoutDashboard,
  IconReport,
  IconBrandMastercard,
  IconKey,IconMail,IconUserCheck,IconUser
} from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems = [
  // auth.user.role==="Employee"?[

  // ]:

  {
    navlabel: true,
    subheader: "Menu",
    present: "yes"
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/home",
    present: "yes",
    badge:false,

  },
  {
    navlabel: true,
    subheader: "Pages",
    present: "yes"
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconReport,
    href: "/admin/reports",
    present: "yes",
    badge:false,
  },
  {
    id: uniqueId(),
    title: "User Managment",
    icon: IconUserCheck,
    href: "/admin/user-creation",
    present: "yes",
    badge:false,
  },
  {
    id: uniqueId(),
    title: "Lead Creation",
    icon: IconUserCheck,
    href: "/admin/lead-creation",
    present: "yes",
    badge:false,
  },

  {
    id: uniqueId(),
    title: "Leads",
    icon: IconUserCheck,
    href: "/admin/leads",
    present: "yes",
    badge:false,
  },



  {
    id: uniqueId(),
    title: "Users",
    icon: IconUser,
    href: "/admin/users",
    present: "yes",
    badge:false,

  },
  /*  {
    id: uniqueId(),
    title: "Lead Creation",
    icon: IconUserCheck,
    href: "/admin/lead-creation",
    present: "yes",
    badge:false,
  },  */
  {
    id: uniqueId(),
    title: "Masters",
    icon: IconBrandMastercard,
    href: "/admin/masters",
    present: "yes",
    badge:false,

  },
  {
    id: uniqueId(),
    title: "Message",
    icon: IconMail,
    badge:true,
    href: "/message",
    present: "yes"
  },


  {
    navlabel: true,
    subheader: "Authentication",
    present: "yes"
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconKey,
    href: "/",
    present: "yes",
    badge:false,

  },

  {
    navlabel: true,
    subheader: "General",
    present: "yes"
  },
  {
    id: uniqueId(),
    title: "Setting",
    icon: IconSettings2,
    href: "/",
    present: "yes",
    badge:false,

  },
  // {
  //   id: uniqueId(),
  //   title: "Security",
  //   icon: IconShieldLock,
  //   href: "/",
  //   present: "yes",
  //   badge:false,

  // },


]

export default Menuitems;
