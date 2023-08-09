import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const getBgColor = (p) => {
  if (p.children === "Delete") {
    return css`
      background-color: #ff0000;
    `;
  }
  if (p.children === "Start") {
    return css`
      background-color: #6cb840;
    `;
  }

  if (p.children === "Stop") {
    return css`
      background-color: #b1000b;
    `;
  }
};

const StyledButton = styled.button`
  cursor: pointer;
  ${getBgColor};
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  width: 60px;
  color: #fff;
`;
