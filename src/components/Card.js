const Card = ({ id, src, onClickPicture }) => {
  return (
    <div className="card-img-container">
      <img
        src={src}
        alt="mountain"
        id={id}
        className="card-img"
        onClick={onClickPicture}
      />
    </div>
  );
};

export default Card;
