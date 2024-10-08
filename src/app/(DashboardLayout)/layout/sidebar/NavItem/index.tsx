"use client";

import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import Badge, { BadgeProps } from "@mui/material/Badge";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  key?: number | any;
  pathDirect: string;
  level?: number | any;
}
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -20,
    top: 13,
    padding: "0 9px",
    backgroundColor: "#adde34",
    color:"#022213",
  },
}));

const NavItem = ({ item, level, key, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    padding: "0",
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      // padding: "8px",
      // borderRadius: "4px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: "grey",
      marginTop: "5px",
      fontWeight: "200",

      "&:hover": {
        backgroundColor: "#022213",
        // color: 'black',
        fontWeight: "700",
      },
      "&.Mui-selected": {
        // color: "white",
        backgroundColor: "#022213",
        borderLeft: "5px solid #acdd33",
        bordarRadius: "0 10px 10px 0",
        color: "#ffff",
        fontWeight: "700",

        "&:hover": {
          backgroundColor: "#022213",
          color: "white",
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={key}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href}
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? "_blank" : ""}
          onClick={onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: "36px",
              p: "5px 0",
              pl: pathDirect !== item.href ? 1 : 0,
              color: pathDirect === item.href ? "#acdd33" : "white",
              fontSize: "18px",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          {item.badge ? (
            <StyledBadge badgeContent={14}>
              <ListItemText>{item.title}</ListItemText>
            </StyledBadge>
          ) : (
            <ListItemText>{item.title}</ListItemText>
          )}
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
