import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const TopRated = () => {
  let data = [
    {
      src: "images/TopRated/AmazingSpider-Man.png",
      title: "The Amazing Spider-Man",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/TopRated/Havoc.png",
      title: "Havoc",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/TopRated/HomeAlone.png",
      title: "Home Alone",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/TopRated/Mirage.png",
      title: "Mirage",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/TopRated/pizzamovie.png",
      title: "Pizza",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "images/TopRated/theconjuring.png",
      title: "The Conjuring",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
  ];
  return (
    <>
      <h1 className="text-black fw-bold mb-2">Top Rated Movie</h1>
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
export default TopRated;
