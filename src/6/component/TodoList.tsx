// TodoList.tsx
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CheckBox from "./CheckBox";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  description: string;
}

interface TodoListProps {
  todos: TodoItem[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItemText = styled.span<{ done: boolean }>`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: ${(props) => (props.done ? "#888" : "#000")};
  cursor: pointer;
`;

const TodoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;
const StatusCell = styled.span<{ done: boolean }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.done ? "#4caf50" : "#f0ad4e")};
  color: #fff;
  font-weight: bold;
`;

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <TodoTable>
      <thead>
        <tr>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell style={{ textAlign: "center" }} width={40}>
              <CheckBox
                checked={todo.done}
                onChange={() => onToggleTodo(todo.id)}
              />
            </TableCell>
            <TableCell>
              <TodoItemText
                done={todo.done}
                onClick={() => onToggleTodo(todo.id)}
              >
                {todo.text}
              </TodoItemText>
            </TableCell>
            <TableCell>{todo.description}</TableCell>
            <TableCell width={50}>
              <StatusCell done={todo.done}>
                {todo.done ? "Done" : "Pending"}
              </StatusCell>
            </TableCell>
            <TableCell width={50}>
              <Button
                buttonStyles={{
                  padding: "5px 10px",
                  backgroundColor: "#C70000",
                }}
                hoverStyles={{ backgroundColor: "#a71a1a" }}
                onClick={() => onDeleteTodo(todo.id)}
                text="Delete"
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TodoTable>
  );
};

export default TodoList;
