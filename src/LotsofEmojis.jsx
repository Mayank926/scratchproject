import React from "react";
import "./LotsofEmojis.css";

function LotsofEmojis() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <div id={thing.key} key={thing.key} onClick={remove}>
      {thing.emoji}
    </div>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevState) => [
      ...prevState,
      {
        key: crypto.randomUUID(),
        emoji: allFavoriteThings[prevState.length % allFavoriteThings.length],
      },
    ]);
  }

  function remove(event) {
    setMyFavoriteThings((prevState) => {
      console.log(JSON.stringify(prevState));
      return prevState.filter((e) => e.key !== event.target.id);
    });
  }
  return (
    <main className="LotsOfEmojis-main">
      <button type="button" onClick={addFavoriteThing}>
        Add item
      </button>
      <div className="emojisdisplay">{thingsElements}</div>
    </main>
  );
}

export default LotsofEmojis;
