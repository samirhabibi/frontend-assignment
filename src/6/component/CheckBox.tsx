// CheckBox.tsx
import React from "react";
import styled from "styled-components";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBoxInput = styled.input`
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckBoxInput
      type="checkbox"
      checked={checked}
      onChange={handleInputChange}
    />
  );
};

export default CheckBox;
