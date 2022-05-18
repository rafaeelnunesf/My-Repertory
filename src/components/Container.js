import styled from "styled-components";
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
