import React from "react";
import { styled } from "styled-components";

const ObjectsList = ({ children }) => {
  return <StyledObjectsList>{children}</StyledObjectsList>;
};

export default ObjectsList;

const StyledObjectsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style-position: inside;
  width: 90%;
  justify-content: center;
`;
