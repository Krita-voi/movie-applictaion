import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "O Captain", release_date: "1989" },
    { id: 2, title: "Terminater", release_date: "2010" },
  ];
  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="searh-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
      </form>
      <div className="movies-gird">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
