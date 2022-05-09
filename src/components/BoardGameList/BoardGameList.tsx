import * as React from "react";
import "./BoardGameList.scss";

interface IBoardGameList {
  possibleProp?: boolean;
  closeComponent: () => void;
}
const BoardGameList: React.FunctionComponent<IBoardGameList> = ({
  possibleProp,
  closeComponent,
}) => {
  const [nickname, setNickname] = React.useState<string>("Kubsonb1");
  const [boardCounter, setBoardCounter] = React.useState<number>(0);

  //hook
  React.useEffect(() => {
    const buttonElements = document.getElementsByClassName("home__action--btn");
    console.log("element:", buttonElements);
  }, []);

  const onAddNewBoardGame = () => {
    setBoardCounter(boardCounter + 1);
  };

  const onClearBoardGameList = () => {
    setBoardCounter(0);
  };

  return (
    <div className="home">
      <p className="home__title">
        Welcome to {nickname}'s board games scorebook!
      </p>
      current board games amount: {boardCounter}
      <div className="home__action">
        <button
          className="home__action--btn"
          onClick={() => onClearBoardGameList()}
          disabled={boardCounter === 0}
        >
          Reset all games
        </button>
        <button
          className="home__action--btn"
          onClick={() => onAddNewBoardGame()}
        >
          Add new board game
        </button>
        <button className="home__action--btn" onClick={() => closeComponent()}>
          back
        </button>
      </div>
      {/* <AboutPage /> */}
    </div>
  );
};

export default BoardGameList;
