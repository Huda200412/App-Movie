import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
const Comedy = () => {
  let data = [
    {
      src: "public/images/Comedy/HomeAlone.png",
      title: "Home Alone",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "public/images/Comedy/pizzamovie.png",
      title: "Pizza",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
    {
      src: "public/images/Comedy/thefamilyplan.png",
      title: "The Family Plan",
      description: "ijpjOJDVJ",
      rating: 7.0,
    },
  ];
  return (
    <>
      <h1>Comedy Movies</h1>
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
export default Comedy;
