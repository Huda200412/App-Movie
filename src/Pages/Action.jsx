import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Action = () => {
  let data = [
    {
      src: "images/Action/AmazingSpider-Man.png",
      title: "Amazing Spider-Man",
      description:
        "A teenager named Peter Parker discovers that he has special spider-like powers after being bitten by a radioactive spider. As he learns to control his abilities, he faces a dangerous enemy known as the Lizard, who threatens the city.Peter must learn what it means to be a hero while dealing with his personal life and responsibilities.",
      rating: 7.0,
    },
    {
      src: "images/Action/Havoc.png",
      title: "Havoc",
      description:
        "A detective gets caught in a violent criminal underworld while trying to rescue a politician’s son. As he fights his way through gangs and corruption, he discovers dark secrets that put his own life at risk.A gritty action thriller full of tension, danger, and nonstop chaos.",
      rating:6.8,
    },
    {
      src: "images/Action/mazerunner.png",
      title: "Maze Runner",
      description:
        "A group of teenagers wake up trapped in a giant maze with no memory of their past. To survive, they must work together to find a way out while facing deadly creatures and mysterious challenges inside the maze.A thrilling sci-fi adventure full of action, mystery, and survival.",
      rating: 7.5,
    },
    {
      src: "images/Action/Mirage.png",
      title: "Mirage",
      description:
        "A mysterious event connects a woman from the past with a woman in the present through a strange time disturbance. As she tries to change what happened, she discovers that even small changes can completely alter reality.A thrilling story full of mystery, time shifts, and unexpected twists.",
      rating: 7.5,
    },
  ];
  return (
    <>
      <h1 className=" text-center text-black fw-bold mb-2">Action Movies</h1>
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
export default Action;
