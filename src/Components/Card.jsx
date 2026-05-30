import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./MyButton";
import "./Card.css";
const Card = ({ src, title, description, rating }) => {
  return (
    <div className="movie-card" style={{ width: "18rem" }}>
      <img src={src} alt="Movie Poster"  width={{ height: "250px", objectFit: "cover" }} />
      <div className="movie-content">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="desc"  style={{ fontSize: "14px" }}>{description}</p>
        <p className="rating">Rating: {rating}</p>
      </div>
      <MyButton  text="Tap to watch" onClick={() => alert("Enjoy Watching!!")} />
    </div>
  );
};
export default Card;
