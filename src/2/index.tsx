import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const FormInput = styled.input`
  padding: 10px;
  margin: 5px;
  align-self: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>{value}</p>
    </div>
  );
};

export default Task2;
