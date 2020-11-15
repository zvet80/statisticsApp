import React from "react";
import Button from "./Button";

const Modal = ({ children, onModalClose }) => {
  return (
    <>
      <div style={styles.overlay} onClick={onModalClose} />
      <div style={styles.container}>
        <Button label="X" onClick={onModalClose} style={styles.button} />
        {children}
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    flex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    width: "70%",
    height: "70%",
    padding: "16px",
    left: "15%",
    top: "20%",
    boxSizing: "border-box"
  },
  button: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "transparent",
    color: "black",
    width: "auto",
    padding: "10px",
    fontSize: 20,
    borderWidth: 0
  }
};

export default Modal;
