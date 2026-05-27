import "bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./MyButton";
const Card = ({ src, title, description, rating }) => {
  return (
    <div className="card shadow-lg border-0 rounded-4 h-100" style={{ width: "18rem" }}>
      <img src={src} alt="Movie Poster" className="card-img-top rounded-top-4" width={{ height: "250px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted"  style={{ fontSize: "14px" }}>{description}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
      <MyButton  text="Tap to watch" onClick={() => alert("Card Added!")} />
    </div>
  );
};
export default Card;
