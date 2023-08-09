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

interface ListItem {
  id: number;
  text: string;
}

const Task1: FunctionComponent = () => {
  // Initialize the state with an array of list items
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const addItem = () => {
    const newItem: ListItem = {
      id: listItems.length + 1,
      text: `Item ${listItems.length + 1}`,
    };
    setListItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <h1>Dynamic List Example</h1>
      <button onClick={addItem}>Add Item</button>
      <List>
        {/* Iterate over the listItems array using map */}
        {items.map((item) => (
          <ListItem key={index}>{item.text}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Task1;
