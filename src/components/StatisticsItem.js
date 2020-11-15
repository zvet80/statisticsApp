import React from "react";

const StatisticsItem = ({ title, data, color }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.colorElement, backgroundColor: color }}/>
      <div style={styles.text}>{title}</div>
      <div style={styles.data}>{data}</div>
    </div>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex"
  },
  colorElement: {
    display: "flex",
    height: 10,
    flex: 1
  },
  text: {
    flex: 1,
    display: "flex",
    margin: "0 20px"
  },
  data: {
    flex: 1,
    display: "flex",
    margin: "0 20px",
    justifyContent: "flex-end"
  }
};

export default StatisticsItem;
