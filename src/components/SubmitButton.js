import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

export default function SubmitButton({ children }) {
  return (
    <FormControl>
      <CustomButton variant="outlined" type="submit">
        {children}
      </CustomButton>
    </FormControl>
  );
}

const black = {
  500: "#000000",
  600: "#252525",
  700: "#CACACA",
};
const CustomButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${black[500]};

  font-size: 20px;
  font-weight: 700;

  padding: 12px 24px;
  border-radius: 8px;
  border-radius: 178px;

  color: white;
  transition: all 150ms ease;

  cursor: pointer;
  border: none;

  height: 50px;

  &:hover {
    background-color: ${black[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${black[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    background-color: ${black[700]};
    cursor: not-allowed;
  }
`;
