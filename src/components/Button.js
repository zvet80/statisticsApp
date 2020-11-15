import React from "react";

const Button = ({ label, onClick, style }) => {
  return (
    <button style={{ ...styles.container, ...style }} onClick={onClick}>
        {label}
    </button>
  );
};

const styles = {
  container: {
    backgroundColor: "purple",
    color: "white",
    width: "40%",
    padding: "10px",
    fontSize: 20
  }
};

export default Button;
