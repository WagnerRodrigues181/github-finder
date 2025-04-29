type SearchProps = {
  // Não terei nenhum retorno, mas tenho uma promessa sendo executada em Home pelos awaits.
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  // Tipos como esses são bem específicos, e eu os aprenderei ao programar aplicações reais.
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(event) => setUserName(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
