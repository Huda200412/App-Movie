import "bootstrap/dist/css/bootstrap.min.css";
const MyButton = ({ text, onClick }) => {
  return (
    <div className="btn btn-dark mt-auto w-100 rounded-3" onClick={onClick}>
      {text}
    </div>
  );
};

export default MyButton;
  