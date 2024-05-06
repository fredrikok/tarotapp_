import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickNav from "../components/QuickNav";
import Tarot from "../data/tarot.json";
import questionCard from "../Img/emptycard.jpg";

const Card = ({ img, result, meaning, desc, isReversed }) => {
  return (
    <div className="main-box">
      <div className="cardpicked">
        <img
          className="card"
          src={img}
          alt={result}
          style={isReversed ? { transform: "rotateX(180deg)" } : {}}
        />
      </div>
      <div className="aside">
        <h3>
          {result} : {isReversed ? "Reversed" : "Upright"}
        </h3>
        <p>{isReversed ? meaning.meaning_rev : meaning.meaning_up}</p>
        <p>{desc}</p>
        <div className="read-more">
          <Link to={`/cardlist/${meaning.name_short}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

const TarotCard = () => {
  const [card, setCard] = useState({});
  const [questionCardVisible, setQuestionCardVisible] = useState(true);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const shuffle = () => {
    setShakeAnimation(true);
    setTimeout(() => {
      const randomCard =
        Tarot.cards[Math.floor(Math.random() * Tarot.cards.length)];
      setCard(randomCard);
      setQuestionCardVisible(false);
      setShakeAnimation(false);
      setShuffleButton("Try Again");
    }, 1000);
  };

  const tryAgain = () => {
    window.location.reload();
  };

  const [shuffleButton, setShuffleButton] = useState("Shuffle");

  return (
    <main>
      <section className="centeredcontent">
        <QuickNav />
        <div className="shufflebtn">
          {questionCardVisible ? (
            <button onClick={shuffle}>
              <div className="question-card-wrapper">
                {questionCardVisible && (
                  <img
                    className={`question-card${shakeAnimation ? " shake" : ""}`}
                    src={questionCard}
                    alt="Question card"
                  />
                )}
              </div>
            </button>
          ) : (
            <button onClick={tryAgain}>Try Again</button>
          )}
        </div>

        {card.name && (
          <Card
            img={card.image}
            result={card.name}
            meaning={card}
            desc={card.desc}
            isReversed={Math.random() >= 0.5}
          />
        )}
      </section>
    </main>
  );
};

export default TarotCard;
