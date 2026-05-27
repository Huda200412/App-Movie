import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Comedy = () => {
  let data = [
    {
      src: "images/Comedy/HomeAlone.png",
      title: "Home Alone",
      description: "A young boy is accidentally left behind when his family goes on vacation. At first he enjoys being alone, but soon he has to protect his home from two burglars using clever traps and tricks.A funny and heartwarming holiday movie full of chaos and creativity.",
      rating: 7.0,
    },
    {
      src: "images/Comedy/pizzamovie.png",
      title: "Pizza",
      description: "A simple and funny story centered around a group of friends whose lives get unexpectedly complicated after a pizza delivery goes wrong. What starts as an ordinary day quickly turns into a series of chaotic and hilarious events.A light comedy filled with fun moments and unexpected situations.",
      rating: 7.0,
    },
    {
      src: "images/Comedy/thefamilyplan.png",
      title: "The Family Plan",
      description: "A former assassin is trying to live a normal family life, but his past suddenly catches up with him. He is forced to take his family on the run while hiding his true identity, leading to a mix of action and comedy.A fun action-packed movie about family, secrets, and survival.",
      rating: 7.0,
    },
  ];
  return (
    <>
      <h1 className=" text-center text-black fw-bold mb-2" >Comedy Movies</h1>
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
export default Comedy;
