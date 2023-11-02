import { useNavigate } from "react-router-dom";
function Card({
  picture,
  text,
  title,
  id,
}: {
  picture?: string;
  text?: string;
  title?: string;
  id?: string;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/cocktail/${id}`);
    }
  };
  return (
    <div className="card">
      {picture && <img src={picture} alt={title} />}
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {id && <a onClick={handleClick}>details...</a>}
    </div>
  );
}

export default Card;
