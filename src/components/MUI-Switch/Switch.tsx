import * as React from "react";
import Switch from "@mui/material/Switch";
import { Checkbox } from "@mui/material";

export default function ControlledSwitches({
  name,
  setState,
  state,
  Switchvalue,
}: any) {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((prev: any) => ({
  //     ...prev,
  //     [name]: prev[name] === undefined || prev[name] === false ? true : false,
  //   }));
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev: any) => ({
      ...prev,
      [name]: prev[name] === undefined || prev[name] === false ? true : false,
    }));
  };

  return (
    // <Switch
    //   checked={Switchvalue}
    //   onChange={handleChange}
    //   inputProps={{ "aria-label": "controlled" }}
    // />
    <Checkbox
      checked={Switchvalue}
      onChange={handleChange}
      sx={{ color: "black" }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
