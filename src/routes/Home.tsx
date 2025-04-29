import { UserProps } from "../types/user";

import Search from "../components/Search";

import { useState } from "react";

const Home = () => {
  // Inicia o user como nulo para saber quando eu tenho um usuário armazenado aqui.
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default Home;
