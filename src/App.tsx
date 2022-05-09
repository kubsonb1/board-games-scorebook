import React from "react";
import "./App.scss";
import HomePage from "./components/BoardGameList/BoardGameList";

function App() {
  const [isDisplayed, setIsDisplayed] = React.useState<boolean>(false);

  const onShowButtonSwitch = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <div className="App">
      {isDisplayed ? (
        <div>
          <HomePage closeComponent={onShowButtonSwitch} />
        </div>
      ) : (
        <>
          <div className="App-header">
            <p>Welcome to board games scorebook!</p>
            <button className="custom-btn" onClick={() => onShowButtonSwitch()}>
              Open board game list
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
