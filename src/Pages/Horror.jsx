import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Horror = () => {
  let data = [
    {
      src: "images/Horror/Dontbreath.png",
      title: "Don't Breath",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/Horror/Mirage.png",
      title: "Mirage",
      description:
        "A group of friends discover a dark secret hidden in their small town.",
      rating: 6.5,
    },
    {
      src: "images/Horror/theconjuring.png",
      title: "The Conjuring",
      description:
        "A family moves into a haunted house and seeks the help of paranormal investigators.",
      rating: 7.5,
    },
    {
      src: "images/Horror/TheNUN.png",
      title: "The NUN",
      description:
        "A young nun is sent to a remote convent where she discovers a dark secret.",
      rating: 6.0,
    },
  ];
  return (
    <>
      <h1 className="text-black fw-bold mb-2">Horror Movies</h1>
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
