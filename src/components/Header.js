import React from "react";
import backgroundImage from "../assets/images/covid.jpg";

const Header = ({ title }) => {
  return (
    <header style={styles.container} >
      <h1 style={styles.title}>
        {title}
      </h1>
    </header>
  );
};

const styles = {
  container: {
    marginBottom: 50,
    backgroundImage: `url(${backgroundImage})`,
    minHeight: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    padding: 20,
    fontSize: 60,
    backgroundColor: "white",
    color: "purple",
    fontWeight: "bold",
    letterSpacing: 10
  }
};

export default Header;
