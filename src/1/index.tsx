import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
  margin: auto;
`;

const Task1: FunctionComponent = () => {
  // Initialize the state with an array of list items
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <div>
      <List>
        {/* Iterate over the listItems array using map */}
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Task1;
