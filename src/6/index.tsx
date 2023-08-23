import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputTodo from "./component/InputTodo";
import TodoList from "./component/TodoList";
import { count } from "console";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  description: string;
}

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 35%;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  margin-top: 12px;
  border: none;
  background-color: #ccc;
  height: 1px;
`;

const Task6: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (text: string, description: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      done: false,
      description,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done } // Increment the count
          : todo
      )
    );
  };

    // Calculate the filtered todos to display
  const filteredTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(inputValue.toLowerCase()) ||
      todo.description.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Event handler function for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <AppContainer>
      <InputTodo onAddTodo={handleAddTodo} />

      <HorizontalLine />

      <SearchInput
        type="text"
        placeholder="Search todos..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </AppContainer>
  );
};

export default Task6;
