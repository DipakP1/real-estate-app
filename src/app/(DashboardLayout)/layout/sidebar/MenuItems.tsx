"use client";

import {
  IconLayoutDashboard
} from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems =[
// auth.user.role==="Employee"?[

// ]:

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/home",
    present:"yes"
  },
  {
    navlabel: true,
    subheader: "Pages",
    present:"yes"
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: IconLayoutDashboard,
    href: "/admin/reports",
    present:"yes"

  },
  {
    id: uniqueId(),
    title: "Masters",
    icon: IconLayoutDashboard,
    href: "/admin/masters",
    present:"yes"
  },
  {
    navlabel: true,
    subheader: "Authentication",
    present:"yes"
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLayoutDashboard,
    href: "/",
    present:"yes"

  },
  

]

export default Menuitems;
