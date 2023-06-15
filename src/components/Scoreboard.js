const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard-container">
      <p>
        Score: <span>{currentScore}</span>
      </p>
      <p>
        Best Score: <span>{bestScore}</span>
      </p>
    </div>
  );
};

export default Scoreboard;
