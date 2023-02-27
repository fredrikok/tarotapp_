import TarotData from '../data/tarot.json';

const Tarot = {
  cards: TarotData.cards.map((card) => {
    const slug = card.name.toLowerCase().replace(/\s+/g, '-');
    return {...card, slug};
  }),
  // ...
};

export default Tarot;