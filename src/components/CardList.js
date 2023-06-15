import Card from "./Card";

const CardList = ({ cardsArr, onClickPicture }) => {
  const cards = cardsArr.map((picture) => {
    return (
      <Card
        key={picture.id}
        id={picture.id}
        src={picture.src}
        onClickPicture={onClickPicture}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

export default CardList;
