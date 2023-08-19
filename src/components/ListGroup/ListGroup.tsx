import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
import { AiTwotoneCalendar } from "react-icons/Ai";

const List = styled.ul`
  .list-group {
    list-style: none;
    padding: 0;
  }

  .container {
    background-color: yellow;
  }
`;

interface ListItemProps {
  activated: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.activated ? "blue" : null)};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   array[0]; //variable (selectedIndex)
  //   array[1]; //updater function

  return (
    <>
      <AiTwotoneCalendar color="red" size={40} />
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List className="list-group" style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <ListItem
            activated={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index), onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
