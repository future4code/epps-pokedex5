import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";

const DivContent = styled.div`
  display: flex;
  height: 60px;
  background-color: black;
`;

const ButtonHome = styled.button`
  cursor: pointer;
  background-color: black;
  color: White;
  border: 0px;
  padding: 10px;
`;

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <DivContent>
        <ButtonHome onClick={() => goToHome(history)}>Home</ButtonHome>
        <ButtonHome onClick={() => goToPokedex(history)}>Pokedex</ButtonHome>
      </DivContent>
    </div>
  );
}
