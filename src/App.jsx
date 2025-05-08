import React from 'react';
import './App.css'

function App() {

  const [myFavoriteThings,setMyFavoriteThings] = React.useState([]);
/**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */

const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
"🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

function addFavoriteThing() {
  // We'll work on this next, nothing to do here yet.
  setMyFavoriteThings(prevState => [...prevState,allFavoriteThings[(prevState.length)%allFavoriteThings.length]])
}
  return (
    <main>
    <button onClick={addFavoriteThing}>Add item</button>
    <section aria-live="polite">
      {thingsElements}
    </section>
  </main>
  )
}

export default App
