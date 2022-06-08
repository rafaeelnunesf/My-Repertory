import parse from "html-react-parser";
import { Box } from "@mui/material";
import styled from "styled-components";

export default function Tabs({ textHtml }) {
  console.log(textHtml);
  return <StyledTabs readOnly value={textHtml} disabled></StyledTabs>;
}

const StyledTabs = styled.textarea`
  overflow-x: scroll;
  font-family: "Roboto Mono", "Courier New", "Courier", monospace;
  text-align: justify;
  width: 100%;
  height: 80%;
  border: 0;
  white-space: pre;
  resize: none;
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;
