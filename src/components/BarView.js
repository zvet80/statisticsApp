import React from "react";

const BarView = ({ data, title, subtitle }) => {
  return (
      <div style={styles.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div style={styles.barsContainer}>
          <div style={styles.highest}>{data.highest}</div>
          {data?.history?.map((el, i) => <div key={i} style={{ ...styles.colorElement, height: `${el}%` }}/>)}
        </div>
      </div>
  );
};

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    height: "100%",
    width: "100%"
  },
  barsContainer: {
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    display: "flex",
    height: "90%",
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: "black",
    borderTopStyle: "dotted"
  },
  colorElement: {
    display: "flex",
    flex: 1,
    backgroundColor: "purple",
    margin: "0.5px",
    minWidth: "2px"
  },
  highest: {
    position: "absolute",
    top: 5,
    left: 5
  }
};

export default BarView;
