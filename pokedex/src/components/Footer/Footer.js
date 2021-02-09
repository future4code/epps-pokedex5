import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: black;
  color: white;
`;

const ListMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const ItemFooter = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  margin: 5px;
`;

export default function Footer() {
  return (
    <DivContent>
      <ItemFooter href="">Item</ItemFooter>
      <ListMenu>
        <li>
          <ItemFooter href="">Item</ItemFooter>
        </li>
        <li>
          <ItemFooter href="">Item</ItemFooter>
        </li>
      </ListMenu>
    </DivContent>
  );
}
