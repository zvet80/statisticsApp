import React from "react";

const ListItem = ({ item, isSelected, onItemClick }) => {
  const handleItemClick = () => onItemClick(item);

  return (
    <div style={{ ...styles.container, ...isSelected && styles.selected }} onClick={handleItemClick} key={item.Slug}>
      <div style={styles.items}>{item.title}</div>
      <div style={styles.items}>{item.subtitle}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#62D9C6",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "5px auto",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    padding: "10px"
  },
  items: {
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  selected: {
    backgroundColor: "purple"
  }
};

export default ListItem;
