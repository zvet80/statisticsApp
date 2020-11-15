import React from "react";
import { Button } from "../components";

const HomePage = ({ history }) => {
  const onButtonClick = () => history.push("/statistics");

  return (
    <header className="App-header" >
      <Button label="Covid statistics" style={styles.button} onClick={onButtonClick} />
    </header>
  );
};

const styles = {
  button: {
    backgroundColor: "white",
    color: "purple",
    fontWeight: "bold",
    padding: 20,
    fontSize: 50
  }
};

export default HomePage;
