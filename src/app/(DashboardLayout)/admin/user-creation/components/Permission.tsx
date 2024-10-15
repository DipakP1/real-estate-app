"use client";
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Checkbox,
  Grid,
  Button,
  styled,
  FormControlLabel,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People"; // Icon for User Management
import AddIcon from "@mui/icons-material/Add"; // Icon for Add New Role
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EnablePermission from "./EnablePermission";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const PermissionsTable = ({ permissions }: { permissions: any }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [formData, setFormData] = useState({});

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  // return (
  //   <Box sx={{ mb: 2 }}>
  //     <Grid container spacing={2} sx={{ mt: 1 }}>
  //       {permissions.map((perm: any, index: number) => (
  //         <Grid item xs={6}>
  //           <Typography>{perm.module}</Typography>
  //           <Accordion
  //             expanded={expanded === `panel${index}`}
  //             onChange={handleChange(`panel${index}`)}
  //           >
  //             <AccordionSummary
  //               aria-controls="panel1d-content"
  //               id="panel1d-header"
  //             >
  //               <Typography>{perm.module}</Typography>
  //             </AccordionSummary>
  //             <AccordionDetails>
  //               <Grid container spacing={1}>
  //                 {perm.permissions.map((p: any, idx: number) => (
  //                   <>
  //                     <Grid container spacing={1}>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "bold" }}>
  //                           Module
  //                         </Typography>
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "bold" }}>
  //                           View
  //                         </Typography>
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "bold" }}>
  //                           Create
  //                         </Typography>
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "bold" }}>
  //                           Update
  //                         </Typography>
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "bold" }}>
  //                           Delete
  //                         </Typography>
  //                       </Grid>
  //                     </Grid>
  //                     <Grid container spacing={1}>
  //                       <Grid item xs={2.4}>
  //                         <Typography sx={{ fontWeight: "300" }}>
  //                           {`Module ${idx}`}
  //                         </Typography>
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Checkbox
  //                           checked={p.checked}
  //                           onChange={() => perm.togglePermission(p.name)}
  //                           sx={{ color: "#000" }} // Changed checkbox color to black
  //                         />
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Checkbox
  //                           checked={p.checked}
  //                           onChange={() => perm.togglePermission(p.name)}
  //                           sx={{ color: "#000" }} // Changed checkbox color to black
  //                         />
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Checkbox
  //                           checked={p.checked}
  //                           onChange={() => perm.togglePermission(p.name)}
  //                           sx={{ color: "#000" }} // Changed checkbox color to black
  //                         />
  //                       </Grid>
  //                       <Grid item xs={2.4}>
  //                         <Checkbox
  //                           checked={p.checked}
  //                           onChange={() => perm.togglePermission(p.name)}
  //                           sx={{ color: "#000" }} // Changed checkbox color to black
  //                         />
  //                       </Grid>
  //                     </Grid>
  //                     {/* <Grid item xs={2.4} key={idx}>
  //                       {p.name}
  //                     </Grid>
  //                     <Grid item xs={2.4} key={idx}>
  //                       <Checkbox
  //                         checked={p.checked}
  //                         onChange={() => perm.togglePermission(p.name)}
  //                         sx={{ color: "#000" }} // Changed checkbox color to black
  //                       />
  //                     </Grid> */}
  //                   </>
  //                 ))}
  //               </Grid>
  //             </AccordionDetails>
  //           </Accordion>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // );

  console.log(formData, "FORMDATA");
  return (
    <>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box
            sx={{
              borderBottom: expanded === "panel2" ? 1 : 0,
              width: "100%",
              borderColor: "divider",
              px: 2.5,
              py: 1.5,
            }}
          >
            <Typography variant="h6">Broker</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <EnablePermission formData={formData} setFormData={setFormData} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box
            sx={{
              borderBottom: expanded === "panel3" ? 1 : 0,
              width: "100%",
              borderColor: "divider",
              px: 2.5,
              py: 1.5,
            }}
          >
            <Typography variant="h6">Builder</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <EnablePermission formData={formData} setFormData={setFormData} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};


const UserPermission = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [permissions, setPermissions] = useState([
    {
      module: "Pre-Sales",
      permissions: [
        { name: "view", checked: false },
        { name: "create", checked: false },
        { name: "update", checked: false },
        { name: "delete", checked: false },
      ],
      togglePermission(name: string) {
        this.permissions = this.permissions.map((perm: any) =>
          perm.name === name ? { ...perm, checked: !perm.checked } : perm
        );
        setPermissions([...permissions]);
      },
    },
    {
      module: "Pre-Sales and Call Center",
      permissions: [
        { name: "view", checked: false },
        { name: "create", checked: false },
        { name: "update", checked: false },
        { name: "delete", checked: false },
      ],
      togglePermission(name: string) {
        this.permissions = this.permissions.map((perm: any) =>
          perm.name === name ? { ...perm, checked: !perm.checked } : perm
        );
        setPermissions([...permissions]);
      },
    },
    {
      module: "Lead Routing",
      permissions: [
        { name: "view", checked: false },
        { name: "create", checked: false },
        { name: "update", checked: false },
        { name: "delete", checked: false },
      ],
      togglePermission(name: string) {
        this.permissions = this.permissions.map((perm: any) =>
          perm.name === name ? { ...perm, checked: !perm.checked } : perm
        );
        setPermissions([...permissions]);
      },
    },
  ]);

  return (
    <Box sx={{ p: 2, border: "1px solid #ececec", borderRadius: "5px" }}>
      <PermissionsTable permissions={permissions} />
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#000", color: "#fff" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserPermission;
