import { createRoot } from 'react-dom/client'
import './index.css'
import LotsofEmojis from './LotsofEmojis.jsx'
import Counter from './Counter.jsx'
import LearnForm from './LearnForm.jsx'
import JokesCard from './JokesCard.jsx'

createRoot(document.getElementById('root')).render(
    <div className="container-body">
        <LotsofEmojis />
        <Counter/>
        <LearnForm/>
        <JokesCard/>
    </div>
)
