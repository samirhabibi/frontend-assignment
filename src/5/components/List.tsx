import { FunctionComponent } from "react";
import Item from "./Item";
import styled from "styled-components";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: string[];
  filterText: string;
}

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List: FunctionComponent<ListProps> = (props) => {
  return (
    <ListContainer>
      <Item items={props.items} filterText={props.filterText} />
    </ListContainer>
  );
};

export default List;
