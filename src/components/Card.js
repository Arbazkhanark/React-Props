import "../styles.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <h2> {props.icon} </h2>
        <h1> {props.title} </h1>
        <p> {props.desc} </p>
      </div>
    </>
  );
}

export default Card;
