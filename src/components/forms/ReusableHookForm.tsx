// ReusableFormInput.tsx
import { InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface ReusableFormInputProps {
  name: string;
  label: string;
  control: any;
  type?: string;
  error?: any;
  formData?: any;
  setFormData?: any;
}

const ReusableFormInput: React.FC<ReusableFormInputProps> = ({
  name,
  label,
  control,
  type = "text",
  error,
  formData,
  setFormData,
}) => {


  return (
    <>
      <InputLabel sx={{ color: "#000" }}>{label}</InputLabel>
      <TextField
        // type={type}
        // name={name}
        // // label={label}
        // placeholder={label}
        // onChange={handleChange}
        // value={formData[name]}
        // fullWidth
        // size="small"
        // error={!!error}
        // helperText={error ? error.message : ""}
        //   sx={{ mt: 2 }}
      />
    </>
  );
};

export default ReusableFormInput;
