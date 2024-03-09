import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';

import MovieCard from './Components/MovieCard';

import moviesCardsData from './moviesCardsData.json';

function App() {
  
  return (
    <div className='flex flex-col gap-[1rem] pt-[1rem]'>
        <h1 className='displayNone'>Module5 React Day 4 HomeWork List of Movies Cards</h1>
      
        {moviesCardsData.map((movieData, idx)=><MovieCard key={idx} movieData={movieData} />)}
      
        
      
     
    </div>

  );
}

export default App;
