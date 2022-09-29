import './App.css';
// below is how to import a default export
import Header from './Components/Header';
// below is how to import an export by name
import { getMoviesByName } from './Utilities/movie-utils';
import MovieCard from './Components/MovieCard';
import MovieDetails from './Components/MovieDetails';

(async function ()
)

function App() {
  return (
    <div>
      <Header title="Howdy!" textColor="green" />

      <header title="Break Time!" textColor="green" />

      <Cartooncard />
      <Cartooncard />
    </div>
  );
}

// default export type
export default App;
