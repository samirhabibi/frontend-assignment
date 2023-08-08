import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid #ccc;
  margin: 8px;
`;

const SearchableList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Grapes",
    "Kiwi",
    "Mango",
    "Orange",
    "Peach",
    "Strawberry",
  ]);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  const [filteredItems, setFilteredItems] = useState(items);

  return (
    <Container>
      <FormInput
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />

      {filteredItems.length > 0 ? (
        <List>
          {filteredItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      ) : (
        <p>No results found</p>
      )}
    </Container>
  );
};

export default SearchableList;
