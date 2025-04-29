type SearchProps = {
  // Não terei nenhum retorno, mas tenho uma promessa sendo executada em Home pelos awaits.
  loadUser: (userName: string) => Promise<void>;
};

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
