import '../style/Main.css';
import {ReactComponent as Rectangle} from './rec.svg';
import Card from './Card.js';
import movieList from '../data.js';

movieList.sort(function(a, b){return a.date - b.date});

function Main() {
  return (
    <div className="main-container">
      <div className="main-title">
        <Rectangle />
        <h1>list of ghibli movies</h1>
      </div>
      <div className="main-items">

        {movieList.map((movie) => {
            return (
              <Card
                title={movie.title}
                date={movie.date}
                description={movie.description}
                urlImage={movie.urlImage}
              />
            );
        })}

      </div>
    </div>
  );
}

export default Main;
