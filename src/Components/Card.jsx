import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyButton from "./MyButton";
const Card = ({ src,title, description,rating }) => {
    return(
        <div className="card">
            <img src={src} alt="Movie Poster" className="card-img-top" width={100} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Rating: {rating}</p>
            </div>
            <MyButton text="Tap to watch" onClick={() => alert("Card Added!")} />

        </div>
    )
}
export default Card;