import "./joke.css";
import React from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = React.useState(false);
  function togglePunchLine(formData) {
    const formDataObject = Object.fromEntries(formData);
    console.log("formData is " + JSON.stringify(formDataObject));
    setIsShown((prevState) => !prevState);
  }
  console.log(isShown);
  return (
    <div className="joke">
      <form action={togglePunchLine}>
        {props.setup ? <h3>{props.setup}</h3> : <h3>Oops</h3>}
        <div className="punclinediv">
          <button>{isShown ? "Hide" : "Show"} Punchline</button>
          {isShown && <p>{props.punchline}</p>}
        </div>
      </form>
    </div>
  );
};

export default Joke;
