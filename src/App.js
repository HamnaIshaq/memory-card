import React, { useEffect, useState } from "react";

import "./styles/style.css";
import CardList from "./components/CardList";
import Scoreboard from "./components/Scoreboard";
const App = () => {
  let picturesArr = [
    {
      id: 1,
      src: "/assets/images/mountain-1.jpg",
    },
    {
      id: 2,
      src: "/assets/images/mountain-2.jpg",
    },
    {
      id: 3,
      src: "/assets/images/mountain-3.jpg",
    },
    {
      id: 4,
      src: "/assets/images/mountain-4.jpg",
    },
    {
      id: 5,
      src: "/assets/images/mountain-5.jpg",
    },
    {
      id: 6,
      src: "/assets/images/mountain-6.jpg",
    },
    {
      id: 7,
      src: "/assets/images/mountain-7.jpg",
    },
    {
      id: 8,
      src: "/assets/images/mountain-8.jpg",
    } /*
    {
      id: 9,
      src: "/assets/images/mountain-9.jpg",
    },
    {
      id: 10,
      src: "/assets/images/mountain-10.jpg",
    },*/,
  ];

  const [clickedPic, setClickedPic] = useState([]);
  const [cardsArr, setCardsArr] = useState(picturesArr);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // shuffle pictures on initial render
  useEffect(() => {
    shufflePictures();
  }, []);

  const onClickPicture = (e) => {
    const [clickedPicture] = picturesArr.filter(
      (picture) => picture.id === parseInt(e.target.id)
    );

    // check if a card has been clicked twice, if so end game
    // if current score is greater than best score then make it the best score
    // reset state current score, clicked pic
    const clickTwiceOnPicture = checkCardsClicked(parseInt(e.target.id));
    if (clickTwiceOnPicture) {
      restartGame();
      return;
    }

    setClickedPic([...clickedPic, clickedPicture]);
    setCurrentScore(currentScore + 1);
    shufflePictures();
  };

  function restartGame() {
    setClickedPic([]);
    if (currentScore > bestScore) setBestScore(currentScore);
    setCurrentScore(0);
  }

  function checkCardsClicked(clickedCardId) {
    return clickedPic.some((picture) => picture.id === clickedCardId);
  }

  function shufflePictures() {
    const arr = [];
    for (let i = 0; i < picturesArr.length; i++) {
      let randomNum = getRandomNum();
      let duplicate = checkForDuplicate(arr, picturesArr[randomNum]);

      while (duplicate === true) {
        randomNum = getRandomNum();
        duplicate = checkForDuplicate(arr, picturesArr[randomNum]);
      }
      arr.push(picturesArr[randomNum]);
    }
    setCardsArr(arr);
  }

  function checkForDuplicate(arr, item) {
    return arr.some((data) => data.id === item.id);
  }

  function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum >= 7) {
      randomNum = 7;
    }
    return randomNum;
  }

  return (
    <div className="container">
      <div className="header-container">
        <div className="heading-rules-container">
          <h1>Memoria Game</h1>
          <p>
            Click each card once! If you click the same card twice, you lose!
            Try to click all cards!
          </p>
        </div>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>
      <CardList cardsArr={cardsArr} onClickPicture={onClickPicture} />
    </div>
  );
};

export default App;
