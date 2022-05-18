import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export default function InputText({
  id,
  label,
  placeholder,
  value,
  changeHandler,
  type,
}) {
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        type={type}
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </FormControl>
  );
}
