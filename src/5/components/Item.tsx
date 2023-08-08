import { FunctionComponent } from "react";
import styled from "styled-components";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  items: string[];
  filterText: string;
}

const ListItem = styled.li`
  padding: 8px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const Item: FunctionComponent<ItemProps> = (props) => {
  const filteredItems = props.items.filter((item) =>
    item.toLowerCase().includes(props.filterText.toLowerCase())
  );
  return (
    <>
      {filteredItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </>
  );
};

export default Item;
