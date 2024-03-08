import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';

import MovieCard from './Components/MovieCard';

import moviesCardsData from './moviesCardsData.json';

function App() {
  
  return (
    <div>

      
        {moviesCardsData.map((movieCardsData, idx)=><MovieCard key={idx} movieCardsData={movieCardsData} />)}
      
        
      
     
    </div>

  );
}

export default App;
