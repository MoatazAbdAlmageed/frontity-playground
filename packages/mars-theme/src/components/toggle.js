import { connect, styled } from "frontity";
import React from "react";

const Toggle = ({ actions, state }) => {
  const { setLightMode, setDarkMode } = actions.theme;
  const { mode } = state.theme;
  return (
    <Container>
      <ButtonsStyled isSelected={mode === "light"} onClick={setLightMode}>
        Light
      </ButtonsStyled>
      <ButtonsStyled isSelected={mode === "dark"} onClick={setDarkMode}>
        Dark
      </ButtonsStyled>
    </Container>
  );
};

export default connect(Toggle);

const Container = styled.div`
  display: flex;
  margin: 1.5em 0;
`;

const ButtonsStyled = styled.button`
  padding: 10px;
  border: 0;
  background-color: ${({ isSelected }) => (isSelected ? "#ccc" : "#fff")};
`;
