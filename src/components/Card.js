import React from "react";
import Button from "./Button";
import StatisticsItem from "./StatisticsItem";

const Card = ({ item }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.items}>{item.title}</h2>
      <div>{item.subtitle}</div>
      {item.details.map(detail => (
        <div key={detail.title}>
          <h3>{detail.title}</h3>
          {detail.elements.map(el => <StatisticsItem key={el.title} color={el.color} title={el.title} data={el.data}/>)}
        </div>
      ))}
      <Button style={styles.button} label={item.button.label} onClick={item.button.onClick} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "16px auto",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    padding: "16px",
    width: "90%"
  },
  items: {
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    margin: "20px",
    alignSelf: "center",
    justifyContent: "flex-start"
  }
};

export default Card;
