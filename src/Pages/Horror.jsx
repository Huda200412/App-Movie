import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Horror = () => {
  let data = [
    {
      src: "images/Horror/Dontbreath.png",
      title: "Don't Breath",
      description: "A group of thieves break into the house of a blind man, thinking it will be an easy robbery. But they quickly realize that he is far more dangerous than they expected, and they become trapped inside with no way out.A tense and terrifying thriller where silence is the key to survival.",
      rating: 7.0,
    },
    {
      src: "images/Horror/Mirage.png",
      title: "Mirage",
      description:
        "A mysterious event connects a woman from the past with a woman in the present through a strange time disturbance. As she tries to change what happened, she discovers that even small changes can completely alter reality.A thrilling story full of mystery, time shifts, and unexpected twists.",
      rating: 6.5,
    },
    {
      src: "images/Horror/theconjuring.png",
      title: "The Conjuring",
      description:
        "A family moves into a new house and soon experiences terrifying supernatural events. They seek help from paranormal investigators who uncover a dark and dangerous presence haunting the home.A chilling horror story based on real paranormal cases.",
      rating: 7.5,
    },
    {
      src: "images/Horror/TheNUN.png",
      title: "The NUN",
      description:
        "A priest and a young nun are sent by the Vatican to investigate a mysterious death in a remote abbey. There, they encounter a terrifying demonic force in the form of a nun, which threatens their lives and faith.A dark and frightening horror story set in the world of The Conjuring.",
      rating: 6.0,
    },
  ];
  return (
    <>
      <h1 className=" text-center text-black fw-bold mb-2">Horror Movies</h1>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-sm-12 col-md-4 col-lg-3" key={index}>
            <Card
              src={item.src}
              title={item.title}
              description={item.description}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Horror;
