import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Action = () => {
  let data = [
    {
      src: "public/images/Action/AmazingSpider-Man.png",
      title: "Amazing Spider-Man",
      description:
        "A young man gains spider-like abilities and becomes a hero.",
      rating: 7.0,
    },
    {
      src: "public/images/Action/Havoc.png",
      title: "Havoc",
      description:
        "A group of superheroes must stop a powerful villain from destroying the world.",
      rating: 6.5,
    },
    {
      src: "public/images/Action/mazerunner.png",
      title: "Maze Runner",
      description:
        "A group of teenagers must navigate a deadly maze to find a way out.",
      rating: 7.5,
    },
    {
      src: "public/images/Action/Mirage.png",
      title: "Mirage",
      description:
        "A mysterious woman with incredible powers emerges from the shadows.",
      rating: 6.0,
    },
  ];
  return (
    <>
      <h1>Action Movies</h1>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-sm-12 col-md-4 col-lg-3" key={index}>
            <Card
              src={item.src}
              title={item.title}
              text={item.text}
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
