import "./App.css";
import { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddNewMovie";
import Search from "./Components/Search";

function App() {
  const [list, setList] = useState(moviesData);
  const [searchText, setsearchText] = useState("");
  const [rating, setRating] = useState(1);
  const handleSearchText = (x) => setsearchText(x);
  const handleRating = (x) => setRating(x);
  const handleDelete = (ID) => setList(list.filter((el) => el.id !== ID));
  const handleAdd = (newOne) => setList([...list, newOne]);
  const handleEdit = (editedOne) =>
    setList(list.map((el) => (el.id === editedOne.id ? editedOne : el)));
  return (
    <div className="App">
      <Search
        handleSearchText={handleSearchText}
        handleRating={handleRating}
        rating={rating}
        searchText={searchText}
      />
      <MovieList
        movies={list.filter(
          (el) =>
            el.name.toUpperCase().includes(searchText.toUpperCase()) &&
            el.rating >= rating
        )}
        deleteFunction={handleDelete}
        handleEdit={handleEdit}
      />
      <AddNewMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
