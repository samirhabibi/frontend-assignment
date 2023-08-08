import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  buttonStyles?: ButtonStyle;
  hoverStyles?: HoverStyle; // Hover styles as separate prop
}

interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  cursor?: string;
  textDecoration?: string;
  boxShadow?: string;
}

interface HoverStyle {
  backgroundColor?: string;
  color?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.buttonStyles?.backgroundColor || "#1877f2"};
  color: ${(props) => props.buttonStyles?.color || "#fff"};
  padding: ${(props) => props.buttonStyles?.padding || "8px 10px"};
  border: ${(props) => props.buttonStyles?.border || "none"};
  border-radius: ${(props) => props.buttonStyles?.borderRadius || "4px"};
  font-size: ${(props) => props.buttonStyles?.fontSize || "16px"};
  cursor: ${(props) => props.buttonStyles?.cursor || "pointer"};
  text-decoration: ${(props) => props.buttonStyles?.textDecoration || "none"};
  box-shadow: ${(props) =>
    props.buttonStyles?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.2)"};

  &:hover {
    background-color: ${(props) =>
      props.hoverStyles?.backgroundColor ||
      props.buttonStyles?.backgroundColor ||
      "#166fe5"};
    color: ${(props) =>
      props.hoverStyles?.color || props.buttonStyles?.color || "#fff"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  buttonStyles,
  hoverStyles,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      buttonStyles={buttonStyles}
      hoverStyles={hoverStyles}
    >
      {text || ""}
    </StyledButton>
  );
};

export default Button;
