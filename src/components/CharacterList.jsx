import React from "react";
import Character from "./Character";
import { useEffect, useState } from "react";


function NavPage(props) {

  const pageHandler = () =>{
    return props.page == 1 ? props.setPage(props.page) : props.setPage(props.page - 1)
    
  }

  return (
    <div className="col-12">
      <nav>
        <ul className="pager d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary btn-sm"
            onClick={pageHandler}
          >
            Prevous
          </button>
          <li className="list-style-none">{props.page}</li>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => props.setPage(props.page + 1)}
          >
            Next
          </button>
        </ul>
      </nav>
    </div>
  );
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fecthData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
      <br/>
    </div>
  );
};

export default CharacterList;
