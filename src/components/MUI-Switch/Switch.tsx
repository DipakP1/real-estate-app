import * as React from "react";
import Switch from "@mui/material/Switch";
import { Checkbox } from "@mui/material";

export default function ControlledSwitches({
  name,
  setState,
  state,
  Switchvalue,
  permissionType,

  allPermisson,
}: any) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.name, "EVENT");
    // setState((prev: any) => ({
    //   ...prev,
    //   [name]: prev[name] === undefined || prev[name] === false ? true : false,
    // }));

    // setState({
    //   ...state,
    //   [name]: {
    //     ...state[name],
    //     [permissionType]: !state[name],
    //   },
    // });
    setState((prev: any) => {
      console.log(prev[name], "PREV NAME");
      return {
        ...prev,

        ...prev[name],
        permissons:
          prev[name] === undefined || !prev[name][permissionType],
      };
    });
  };

  console.log(name, "NAME");
  return (
    <Checkbox
      checked={Switchvalue}
      onChange={handleChange}
      sx={{ color: "black" }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
