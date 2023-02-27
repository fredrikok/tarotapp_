import { useParams } from 'react-router-dom';

function SingleCard() {
  const { slug } = useParams();
  
  // Use the slug to get the data for the corresponding card from your Tarot data
  // ...
  
  return (
    <div>ok</div>
  );
}

export default SingleCard;