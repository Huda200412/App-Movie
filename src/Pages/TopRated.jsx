import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const TopRated = () => {
  let data = [
    {
      src: "images/TopRated/AmazingSpider-Man.png",
      title: "The Amazing Spider-Man",
      description:
        "A teenager named Peter Parker discovers that he has special spider-like powers after being bitten by a radioactive spider. As he learns to control his abilities, he faces a dangerous enemy known as the Lizard, who threatens the city.Peter must learn what it means to be a hero while dealing with his personal life and responsibilities.",
      rating: 7.0,
    },
    {
      src: "images/TopRated/Havoc.png",
      title: "Havoc",
      description:
        "A detective gets caught in a violent criminal underworld while trying to rescue a politician’s son. As he fights his way through gangs and corruption, he discovers dark secrets that put his own life at risk.A gritty action thriller full of tension, danger, and nonstop chaos.",
      rating:6.8,
    },
    {
      src: "images/TopRated/HomeAlone.png",
      title: "Home Alone",
      description:
        "A young boy is accidentally left behind when his family goes on vacation. At first he enjoys being alone, but soon he has to protect his home from two burglars using clever traps and tricks.A funny and heartwarming holiday movie full of chaos and creativity.",
      rating: 7.7,
    },
    {
      src: "images/TopRated/Mirage.png",
      title: "Mirage",
      description:
        "A mysterious event connects a woman from the past with a woman in the present through a strange time disturbance. As she tries to change what happened, she discovers that even small changes can completely alter reality.A thrilling story full of mystery, time shifts, and unexpected twists.",
      rating: 7.5,
    },
    {
      src: "images/TopRated/pizzamovie.png",
      title: "Pizza Movie",
      description:
        "A simple and funny story centered around a group of friends whose lives get unexpectedly complicated after a pizza delivery goes wrong. What starts as an ordinary day quickly turns into a series of chaotic and hilarious events.A light comedy filled with fun moments and unexpected situations.",
      rating:6.2,
    },
    {
      src: "images/TopRated/theconjuring.png",
      title: "The Conjuring",
      description:
        "A family moves into a new house and soon experiences terrifying supernatural events. They seek help from paranormal investigators who uncover a dark and dangerous presence haunting the home.A chilling horror story based on real paranormal cases.",
      rating: 7.5,
    },
  ];
  return (
    <>
      <h1 className=" text-center text-black fw-bold mb-2">Top Rated Movie</h1>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-sm-12 col-md-4 col-lg-3 text-rotate" key={index}>
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
export default TopRated;
