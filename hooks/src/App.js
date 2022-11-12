import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navvbar from "./component/Navvbar";
import Carrd from "./component/Carrd";
import Addmovie from "./component/Addmovie";
import Movieslist from "./views/Movieslist";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import MovieDetails from "./views/MovieDetails";
function App(props) {
  const [film, setFilm] = useState([
    {
      id: 0,
      name: "Raya and the Dragon",
      image:
        "https://img.moviesjoy.to/resize/188x288/da/6a/da6aee2241ea4c209000eb873b1e101d/da6aee2241ea4c209000eb873b1e101d.jpg",
      description:
        "A family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
      url: "https://moviesjoy.to/movie/the-mitchells-vs-the-machines-69623",
      rating: "4",
    },
    {
      id: 1,
      name: "Mortal Kombat",
      image:
        "https://img.moviesjoy.to/resize/188x288/d2/fc/d2fc1ca8f9fc8d04dfe3329a0f3257ef/d2fc1ca8f9fc8d04dfe3329a0f3257ef.jpg",
      description:
        "Sub-Zero prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      url: "https://moviesjoy.to/movie/mortal-kombat-66696",
      rating: "5",
    },
    {
      id: 2,
      name: "The Aftermath",
      image:
        "https://img.moviesjoy.to/resize/188x288/c2/19/c2191873b8a2fc677c047584ae2df6f0/c2191873b8a2fc677c047584ae2df6f0.jpg",
      description:
        " A young man named Darwin lives, in a small cement module with little more than a computer.",
      url: "https://moviesjoy.to/movie/2149-the-aftermath-69790",
      rating: "4",
    },
    {
      id: 3,
      name: "Good By Honey",
      image:
        "https://img.moviesjoy.to/resize/188x288/be/20/be208bd9ffd2ed045830848359db0319/be208bd9ffd2ed045830848359db0319.jpg",
      description:
        " A frantic crazy woman must coerce an exhausted truck driver to hide in the back of her truck. ",
      url: "https://moviesjoy.to/movie/goodbye-honey-69798",
      rating: "5",
    },
    {
      id: 4,
      name: "Long Weekend",
      image:
        "https://img.moviesjoy.to/resize/188x288/75/71/757144948175017c183e24aff21809f8/757144948175017c183e24aff21809f8.jpg",
      description:
        "Bart's chance encounter with the enigmatic Vienna leads to a whirlwind weekend together. ",
      url: "https://moviesjoy.to/movie/long-weekend-69800",
      rating: "2",
    },
    {
      id: 5,
      name: "Burning Lies",
      image:
        "https://img.moviesjoy.to/resize/188x288/11/ea/11eac8ffb567896f7d7072e5a2fc0792/11eac8ffb567896f7d7072e5a2fc0792.jpg",
      description:
        " A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. ",
      url: "https://moviesjoy.to/movie/burning-lies-69793",
      rating: "4",
    },
    {
      id: 6,
      name: "Love in Whitbrooke",
      image:
        "https://img.moviesjoy.to/resize/188x288/18/51/1851b6eca89f1f98500de4dfed8ab2a1/1851b6eca89f1f98500de4dfed8ab2a1.jpg",
      description:
        " A project manager is offered the career opportunity of a lifetime in London. ",
      url: "https://moviesjoy.to/movie/love-in-whitbrooke-69883",
      rating: "3",
    },
    {
      id: 7,
      name: "Seance",
      image:
        "https://img.moviesjoy.to/resize/188x288/80/0d/800ddf68d2f8fdf4cb640d0b40bfc612/800ddf68d2f8fdf4cb640d0b40bfc612.jpg",
      description:
        " Camille is the new girl at the prestigious Fairfield Academy for Girls. ",
      url: "https://moviesjoy.to/movie/seance-69916",
      rating: "5",
    },
  ]);
  const [text, setText] = useState("");
  const [rate, setrate] = useState(0);

  return (
    <div>
      <Navvbar setText={setText} setrate={setrate} />
      <Routes>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/movies"
          element={
            <div>
              <Addmovie film={film} setFilm={setFilm} />
              <Movieslist film={film} text={text} rate={rate} />
            </div>
          }
        />
        <Route path="/movie/details" element={<MovieDetails />} />
      </Routes>
      {/*  <Addmovie film={film} setFilm={setFilm} />
      <Movieslist film={film} text={text} rate={rate} /> */}
    </div>
  );
}

export default App;
