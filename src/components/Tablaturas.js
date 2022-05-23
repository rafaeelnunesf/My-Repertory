import parse from "html-react-parser";
import { Box } from "@mui/material";
import styled from "styled-components";

export default function Tabs({ textHtml }) {
  console.log(textHtml);
  return <StyledTabs>{parse(textHtml)}</StyledTabs>;
}

const StyledTabs = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  .tablatura {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 267px;
  }
`;
