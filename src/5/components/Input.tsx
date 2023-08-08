import { FunctionComponent } from "react";
import styled from "styled-components";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  onChange: (value: string) => void;
}

const InputBox = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div>
      <InputBox
        type="text"
        placeholder="Search"
        onChange={(e: any) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
