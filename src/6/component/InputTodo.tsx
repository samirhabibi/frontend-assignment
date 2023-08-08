// InputTodo.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

interface InputTodoProps {
  onAddTodo: (text: string, description: string) => void;
}

const InputBox = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 35%;
`;

const InputTodo: React.FC<InputTodoProps> = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleInputChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoTitle.trim() !== "" && todoDescription.trim() !== "") {
      onAddTodo(todoTitle, todoDescription);
      setTodoTitle("");
      setTodoDescription("");
    }
  };

  return (
    <>
      <InputBox
        type="text"
        placeholder="Task Title"
        value={todoTitle}
        onChange={handleInputChange}
      />
      <InputBox
        type="text"
        placeholder="Description"
        value={todoDescription}
        onChange={handleInputChangeDesc}
      />
      <Button text="Create Todo" onClick={handleAddTodo} />
    </>
  );
};

export default InputTodo;
