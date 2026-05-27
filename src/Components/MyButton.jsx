import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const MyButton = ({ text, onClick }) => {
  return (
    <div className="btn btn-outline-success" onClick={onClick}>
      {text}
    </div>
  );
};

export default MyButton;
  