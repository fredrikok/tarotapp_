import TarotData from '../data/tarot.json';

const Tarot = {
  cards: TarotData.cards.map((card) => {
    const slug = card.name.toLowerCase().replace(/\s+/g, '-');
    return {...card, slug};
  }),
};
function SingleCard() {
  const { slug } = useParams();
  const card = Tarot.cards.find(card => card.slug === slug);
  if (!card) {
    return <div>Card not found</div>
  }
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <img src={card.image} alt={card.name} />
      <p>{card.meaning_up}</p>
    </div>
  )
}
export default SingleCard;
