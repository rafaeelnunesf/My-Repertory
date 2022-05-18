import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

export default function InputPassword({
  id,
  label,
  placeholder,
  value,
  changeHandler,
}) {
  const [showPassword, setShowPassword] = useState(false);
  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }
  function handleMouseDownPassword(e) {
    e.preventDefault();
  }
  return (
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}
