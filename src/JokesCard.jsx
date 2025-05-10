import './JokesCard.css'
import Joke from './components/Joke'
import jokesData from './assets/jokesData.js' ;

function JokesCard() {

  return (
    <main className='Jokes-main'>
        {jokesData.map( jokeData => 
            <Joke
            key = {jokeData.id}
            setup= {jokeData.Setup}
            punchline={jokeData.Punchline}
          />
        )}
    </main>
  )
}

export default JokesCard