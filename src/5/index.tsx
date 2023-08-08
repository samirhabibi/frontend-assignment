import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import styled from "styled-components";

const IndexContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Task4: FunctionComponent = () => {
  const [filterText, setFilterText] = useState<string>("");
  const items: string[] = [
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
  ];

  const handleInputChange = (value: string) => {
    setFilterText(value);
  };

  return (
    <IndexContainer>
      <Input onChange={handleInputChange} />
      <br />
      <List items={items} filterText={filterText} />
    </IndexContainer>
  );
};

export default Task4;
