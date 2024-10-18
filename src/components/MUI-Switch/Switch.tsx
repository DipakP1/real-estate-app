import * as React from "react";
import Switch from "@mui/material/Switch";
import { Checkbox } from "@mui/material";

export default function ControlledSwitches({
  name,
  setState,
  state,
  Switchvalue,
  permissionType,
  moduleId,
  subModuleId
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
    setState((prevFormData: any) =>
      prevFormData.map((module: any) => {
        if (module.moduleId === moduleId) {
          return {
            ...module,
            moduleType: module.moduleType.map((moduleType: any) => ({
              ...moduleType,
              submodule: moduleType.submodule.map((subModule: any) => {
                if (subModule.submoduleId === subModuleId) {
                  return {
                    ...subModule,
                    permissions: {
                      ...subModule.permissions,
                      [permissionType]: !subModule.permissions[permissionType]
                        ? 1
                        : 0,
                    },
                  };
                }
                return subModule;
              }),
            })),
          };
        }
        return module;
      })
    );
  };

  return (
    <Checkbox
      checked={Switchvalue}
      onChange={handleChange}
      sx={{ color: "black" }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
