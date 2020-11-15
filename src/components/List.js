import React from "react";
import ListItem from "./ListItem";

const List = ({ list, selected, onListItemClick }) => {
  return (
      <div style={styles.container}>
        {list.map((item) => (
          <ListItem key={item.id} isSelected={item.id === selected} item={item} onItemClick={onListItemClick}/>
        ))}
      </div>
  );
};

const styles = {
  container: {
    height: "100%",
    overflowY: "scroll"
  }
};

export default List;
