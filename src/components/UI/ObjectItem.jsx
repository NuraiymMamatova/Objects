import React from "react";
import { styled } from "styled-components";

const ObjectItem = ({ bgColor, children }) => {
  return <StyledLiItem bgcolor={bgColor}>{children}</StyledLiItem>;
};

export default ObjectItem;

const StyledLiItem = styled.li`
  width: 150px;
  height: 100px;
  background-color: ${(p) => p.bgcolor};
  padding: 30px 0px 0px 40px;
`;
