// ReusableFormInput.tsx
import { InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface ReusableFormInputProps {
  name: string;
  label: string;
  control: any;
  type?: string;
  error?: any;
}

const ReusableFormInput: React.FC<ReusableFormInputProps> = ({
  name,
  label,
  control,
  type = "text",
  error,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <InputLabel sx={{color:"#000"}}>{label}</InputLabel>
            <TextField
              {...field}
              type={type}
              // label={label}
              placeholder={label}
              fullWidth
              size="small"
              error={!!error}
              helperText={error ? error.message : ""}
            //   sx={{ mt: 2 }}
            />
          </>
        )}
      />
    </>
  );
};

export default ReusableFormInput;
